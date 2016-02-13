/*******************************************************************************
 * 
 * MIT License
 * Copyright (c) 2015-2016 NetIQ Corporation, a Micro Focus company
 *
 ******************************************************************************/
 'use strict';

/* 
 * This controller handles the landing page and the contents of the panels on that page.
 */
angular.module('gromitSample').controller('dateController', function($scope, $http, $window) {
    
    var now = new Date().getTime();
    $scope.fullDateTime = gromit.fullDateTimeFormat(now);
    $scope.fullDate = gromit.fullDateFormat(now);
    $scope.shortDateTime = gromit.shortDateFormat(now);
    $scope.shortDate = gromit.shortDateFormat(now, true);
    $scope.fromDate = gromit.fromNowFormat(1451606400000);
});