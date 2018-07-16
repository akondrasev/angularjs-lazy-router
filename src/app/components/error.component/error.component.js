import angular from 'angular';
import template from './error.component.html';

const ngModule = angular.module("errorComponent", []);

ngModule.component("errorComponent", {
    template
});

export default ngModule.name;