(function () {

  'use strict';

  angular
     .module('app', ['auth0.auth0', 'ui.router', 'ngMaterial', 'ngMessages',  'datePicker', 'angular-loading-bar', 'ngStorage'])
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    'angularAuth0Provider'
  ];

  function config(
    $stateProvider,
    $locationProvider,
    $urlRouterProvider,
    angularAuth0Provider
  ) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController',
        templateUrl: 'app/views/project/home.html',
        controllerAs: 'vm'
      })
      .state('worklogs', {
        url: '/work-log',
        controller: 'WorkLogController',
        name: 'worklog',
        templateUrl: 'app/views/project/work-log/work-log.html',
        controllerAs: 'vm'
      })
      .state('callback', {
        url: '/callback',
        controller: 'CallbackController',
        templateUrl: 'app/callback/callback.html',
        controllerAs: 'vm'
      });

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: 'Zehwt8bWHY088cWE_pOisw5PcJ0Yp7XO',
      domain: 'hiramgm.auth0.com',
      responseType: 'token id_token',
      audience: 'https://hiramgm.auth0.com/userinfo',
      redirectUri: 'http://localhost:5000/callback',
      scope: 'openid'
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.hashPrefix('');

    /// Comment out the line below to run the app
    // without HTML5 mode (will use hashes in routes)
    $locationProvider.html5Mode(true);
  }

})();