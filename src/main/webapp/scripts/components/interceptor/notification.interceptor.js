 'use strict';

angular.module('projectManagementForEducationApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-projectManagementForEducationApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-projectManagementForEducationApp-params')});
                }
                return response;
            }
        };
    });
