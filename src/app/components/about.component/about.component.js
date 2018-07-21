import angular from 'angular';
import template from './about.component.html';

const ngModule = angular.module("aboutComponentModule", []);
ngModule.component("aboutComponent", {
    template
});

export default ngModule.name;