/*******************************************************************************
 * 
 * Copyright 2015 Gromit Soft Team   
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 ******************************************************************************/
 'use strict';

/*
 * This file serves as our main Angular module
 */
var app = angular.module('gromitSample', [
  'ngRoute',
  'ui.bootstrap'
]).config(function (datepickerConfig) {
      datepickerConfig.showWeeks = false;
    });

app.run(function($rootScope, $window, $route) {
    $window.gromit.init();
    
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