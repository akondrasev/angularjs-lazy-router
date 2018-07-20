import angular from 'angular';
import template from './home.component.html';

const ngModule = angular.module("homeComponentModule", []);

ngModule.component("homeComponent", {
    template
});

export default ngModule.name;