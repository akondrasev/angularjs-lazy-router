import angular from 'angular';
import authService from './auth.service';

const ngModule = angular.module("servicesModule", [authService]);

export default ngModule.name;
