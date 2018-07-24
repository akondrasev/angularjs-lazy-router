import routes from './routes';
import './styles.css';

const bodyElement = document.getElementsByTagName("body")[0];

import("./vendor").then((vendor) => {
    const angular = vendor.angular;
    const angularMaterial = vendor.angularMaterial;
    const angularMessages = vendor.angularMessages;
    const uiRouter = vendor.uiRouter;
    const angularAnimate = vendor.angularAnimate;
    const angularAria = vendor.angularAria;
    const authService = vendor.authService;
    const StickyStatesPlugin = vendor.StickyStatesPlugin;

    let loadingState = false;
    let loadingCounter = 0;

    const ngModule = angular.module("app", [
        angularMaterial,
        angularMessages,
        uiRouter,
        angularAnimate,
        angularAria,
        authService,

        // stickyRouter
    ]);

    ngConfig.$inject = ["$mdThemingProvider", "$compileProvider", "$stateProvider", "$urlRouterProvider", "$uiRouterProvider"];
    function ngConfig ($mdThemingProvider, $compileProvider, $stateProvider, $urlRouterProvider, $uiRouterProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('blue');

        $compileProvider.debugInfoEnabled(false);

        routes.forEach(function (route) {
            $stateProvider.state(route);
        });

        $urlRouterProvider.otherwise(function (injector, locationService) {
            if (locationService.hash() === "") {
                return "/";
            } else {
                return "/error";
            }
        });

        $uiRouterProvider.plugin(StickyStatesPlugin);
    }

    ngModule.config(ngConfig);

    ngModule.run(["$transitions", "$rootScope", "authService", function ($transitions, $rootScope, authService) {
        $rootScope.routes = routes;
        $rootScope.openedModules = [];

        Object.defineProperty($rootScope, "loading", {
            get: function () {
                return loadingState;
            },

            set: function (value) {
                if (loadingState === true && loadingState === value) {
                    loadingCounter++;
                    return;
                }

                if (loadingState === true && value === false && loadingCounter > 0) {
                    loadingCounter--;
                    return;
                }

                loadingState = value;
            }
        });

        $transitions.onBefore({to: "root.**"}, function ($transition) {
            if (!authService.getUserData()) {
                $rootScope.currentState = $transition.$from().name;
                $rootScope.loading = false;
                $transition.router.stateService.transitionTo("login");
                return false;
            }
        });

        $transitions.onBefore({ to : "login"}, function ($transition) {
            if (authService.getUserData()) {
                $rootScope.currentState = $transition.$from().name;
                $rootScope.loading = false;
                $transition.router.stateService.transitionTo("root.home");
                return false;
            }
        });

        $transitions.onCreate({}, function ($transition) {
            if ($transition.$from() === $transition.$to()) {
                return;
            }

            $rootScope.loading = true;

            $transition.promise.finally(() => {
                $rootScope.loading = false;
            }).catch((data) => {
                // console.log("transition error: ", data);
            }).then(() => {
                const to = $transition.$to();
                $rootScope.currentState = to.name;

                const duplicate = $rootScope.openedModules.find((_route) => {
                    return _route.name === to.name;
                });

                if (to.showInMenu && !duplicate) {
                    $rootScope.openedModules.push(to);
                }
            });
        });

        bodyElement.classList.remove("loading");
    }]);

    const injector = angular.bootstrap(document, [ngModule.name]);
});
