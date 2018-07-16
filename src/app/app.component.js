import angular from 'angular';
import template from './app.component.html';
import './app.component.css';
import uiRouter from '@uirouter/angularjs';

import routes from './../routes';

const ngModule = angular.module("appComponent", [uiRouter]);

ngModule.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    Object.keys(routes).forEach(function (key) {
        let route = routes[key];
        $stateProvider.state(route);
    });

    $urlRouterProvider.otherwise("error");
}]);

ngModule.run(["$urlRouter", "$state", "$rootScope", function ($urlRouter, $state, $rootScope) {
    console.log($urlRouter, $state);

    Object.keys(routes).forEach(function (key) {
        const route = routes[key];
        if (route.url === $urlRouter.location) {
            $state.go(route.name);
        }
    });
}]);

ngModule.component("appComponent", {
    template
});

export default ngModule.name;