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
        })

        .directive('contactForm', function () {
            var controller = ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

                $scope.sendContact = () => {
                    console.log($scope.contact);
                    $scope.leadsFirebaseArray.$add($scope.contact)
                        .then(ref => {
                            $scope.contactForm.$setPristine();
                            $scope.contact = {};
                        })
                        .catch(err => console.log(err));
                };

                function initCtrl() {
                    $scope.leadsFirebaseArray = $firebaseArray(firebase.database().ref().child('leads'));
                    $scope.leadsFirebaseArray.$loaded()
                        .then(leads => console.log(leads))
                        .catch(err => console.log(err));

                    $scope.contact = {};
                }

                initCtrl();
            }];

            return {
                controller: controller,
                templateUrl: 'views/directives/contactForm.html'
            }
        });
})();