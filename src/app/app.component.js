import angular from 'angular';
import template from './app.component.html';

const ngModule = angular.module("appComponent", []);
ngModule.component("appComponent", {
    template
});

export default ngModule.name;