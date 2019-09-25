import angular from 'angular';
import template from './greeting.component.html';

const ngModule = angular.module("greetingComponentModule", []);

Controller.$inject = [];
function Controller() {
    this.timeAlive = 0;

    this.$onInit = function () {

    }
}

ngModule.component("greetingComponent", {
    template,
    controller: Controller
});

export default ngModule.name;