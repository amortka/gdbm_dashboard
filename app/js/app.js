'use strict';

// Declaration of application with base modules included
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    /* routes for SAP bahaviour like /index#<LINK> */
    config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/index', {templateUrl: 'partials/main.html', controller: 'mainController'});
            $routeProvider.when('/category/:category', {templateUrl: 'partials/category.html', controller: 'categoryController'});
            $routeProvider.when('/category', {templateUrl: 'partials/category.html', controller: 'categoryController'});
            $routeProvider.when('/test', {templateUrl: 'partials/_empty.html', controller: 'emptyController'});
            $routeProvider.when('/test', {templateUrl: 'partials/_empty.html', controller: 'emptyController'});
            $routeProvider.when('/test/:postId', {templateUrl: 'partials/_empty.html', controller: 'emptyController'});
            $routeProvider.otherwise({redirectTo: '/index'});
        }]);
