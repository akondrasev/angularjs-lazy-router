export default {
    root: {
        name: "root",
        url: "/",
        component: "appComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/app.component").then((appComponent) => {
                    transition.injector().native.loadNewModules([appComponent.default]);
                    resolve();
                });
            });
        }
    },

    login: {
        name: "root.login",
        url: "login",
        component: "loginComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/login.component/login.component").then((loginComponent) => {
                    transition.injector().native.loadNewModules([loginComponent.default]);
                    resolve();
                });
            });
        }
    },

    error: {
        name: "root.error",
        url: "error",
        component: "errorComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/error.component/error.component").then((errorComponent) => {
                    transition.injector().native.loadNewModules([errorComponent.default]);
                    resolve();
                });
            });
        }
    }
}