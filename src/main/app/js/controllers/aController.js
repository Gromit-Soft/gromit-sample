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
angular.module('gromitSample').controller('aController', function($scope, $http, $window) {
    
    $scope.alerts = [];
    $scope.showMessage = function() {
        $scope.alerts.push({
            type: 'success', 
            msg: 'See... no extra pound sign'
        });
    };
    
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

});