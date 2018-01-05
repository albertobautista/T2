(function () {

  'use strict';

  angular
    .module('app')
    .directive('navbar', navbar);

  function navbar() {
    return {
      templateUrl: 'app/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'vm'
    }
  }

  navbarController.$inject = ['authService'];

  function navbarController(authService, Storage, $location) {
    var vm = this;
    vm.auth = authService;

  }
  // function login(){
  //   authService.singin({}, function(profile,token){
  //     Store.set('profile', profile);
  //     Store.set('id_token',token);
  //     $location.path('/home');

  //   });


  // }

})();