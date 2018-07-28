import angular from 'angular';
import template from './home.component.html';

const ngModule = angular.module("homeComponentModule", []);

Controller.$inject = ["$interval"];
function Controller($interval) {
    this.timeAlive = 0;

    this.$onInit = function () {
        $interval(() => {
            this.timeAlive++;
        }, 1000);
    }
}

ngModule.component("homeComponent", {
    template,
    controller: Controller
});

export default ngModule.name;