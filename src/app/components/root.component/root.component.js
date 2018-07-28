import angular from 'angular';
import template from './root.component.html';

const ngModule = angular.module("rootModule", []);

RootController.$inject = ["$interval"];
function RootController($interval) {
    this.timeAlive = 0;

    this.$onInit = function () {
        $interval(() => {
            this.timeAlive++;
        }, 1000);
    }
}

ngModule.component("rootComponent", {
    template,
    controller: RootController
});

export default ngModule.name;