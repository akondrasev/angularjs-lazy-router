import angular from 'angular';
import template from './app.component.html';
import './app.component.css';

import services from './services/services';

const ngModule = angular.module("appComponent", [services]);

ngModule.component("appComponent", {
    template
});

export default ngModule.name;