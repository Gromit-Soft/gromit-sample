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
 * This controller handles the landing page and the contents of the panels on that page.
 */
angular.module('gromitSample').controller('overviewController', function($scope, $http, $window) {
    gromit.get('http://192.168.1.76:8080/api/whoami', $http, function(data) {
        $scope.userName = data.principal;
    });
    
    gromit.post('http://192.168.1.76:8080/api/data/users/search/?sortBy=displayName&sortOrder=ASC&indexFrom=0&size=50&showCt=true&listAttr=displayName&listAttr=jobTitle&qMatch=ANY', 
                $http, '{}', function(data) {
        $scope.users = [];
        _.each(data.users, function(user) {
            $scope.users.push({
                userId: user.userId,
                name: _.find(user.attributes, function(att) {
                    return att.attributeKey === 'displayName';
                })
            })
        });
    });
    
    $scope.doLogout = function() {
        console.log('logout...');
        gromit.doLogout();
    };

});