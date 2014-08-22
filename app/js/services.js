'use strict';

/* Services */
angular.module('myApp.services', [])
    .factory('getStatus', function () {
        var serviceAPI = {};
        serviceAPI.getCategories = function() {
            var categories = [
                {name: 'CBS OPPT', status: 'ok'},
                {name: 'CC', status: 'ok'},
                {name: 'CCM', status: 'warn'},
                {name: 'CCR2', status: 'err'},
                {name: 'CFSWeb BH', status: 'ok'},
                {name: 'CFSWeb CBS', status: 'ok'},
                {name: 'CROSS', status: 'ok'},
                {name: 'DDAD', status: 'ok'},
                {name: 'DSG', status: 'ok'},
                {name: 'DSW ODS', status: 'err'},
                {name: 'DSW P&C/SQO', status: 'ok'},
                {name: 'DSW SAP', status: 'ok'},
                {name: 'DSW eBiz SAP', status: 'err'},
                {name: 'DSW eBiz SDMA', status: 'warn'},
                {name: 'ESI', status: 'ok'},
                {name: 'GDBM Webserver', status: 'ok'},
                {name: 'IIW', status: 'warn'},
                {name: 'MFS/MOL', status: 'ok'},
                {name: 'OMCS', status: 'err'},
                {name: 'OPRA', status: 'ok'},
                {name: 'OPRA-LN', status: 'err'},
                {name: 'OPRA-LN-Lenovo', status: 'ok'},
                {name: 'PASS', status: 'ok'},
                {name: 'PartnerCommerce', status: 'err'},
                {name: 'SOFT', status: 'ok'},
                {name: 'SOXDR', status: 'warn'},
                {name: 'SalesConnect', status: 'ok'},
                {name: 'WTAAS', status: 'warn'},
                {name: 'ePricer', status: 'ok'},
                {name: 'ePricer Web Services', status: 'warn'}];
            return categories;
        }

        return serviceAPI;
    })
    .factory('getStatistics', function($http) {

        var serviceAPI = {};

        serviceAPI.getStats = function (){
                
            var stats = {};
                stats.performance = [12, 43, 34, 22, 12, 33, 4, 17, 22, 34, 54, 67],
                stats.visits = [123, 323, 143, 132, 274, 223, 143, 156, 223, 223],
                stats.budget = [23, 19, 11, 34, 42, 52, 35, 22, 37, 45, 55, 57],
                stats.sales = [11, 9, 31, 34, 42, 52, 35, 22, 37, 45, 55, 57],
                stats.targets = [17, 19, 5, 4, 62, 62, 75, 12, 47, 55, 65, 67],
                stats.avrg = [117, 119, 95, 114, 162, 162, 175, 112, 147, 155, 265, 167];
            
            return stats            
        }

        return serviceAPI;
  });