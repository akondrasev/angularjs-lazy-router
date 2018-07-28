import angular from 'angular';
import template from './about.component.html';

const ngModule = angular.module("aboutComponentModule", []);

Controller.$inject = ["$interval"];
function Controller($interval) {
    this.timeAlive = 0;

    this.$onInit = function () {
        $interval(() => {
            this.timeAlive++;
        }, 1000);
    }
}

ngModule.component("aboutComponent", {
    template,
    controller: Controller
});

export default ngModule.name;