/**
 * serviceSpec.js
 */
describe('ValidatorService', function () {
    var validator;
    beforeEach(module('validator-service'));
    beforeEach(inject(function (_ValidatorService_) {validator = _ValidatorService_;}));
    describe('ValidatorService.validateAutoNumber',
        function () {
            it('должен возвращать true для а001аа 116',
                function () {
                    expect(validator.validateAutoNumber('а001аа 116')).toBeTruthy();
                });
            it('должен возвращать false для 123',
                function () {
                    expect(validator.validateAutoNumber('123')).toBeFalsy();
                });
        });
});
