import("./vendor").then((vendor) => {
    const angular = vendor.angular;
    const angularMaterial = vendor.angularMaterial;
    const angularMessages = vendor.angularMessages;
    const uiRouter = vendor.uiRouter;
    const angularAnimate = vendor.angularAnimate;
    const angularAria = vendor.angularAria;

    const ngModule = angular.module("app", [
        angularMaterial, angularMessages, uiRouter, angularAnimate, angularAria
    ]);

    const injector = angular.bootstrap(document, [ngModule.name]);
    const $rootScope = injector.get("$rootScope");
    const $compile = injector.get("$compile");

    ngModule.config(["$mdThemingProvider", "$compileProvider", function ($mdThemingProvider, $compileProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');

        $compileProvider.debugInfoEnabled(false);
    }]);

    import("./app/app.component").then((appModule) => {
        injector.loadNewModules([appModule.default]);

        const appComponentElement = document.createElement("app-component");
        const bodyElement = document.getElementsByTagName("body")[0];

        bodyElement.appendChild(appComponentElement);

        $rootScope.$apply(function () {
            $compile(appComponentElement)($rootScope);
        });
    });
});
