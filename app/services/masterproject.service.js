(function () {
    'use strict';

    angular
        .module('app')
        .factory('MasterProjectService', MasterProjectService);

    MasterProjectService.$inject = ['$http', 'EndPointService'];

    function MasterProjectService($http, EndPointService) {
        var service = {
            get: get
        };

        return service;

        ////////////////
        function get() {
            return $http
                .get('/app/data/projects.json')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();