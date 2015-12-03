'use strict';

angular.module('projectManagementForEducationApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


