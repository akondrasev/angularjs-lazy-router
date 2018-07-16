import angular from 'angular';
import template from './login.component.html';

const ngModule = angular.module("loginComponent", []);

ngModule.component("loginComponent", {
    template
});

export default ngModule.name;