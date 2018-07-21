import angular from 'angular';
import template from './app.component.html';
import './app.component.css';

import services from './services/services';

const ngModule = angular.module("appComponent", [services]);

ngModule.component("appComponent", {
    template,
    controller: ["authService", "$rootScope", "$state", function (authService, $rootScope, $state) {
        this.logout = function () {
            $rootScope.loading = true;
            authService.logout().then(() => {
                $state.go("login");
            }).finally(() => {
                $rootScope.loading = false;
            });
        };
    }]
});

export default ngModule.name;