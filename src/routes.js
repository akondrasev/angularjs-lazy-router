export default [
    {
        name: "rootState.app",
        url: "app",
        component: "appComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/app.component/app.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    },

    {
        name: "rootState.login",
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

    {
        name: "rootState.error",
        url: "error",
        component: "errorComponent",
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/error.component/error.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    },

    {
        name: "rootState.app.home",
        url: "/home",
        sticky: true,
        showInMenu: true,
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/home.component/home.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        },
        views: {
            home: {
                component: "homeComponent"
            }
        }
    },

    {
        name: "rootState.app.about",
        url: "/about",
        showInMenu: true,
        sticky: true,
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/about.component/about.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        },
        views: {
            about: {
                component: "aboutComponent"
            }
        }
    },

    {
        name: "rootState",
        url: "/",
        sticky: true,
        lazyLoad: function (transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/root.component/root.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        },
        views: {
            root: {
                component: "rootComponent",
            }
        }
    }
]
