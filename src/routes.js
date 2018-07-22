export default [
    {
        name: "root",
        url: "/",
        showInMenu: true,
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

    {
        name: "login",
        url: "/login",
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
        name: "error",
        url: "/error",
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
        name: "root.home",
        url: "home",
        component: "homeComponent",
        showInMenu: true,
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/home.component/home.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    },

    {
        name: "root.about",
        url: "about",
        component: "aboutComponent",
        showInMenu: true,
        lazyLoad: function(transition, state) {
            return new Promise(function (resolve) {
                import("./app/components/about.component/about.component").then((module) => {
                    transition.injector().native.loadNewModules([module.default]);
                    resolve();
                });
            });
        }
    }
]