(function () {
    'use strict';

    angular
        .module('app')
        .factory('WorkLogService', WorkLogService);

    WorkLogService.$inject = ['$http', 'EndPointService'];

    function WorkLogService($http, EndPointService) {
        var service = {
            get: get
        };

        return service;

        ////////////////
        function get() {
            return $http
                .get('/app/data/work-logs.json')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();