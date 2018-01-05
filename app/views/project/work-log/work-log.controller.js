(function () {
    'use strict';

    angular
        .module('app')
        .controller('WorkLogController', WorkLogController);

    WorkLogController.$inject = ['$state', '$filter', 'WorkLogService', '$localStorage'];

    function WorkLogController($state, $filter, WorkLogService, $localStorage) {
        var vm = this;
        vm.worklogs = [];
        activate();

        function activate() {
            getWorkLogs();
        }

        /**
         * Get all worklogs from Salesforce API
         */
        function getWorkLogs() {
            return WorkLogService.get().then(function (data) {
                    $(document).ready(function () {
                        $('#worklogs').DataTable({
                            data: data,
                            columns: [{
                                    data: "project"
                                },
                                {
                                    data: "stageName"
                                },
                                {
                                    data: "category"
                                },
                                {
                                    data: "workDate"
                                },
                                {
                                    data: "hours"
                                },
                                {
                                    data: "minutes"
                                },
                                {
                                    data: "comment"
                                },
                                {
                                    data: "approved"
                                }
                            ],
                            columnDefs: [{
                                targets: 6,
                                render: function (data, type, row) {
                                    return data.substr(0, 30) + '…';
                                }
                            }],
                            "pageLength": 10,
                            "info": false,
                            "language": {
                                "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
                            }
                        });
                    });
                })
                .catch(function () {
                    alert("Error al cargar tus registros")
                });
        }
    }
})();