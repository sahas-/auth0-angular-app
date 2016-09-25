'use strict';
angular
    .module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function Config($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider, jwtOptionsProvider) {

        authProvider.init({
            domain: 'yourdomain.auth0.com',
            clientID: 'clientID'
        });

        $urlRouterProvider.otherwise('/home');

        jwtOptionsProvider.config({
            whiteListedDomains: ['localhost'],
        });
        jwtInterceptorProvider.tokenGetter = function (store) {
            return store.get('id_token');
        }
        $httpProvider.interceptors.push('jwtInterceptor');


        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.tpl.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'components/profile/profile.tpl.html',
                controller: 'profileController as user'
            });


    });