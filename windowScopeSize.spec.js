describe('Directive: window-scope-size [A]', function () {
    var element, $window;

    beforeEach(module('window-scope-size'));

    beforeEach(inject(function ($compile, _$window_, $rootScope) {
        $window = _$window_;
        element = angular.element('<div window-scope-size ></div>');
        
        $compile(element)($rootScope);
    }));

    it('should update window when $window resize', function () {
        var localScope = element.scope();
        
        $window.outerHeight = 200;
        angular.element($window).triggerHandler('resize');
        expect(localScope.window.outerHeight).toBe(200);

        $window.outerWidth = 3200;
        angular.element($window).triggerHandler('resize');
        expect(localScope.window.outerWidth).toBe(3200);

        $window.innerHeight = 150;
        angular.element($window).triggerHandler('resize');
        expect(localScope.window.innerHeight).toBe(150);

        $window.innerWidth = 250;
        angular.element($window).triggerHandler('resize');
        expect(localScope.window.innerWidth).toBe(250);
    });
});
