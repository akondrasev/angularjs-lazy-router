import angular from 'angular';

const ngModule = angular.module("authServiceModule", []);

AuthService.$inject = ["$timeout", "$q", "$rootScope"];

function AuthService($timeout, $q, $rootScope) {
    const localStorageKey = "userData";

    let userData = JSON.parse(localStorage.getItem(localStorageKey)) || null;

    this.getUserData = function () {
        return userData;
    };

    this.login = function (email, password) {
        return $q((resolve, reject) => {
            $timeout(() => {
                userData = {
                    email: email,
                    password: password,
                    permissions: [],
                    role: "admin"
                };

                localStorage.setItem(localStorageKey, JSON.stringify(userData));
                resolve(userData);
            }, 500);
        });
    };

    this.logout = function () {
        return $q((resolve, reject) => {
            $timeout(() => {
                localStorage.removeItem(localStorageKey);
                userData = null;
                resolve();
            }, 500);
        });
    };
}

ngModule.service("authService", AuthService);

export default ngModule.name;