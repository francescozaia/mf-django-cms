'use strict';

angular.module('Templates', [
    'UserInterface',
    'Login',
    'ngResource',
    'ngAnimate',
    'Templates.controllers',
    'Templates.directives',
    'Templates.services',
    'Templates.filters'
], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});