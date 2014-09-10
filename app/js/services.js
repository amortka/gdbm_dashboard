'use strict';

/* Services, factories, providers */
angular.module('myApp.services', [])
        .factory('getStatus', function($http) {
            var serviceAPI = {};
            //TODO: implement cache
            
            serviceAPI.getCategories = function() {  
            //http://localhost:8282/api/getlist/categories/
                return $http({
                   method: 'GET',
                    url: 'http://localhost:8282/api/categories/list/?debug=1'
                }); 
            };

            serviceAPI.getCategoryEvents = function(category) {  
            //http://localhost:8282/api/getlist/category/CC
                return $http({
                   method: 'GET',
                    url: 'http://localhost:8282/api/categories/events/'+category+'+?debug=1'
                }); 
            };

            return serviceAPI;
        })
        //TODO: something to do...
        .factory("loaderFactory", function ($document, $timeout) {
            var loadbar = {};
            loadbar.container = $document[0].createElement('div');
            loadbar.container.id = "loading-bar";
            loadbar.container.innerHTML = '<div class="bar"><div class="peg"></div></div>';
            loadbar.bodyElement = document.body;
            loadbar.bodyElement.appendChild(loadbar.container);
            loadbar.containerBar = loadbar.container.getElementsByClassName('bar')[0];
            loadbar.pct = 0;
            loadbar.changeColors = false;
           
            loadbar.getDomElement = function (elId) {
                var el = angular.element(document.querySelector(elId));
                return el;                
            }
            
            loadbar.reset = function () {
                var elLoadbar = loadbar.getDomElement('#loading-bar');
                if (elLoadbar.hasClass('loadbar-complete')) {
                    elLoadbar.removeClass('loadbar-complete');
                }
                var elSpinner = loadbar.getDomElement('#loading-bar-spinner');
                if (elSpinner.hasClass('loadbar-complete')) {
                    elSpinner.removeClass('loadbar-complete');
                }
                loadbar.go(0);
            }
            loadbar.start = function() {
                loadbar.reset();
                $timeout(loadbar.inc, 500);
                
            }
            loadbar.inc = function() {
                if (loadbar.pct >= 1) {
                  return;
                }
                
                var stat = loadbar.pct;
                var rnd = 0;
                if (stat >= 0 && stat < 0.25) {
                  // Start out between 3 - 6% increments
                  rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
                } else if (stat >= 0.25 && stat < 0.65) {
                  // increment between 0 - 3%
                  rnd = (Math.random() * 3) / 100;
                } else if (stat >= 0.65 && stat < 0.9) {
                  // increment between 0 - 2%
                  rnd = (Math.random() * 2) / 100;
                } else if (stat >= 0.9 && stat < 0.99) {
                  // finally, increment it .5 %
                  rnd = 0.005;
                } else {
                  // after 99%, don't increment:
                  rnd = 0;
                }                
                
                var lClass = '';
                if (stat < 0.25) {
                    lClass = '';
                } else if (stat >= 0.25 && stat < 0.50 && loadbar.changeColors) {
                    lClass = 'loadbar-25pct';
                } else if (stat >= 0.50 && stat < 0.75 && loadbar.changeColors) {
                    lClass = 'loadbar-50pct';
                } else if (stat >= 0.75 && stat < 0.90 && loadbar.changeColors) {
                    lClass = 'loadbar-75pct';
                } else if (stat >= 0.90 && stat < 1 && loadbar.changeColors) {
                    lClass = 'loadbar-90pct';
                } else if (stat >= 1) {
                    lClass = 'loadbar-complete';
                }
                
                loadbar.pct += rnd;
                loadbar.go(loadbar.pct);
                loadbar.setClass(lClass);
                $timeout(loadbar.inc, 500);
            }
            loadbar.go = function(i) {
                loadbar.pct = i;
                loadbar.containerBar.style.width = Math.round(loadbar.pct*100)+'%';
            }
            loadbar.setClass = function(className) {
                loadbar.container.className = className;
            }
            loadbar.complete = function() {
                loadbar.go(1);
                $timeout(loadbar.hide, 750);                
            }
            loadbar.hide = function() {
                loadbar.getDomElement('#loading-bar').addClass('loadbar-complete');
                loadbar.getDomElement('#loading-bar-spinner').addClass('loadbar-complete');
            }
            loadbar.start();
            
            return loadbar;
        })
        .run(function (loaderFactory) {
            
        });
