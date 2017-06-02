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
angular.module('gromitSample').controller('securityController', function($scope, $http, $window) {
    
    $scope.secData = {};
    
    $scope.secData.clientid = 'iac2';
    $scope.secData.authserver = 'http://192.168.1.76:8080';
    $scope.secData.apiserver = 'http://192.168.1.76:8080';
    
    $scope.doGetData = function() {
        gromit.ClientId = $scope.secData.clientid;
                
        gromit.AuthUrl = $scope.secData.authserver + '/osp/a/idm/auth/oauth2/grant';
        gromit.AuthLogoutUrl = $scope.secData.authserver + '/osp/a/idm/auth/app/logout';
        
        delete $scope.noUserMessage;
        gromit.get($scope.secData.apiserver + '/api/whoami', $http, function(data) {
            $scope.userName = data.principal;
            
            gromit.post($scope.secData.apiserver + '/api/data/users/search/?sortBy=displayName&sortOrder=ASC&indexFrom=0&size=50&showCt=true&listAttr=displayName&listAttr=jobTitle&qMatch=ANY', 
                        $http, '{}', function(data) {
                $scope.users = [];
                _.each(data.users, function(user) {
                    $scope.users.push({
                        userId: user.userId,
                        name: _.find(user.attributes, function(att) {
                            return att.attributeKey === 'displayName';
                        })
                    });
                });
                
                if ($scope.users.length === 0) {
                    $scope.noUserMessage = 'You don\'t have any collected users in your Identity Governance server yet.'
                }
            });
        });        
    };
    
    $scope.doLogout = function() {
        gromit.doLogout();
    };

});