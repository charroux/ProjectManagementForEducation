'use strict';

angular.module('projectManagementForEducationApp')
    .factory('ProjectSearch', function ($resource) {
        return $resource('api/_search/projects/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
