'use strict';

/* Filters */

angular.module('myApp.filters', [])
    .filter('interpolate', ['version', function(version) {
            return function(text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }])
    .filter('urlSlashEncode', function() { //$window
        //return $window.encodeURIComponent; //return function
        return function(text) {
            var url = encodeURIComponent(text);
            return url.replace(/\//g, '%252F').replace(/%2F/gi, '%252F');
        }
    })
    .filter('urlSlashDecode', function() { //$window
        return function(text) {
            //var url = ''+text;
            return text.replace(/%2F/gi, "/");
        }
    })
    .filter('timestamp', function() {
        return function(text, datelength) {
            if (datelength==undefined) { datelength='short'; }
            var response = "";
            switch (datelength) {
                case 'short': // i.e. 09-12-14 13:45:45
                    response = date('d-m-y H:i:s', new Date(text));
                    break;
                case 'longer': // i.e. 09-12-2014 13:45:45
                    response = date('d-m-Y H:i:s', new Date(text));
                    break;
                case 'long': // i.e. 09 dec 2014 13:45:45
                    response = date('d M Y H:i:s', new Date(text));
                    break;
                case 'full': // i.e. 09 december 2014 13:45:45
                    response = date('l, d M Y H:i:s', new Date(text));
                    break;
                default:
                    response = date('Y-m-d', new Date(text));
            }          
            return response;
        }
    });
