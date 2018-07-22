import angular from 'angular';
import template from './app.component.html';
import './app.component.css';

import services from './services/services';

const ngModule = angular.module("appComponent", [services]);

ngModule.component("appComponent", {
    template,
    controller: ["authService", "$rootScope", "$state", function (authService, $rootScope, $state) {
        this.openModule = function (route) {
            const duplicate = $rootScope.openedModules.find((_route) => {
                return _route.name === route.name;
            });

            if (!duplicate) {
                $rootScope.openedModules.push(route);
            }

            $state.go(route.name);
        };

        this.logout = function () {
            $rootScope.loading = true;
            authService.logout().then(() => {
                $rootScope.openedModules.length = 0;
                $state.go("login");
            }).finally(() => {
                $rootScope.loading = false;
            });
        };
    }]
});

export default ngModule.name;