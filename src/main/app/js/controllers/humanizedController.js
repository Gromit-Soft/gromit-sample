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
angular.module('gromitSample').controller('humanizedController', function($scope, $http, $window) {
    
    $scope.showMessage = function() {
        gromit.showMessage('This is a transient information message');
    };
    
    $scope.showWarning = function() {
        gromit.showWarningMessage('This is a transient warning message');
    };
    
    $scope.showError = function() {
        gromit.showErrorMessage('This is a transient error message');
    };
    
    $scope.showFatalError = function() {
        gromit.showFatalError('This is a fatal error message.  This error indicates that some unexpected has gone wrong and the application will probably not function correctly after this.  This message always causes the page to scroll to the top so the user can see the message.');
    };
});