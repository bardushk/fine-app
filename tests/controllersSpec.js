describe('FinesController', function() {
    beforeEach(module('controllers'));

    var $controller, $scope, httpBackend;

    beforeEach(inject(function(_$controller_, $httpBackend){
        $controller = _$controller_;
        $scope = {};
        httpBackend = $httpBackend;
        $controller('FinesController', {
            $scope: $scope
        });
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('$scope.autos', function() {
        it('Свойство $scope.autos должно быть объектом', function() {
            expect(angular.isObject($scope.autos)).toBeTruthy();
        });
    });

    describe('$scope.remove', function() {
        it('должна удалить из списка autoNumber', function() {
            $scope.autos = {
                'a001aa 116': {},
                'b002bb 116': {}
            };
            var autoNumber = 'a001aa 116';
            $scope.remove($scope.autos, autoNumber);
            expect($scope.autos[autoNumber]).toBeUndefined();
        });
    });

    describe('$scope.check', function() {
        it('должна добавить в список autoNumber', function() {
            var autos = {};
            var autoNumber = 'a001aa 116';
            httpBackend.whenGET(/\/api\?auto_number=(.+)/).respond({'18881000001': {}});
            $scope.check(autos, autoNumber);
            httpBackend.flush();
            expect(autos[autoNumber]).toBeDefined();
        });
    });
});