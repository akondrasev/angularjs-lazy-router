export default {
    login: {
        name: "login",
        url: "/login",
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
        name: "error",
        url: "/error",
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