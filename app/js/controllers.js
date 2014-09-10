'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('navigationController', function($scope, $route, $routeParams, $location) {
            $scope.navigationTemplate = {name: 'navigation', url: 'partials/navigationTop.html'};
            $scope.navigationSidebarTemplate = {name: 'sidebar navigation', url: 'partials/navigationSidebar.html'};
            
            $scope.getClass = function(path) {
               if ($location.path().substr(1, path.length).indexOf(path) != -1) {
                  return "active"
                } else {
                  return ""
                }
            }

    })
    .controller('mainController', function($scope, $timeout, getStatus, loaderFactory) {
        
        $scope.categories = [];
        $scope.loading = true;
        loaderFactory.start();
        
        getStatus.getCategories()
            .success(function(response) {
                console.log("categories: http request success & complete");
                $scope.categories = response.result;
                $scope.loading=false;
                loaderFactory.complete();
                $timeout(updateCategories, 1000);
            })
            .error(function(data, status, headers, config) {
            });

        var updateCategories = function() {
            getStatus.getCategories().success(function(response) {
                console.log("categories: updating...");
                    angular.forEach(response.result, function(categoryUpdated) {
                        angular.forEach($scope.categories, function(categoryOld) {
                            if (categoryOld.CATEGORY_NAME === categoryUpdated.CATEGORY_NAME) {
                                categoryOld.SUCCESS = categoryUpdated.SUCCESS;
                                categoryOld.TOTAL   = categoryUpdated.TOTAL;
                                categoryOld.FAILED  = categoryUpdated.FAILED;
                            }
                        });
                    });
                     $timeout(updateCategories, 2000);
            });
        }
    })
    .controller('categoryController', function($scope, getStatus, $routeParams, loaderFactory) {
            $scope.loading = true;
            loaderFactory.start();    
            
            $scope.category = $routeParams.category;
            $scope.events = [];
            getStatus.getCategoryEvents($routeParams.category)
                    .success(function(response) {
                        $scope.events = response.result;
                        $scope.loading=false;
                        loaderFactory.complete();
                    })
                    .error(function(data, status, headers, config) {
                        //TODO: error handling;
                    });            

    })
    .controller('blogController', function($scope) {
            $scope.todo = "the thing...";
    })
    .controller('emptyController', function($scope) {

    });
