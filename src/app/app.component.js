import angular from 'angular';
import template from './app.component.html';
import './app.component.css';

const ngModule = angular.module("appComponent", []);
ngModule.component("appComponent", {
    template
});

export default ngModule.name;