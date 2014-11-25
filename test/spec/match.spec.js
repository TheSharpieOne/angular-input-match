'use strict';

describe('[validation.match] It', function () {

  beforeEach(module('validation.match'));

  var $compile, $rootScope, form, inputValue, element;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    // Dependency injection
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    // Fixture
    inputValue = 'testValue';
    element = angular.element(
      '<form name="form">' +
      '<input type="text" ng-model="test" name="test"></input>' +
      '<input type="text" match="test" ng-model="testConfirm" name="testConfirm"></input>' +
      '</form>'
    );

    // Set first input to inputValue
    $rootScope.test = inputValue;
    $compile(element)($rootScope);
    $rootScope.$digest();
    form = $rootScope.form;
  }));

  it('should check if variables are identical', function () {
    form.testConfirm.$setViewValue(inputValue);
    $rootScope.$digest();

    expect(form.testConfirm.$error.match)
    .toBe(undefined);
  });

  it('should check if variables are identical', function () {
    form.testConfirm.$setViewValue(inputValue + 'falseValue');
    $rootScope.$digest();

    expect(form.testConfirm.$error.match)
    .toBe(true);
  });
});
