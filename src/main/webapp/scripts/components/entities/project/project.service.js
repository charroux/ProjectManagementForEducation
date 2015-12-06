'use strict';

angular.module('projectManagementForEducationApp')
    .factory('Project', function ($resource, DateUtils) {
        return $resource('api/projects/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.dateOfCreation = DateUtils.convertLocaleDateFromServer(data.dateOfCreation);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.dateOfCreation = DateUtils.convertLocaleDateToServer(data.dateOfCreation);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.dateOfCreation = DateUtils.convertLocaleDateToServer(data.dateOfCreation);
                    return angular.toJson(data);
                }
            }
        });
    });
