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

    let loadingState = false;
    let loadingCounter = 0;

    const ngModule = angular.module("app", [
        angularMaterial,
        angularMessages,
        uiRouter,
        angularAnimate,
        angularAria,
        authService
    ]);

    ngModule.config(["$mdThemingProvider", "$compileProvider", "$stateProvider", "$urlRouterProvider", function ($mdThemingProvider, $compileProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('blue');

        $compileProvider.debugInfoEnabled(false);

        Object.keys(routes).forEach(function (key) {
            let route = routes[key];
            $stateProvider.state(route);
        });

        $urlRouterProvider.otherwise("/error");
    }]);

    ngModule.run(["$transitions", "$rootScope", "authService", function ($transitions, $rootScope, authService) {
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

        $transitions.onBefore({to: "root.*"}, function ($transition) {
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
                console.log("transition error: ", data);
            }).then(() => {
                $rootScope.currentState = $transition.$to().name;
            });
        });

        bodyElement.classList.remove("loading");
    }]);

    const injector = angular.bootstrap(document, [ngModule.name]);
});
