import angular from 'angular';
import template from './login.component.html';
import './login.component.css';

const ngModule = angular.module("loginComponent", []);

ngModule.component("loginComponent", {
    template,
    controller: ["authService", "$rootScope", "$state", function (authService, $rootScope, $state) {
        this.submit = function (username, password) {
            $rootScope.loading = true;

            authService.login(username, password).then((userData) => {
                $rootScope.userData = userData;
                $rootScope.loading = false;
                $state.go("root");
            }, (error) => {
                console.log(error);
            });
        };

    }]
});

export default ngModule.name;