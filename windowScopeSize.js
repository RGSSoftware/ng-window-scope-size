(function() {
    'use strict';

    angular
    .module('window-scope-size',[])
    .directive('windowScopeSize', windowScopeSize);
    
    windowScopeSize.$inject = ['$window'];
    
    function windowScopeSize($window) {
        function link(scope, element, attrs){

            setScope();

            function setScope(){
                scope.window = {
                    outerHeight: $window.outerHeight,
                    outerWidth: $window.outerWidth,
                    innerHeight: $window.innerHeight,
                    innerWidth: $window.innerWidth,
                }
            }

            function onResize(){
                setScope();

                scope.$digest();
            };

            function cleanUp() {
                angular.element($window).off('resize', onResize);
            }

            angular.element($window).on('resize', onResize);
            scope.$on('$destroy', cleanUp);
        }

        return {
            link: link,
            restrict: 'A'
        };
    };
    
})();