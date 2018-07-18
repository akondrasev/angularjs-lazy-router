import routes from './routes';

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

    const injector = angular.bootstrap(document, [ngModule.name]);

    // const $rootScope = injector.get("$rootScope");
    // const $compile = injector.get("$compile");

    // import("./app/app.component").then((appModule) => {
    //     injector.loadNewModules([appModule.default]);
    //
    //     const appComponentElement = document.createElement("app-component");
    //     const bodyElement = document.getElementsByTagName("body")[0];
    //
    //     bodyElement.appendChild(appComponentElement);
    //
    //     $rootScope.$apply(function () {
    //         $compile(appComponentElement)($rootScope);
    //     });
    // });
});
