'use strict';

/* Directives */

angular.module('Templates.directives', []).
    directive('template', function () {
        return {
            restrict: 'A',
            transclude: true,
            template: '<a class="thumbnail" href="#" ><div style="position:relative"><div class="caption"><div class="caption-content">{{ template.name }}</div></div><img ng-src="{{ template.image }}" class="img-responsive template-centered" alt="{{ template.name }}" title="{{ template.name }}" ></div></a>'
            //templateUrl: '../partials/template-partial.html'
        };
    });
