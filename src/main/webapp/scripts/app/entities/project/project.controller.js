'use strict';

angular.module('projectManagementForEducationApp')
    .controller('ProjectController', function ($scope, $state, $modal, Project, ProjectSearch, ParseLinks) {
      
        $scope.projects = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Project.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.projects = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.search = function () {
            ProjectSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.projects = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.project = {
                title: null,
                dateOfCreation: null,
                state: null,
                id: null
            };
        };
    });
