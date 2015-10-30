/**
 * Сервис валидациии пользовательских данных.
 */
angular.module('validator-service', []).factory('ValidatorService', function() {
    return {
        validateAutoNumber: function(value) {
            return /^([0-9ABEKMHOPCTYXАВЕКМНОРСТУХ]{1}\d{3}[ABEKMHOPCTYXАВЕКМНОРСТУХ]{2}|[ABEKMHOPCTYXАВЕКМНОРСТУХ]{2}\d{3})\s+\d{1,3}$/i.test(value);
        }
    };
});