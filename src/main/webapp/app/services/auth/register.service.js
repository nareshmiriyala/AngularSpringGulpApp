(function () {
    'use strict';

    angular
        .module('angularSpringGulpApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
