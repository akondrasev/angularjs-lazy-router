import angular from 'angular';
import template from './home.component.html';

const ngModule = angular.module("homeComponentModule", []);

Controller.$inject = ["$interval", "$stateParams"];
function Controller($interval, $stateParams) {
    this.timeAlive = 0;

    this.$onInit = function () {
        $interval(() => {
            this.timeAlive++;
        }, 1000);

        console.log($stateParams.component);
    }
}

ngModule.component("homeComponent", {
    template,
    controller: Controller
});

export default ngModule.name;