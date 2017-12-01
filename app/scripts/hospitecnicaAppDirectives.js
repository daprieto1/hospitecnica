(function () {
    'use strict';
    angular.module('hospitecnicaApp.directives', [])
        .directive('backStyle', function () {
            return function (scope, element, attrs) {
                var backStyle = attrs.backStyle;
                var minHeight = attrs.backImgMinHeight;
                console.log(backStyle);
                element.css({
                    'background': backStyle,
                    'background-size': 'cover',                       
                    'background-position': 'center',
                    'min-height': minHeight
                });
            };
        });
})();