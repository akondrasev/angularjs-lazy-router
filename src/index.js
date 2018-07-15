import("./vendor").then((vendor) => {
    const angular = vendor.angular;
    const angularMaterial = vendor.angularMaterial;
    const angularMessages = vendor.angularMessages;

    const ngModule = angular.module("app", [angularMaterial, angularMessages]);
    const injector  = angular.bootstrap(document, [ngModule.name]);
    const $rootScope = injector.get("$rootScope");
    const $compile = injector.get("$compile");

    import("./app/app.component").then((appModule) => {
        injector.loadNewModules([appModule.default]);

        const element = document.createElement("app-component");
        document.getElementsByTagName("body")[0].appendChild(element);

        $rootScope.$apply(function () {
            $compile(element)($rootScope);
        });
    });
});
