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

    const ngModule = angular.module("app", [
        angularMaterial,
        angularMessages,
        uiRouter,
        angularAnimate,
        angularAria
    ]);

    ngModule.config(["$mdThemingProvider", "$compileProvider", "$stateProvider", "$urlRouterProvider", function ($mdThemingProvider, $compileProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');

        $compileProvider.debugInfoEnabled(false);

        Object.keys(routes).forEach(function (key) {
            let route = routes[key];
            $stateProvider.state(route);
        });

        $urlRouterProvider.otherwise("/error");
    }]);

    ngModule.run(["$transitions", "$rootScope", function ($transitions, $rootScope) {
        $transitions.onCreate({}, function ($transition) {
            if ($transition.$from() === $transition.$to()) {
                return;
            }

            $rootScope.loading = true;
            $rootScope.currentState = $transition.$to().name;

            $transition.onFinish({}, function () {
                $rootScope.loading = false;
                $rootScope.currentState = $transition.$to().name;
            });
        });

        bodyElement.classList.remove("loading");
    }]);

    const injector = angular.bootstrap(document, [ngModule.name]);
});
