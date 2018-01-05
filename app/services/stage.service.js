(function () {
    'use strict';

    angular
        .module('app')
        .factory('StageService', StageService);

    StageService.$inject = ['$http', 'EndPointService'];

    function StageService($http, EndPointService) {
        var service = {
            get: get
        };

        return service;

        ////////////////
        function get() {
            return $http
                .get('/app/data/stages.json')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();