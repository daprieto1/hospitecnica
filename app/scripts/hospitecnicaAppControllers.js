(function () {
    'use strict';

    angular.module('hospitecnicaApp')
        .controller('HeaderController', ['$scope', '$modal', function ($scope, $modal) {
            var vm = this;

            vm.openMenu = () => {
                var params = {
                    size: 'full',
                    templateUrl: 'views/menu.html',
                    controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        };
                    }]
                };
                var modalInstance = $modal.open(params);
            };
        }]);
})();