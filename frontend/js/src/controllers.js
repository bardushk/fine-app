angular.module('controllers', [])
    .controller('FinesController', function($scope, $http) {
        $scope.autos = {
            'a001aa 116': {
                '111111': {
                    date: '2015-01-01',
                    sum: 1000
                },
                '1112222': {
                    date: '2015-01-01',
                    sum: 1000
                },
                '113331': {
                    date: '2015-01-01',
                    sum: 1000
                }
            },
            'b001bb 116': {
                '111111': {
                    date: '2015-01-01',
                    sum: 1000
                },
                '1112222': {
                    date: '2015-01-01',
                    sum: 1000
                },
                '113331': {
                    date: '2015-01-01',
                    sum: 1000
                }
            }
        };

        /**
         * Удаляет автомобиль из списка.
         *
         * @param autos array - массив автомобилей
         * @param autoNumber string - номер автомобиля
         */
        $scope.remove = function(autos, autoNumber) {
            delete autos[autoNumber];
        };

        /**
         * Добавляет новый автомобиль.
         *
         * @param autos array - массив автомобилей
         * @param autoNumber string - номер автомобиля
         */
        $scope.check = function(autos, autoNumber) {
            return $http.get('/api', {params:  {auto_number: autoNumber}}).then(function(response){
                autos[autoNumber] = response.data;
            });
        }
    });
