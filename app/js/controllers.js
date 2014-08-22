'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('navigationController', function($scope, $route, $routeParams, $location) {
            $scope.navigationTemplate = {name: 'navigation', url: 'partials/navigation.html'};
            $scope.navigationSidebarTemplate = {name: 'sidebar navigation', url: 'partials/navigationSidebar.html'};
            
            $scope.getClass = function(path) {
               if ($location.path().substr(1, path.length).indexOf(path) != -1) {
                  return "active"
                } else {
                  return ""
                }
            }

    })
    .controller('mainController', function($scope, getStatus) {
            $scope.categories = getStatus.getCategories();
    })
    .controller('categoryController', function($scope, getStatistics, $routeParams) {
            $scope.category = $routeParams.category;
            

    })
    .controller('blogController', function($scope) {
            $scope.todo = "the thing...";
    })
    .controller('emptyController', function($scope) {

    });
