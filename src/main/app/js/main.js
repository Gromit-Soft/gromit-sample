/*******************************************************************************
 * 
 * MIT License
 * Copyright (c) 2015-2016 NetIQ Corporation, a Micro Focus company
 *
 ******************************************************************************/
 'use strict';

/*
 * This file serves as our main Angular module
 */
var app = angular.module('gromitSample', [
  'ngRoute',
  'ui.bootstrap',
  'gromitsoft'
]);

app.run(function($rootScope, $window, $route) {
    $window.gromit.init();
    
    gromit.addCSSLink('css/lib/bootstrap.min.css');
    gromit.addCSSLink('css/lib/rainbow.css');
    gromit.addCSSLink('css/gromitsample.css');
});

// important note: if you wish to refresh the page when clicking on the nav link
// on the same page you are already on, you MUST add a trailing slash in the route provider when clause,
// otherwise the page will not refresh
app.config(['$routeProvider', function($routeProvider, localizationService) {
    $routeProvider.when('/landing', {
        templateUrl: 'views/overview.html',
        controller: 'overviewController'
    }).
    otherwise({
        redirectTo: '/landing'
    });
}]);