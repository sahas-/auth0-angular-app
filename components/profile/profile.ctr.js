(function(){
    'use strict';
    angular
    .module('authApp')
    .controller('profileController',profileController);

    function profileController($http){
        var vm=this;
        vm.getProfiles = getProfiles;
        vm.message;

        function getProfiles(){
            $http.get('http://localhost:3001/')
            .then(function(response){
                vm.message = response.data;
            });
        }
    }
})();