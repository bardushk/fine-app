/**
 * Модуль с контроллерами.
 */
angular.module('controllers', ['validator-service'])
    .controller('FinesController', function ($scope, $http, ValidatorService) {

        /**
         * Список автомобилей.
         * @type {{}}
         */
        $scope.autos = {};

        /**
         * Валидатор.
         * @type {ValidatorService.validateAutoNumber|Function}
         */
        $scope.isValid = ValidatorService.validateAutoNumber;

        /**
         * Удаляет автомобиль из списка.
         *
         * @param autos array - массив автомобилей
         * @param autoNumber string - номер автомобиля
         */
        $scope.remove = function (autos, autoNumber) {
            delete autos[autoNumber];
        };

        /**
         * Добавляет новый автомобиль.
         *
         * @param autos array - массив автомобилей
         * @param autoNumber string - номер автомобиля
         */
        $scope.check = function (autos, autoNumber) {
            if (!ValidatorService.validateAutoNumber(autoNumber)) {
                return;
            }
            return $http.get('/api', {params: {auto_number: autoNumber}}).then(function (response) {
                autos[autoNumber] = response.data;
            });
        }
    });
