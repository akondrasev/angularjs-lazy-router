import angular from 'angular';

const ngModule = angular.module("authServiceModule", []);

AuthService.$inject = ["$timeout", "$q"];

function AuthService($timeout, $q) {

    this.login = function (email, password) {
        return $q((resolve, reject) => {
            $timeout(() => {
                resolve({
                    email: email,
                    password: password,
                    permissions: [],
                    role: "admin"
                });
            }, 500);
        });
    };
}

ngModule.service("authService", AuthService);

export default ngModule.name;