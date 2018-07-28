import angular from 'angular';
import template from './login.component.html';
import './login.component.css';

import authService from './../../services/auth.service'

const ngModule = angular.module("loginComponent", [authService]);

ngModule.component("loginComponent", {
    template,
    controller: ["authService", "$rootScope", "$state", function (authService, $rootScope, $state) {
        this.submit = function (username, password) {
            $rootScope.loading = true;

            authService.login(username, password).then((userData) => {
                $rootScope.loading = false;
                $state.go("rootState.app.home");
            }, (error) => {
                console.log(error);
            });
        };

    }]
});

export default ngModule.name;