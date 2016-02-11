'use strict';

describe('Controller: SkillsController', function () {

  // load the controller's module
  beforeEach(module('prioriSkillPrototypeApp'));

  var SkillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of skills to the scope', function () {
    expect(SkillsCtrl.skills.length).toBe(4);
  });
});
