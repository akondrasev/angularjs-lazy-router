export default {
    root: {
        name: "root",
        url: "/",
        component: "appComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/app.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
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
                import("./app/components/login.component/login.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    },

    error: {
        name: "root.error",
        url: "error",
        component: "errorComponent",
        isSafe: true,
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/error.component/error.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    },

    home: {
        name: "root.home",
        url: "home",
        component: "homeComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/home.component/home.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    }
}