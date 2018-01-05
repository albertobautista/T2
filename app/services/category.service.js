(function () {
    'use strict';

    angular
        .module('app')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http', 'EndPointService'];

    function CategoryService($http, EndPointService) {
        var service = {
            get: get
        };

        return service;

        ////////////////
        function get() {
            return $http
                .get('/app/data/categories.json')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();