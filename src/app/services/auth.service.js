import angular from 'angular';

const ngModule = angular.module("authServiceModule", []);

AuthService.$inject = ["$timeout", "$q"];

function AuthService($timeout, $q) {

    let userData = null;

    this.login = function (email, password) {
        return $q((resolve, reject) => {
            $timeout(() => {
                userData = {
                    email: email,
                    password: password,
                    permissions: [],
                    role: "admin"
                };

                resolve(userData);
            }, 500);
        });
    };

    this.logout = function () {
        return $q((resolve, reject) => {
            $timeout(() => {
                userData = null;
                resolve();
            }, 500);
        });
    };
}

ngModule.service("authService", AuthService);

export default ngModule.name;