(function () {
    'use strict';

    angular.module('hospitecnicaApp')
        .controller('HeaderController', function ($scope, $modal) {
            var vm = this;

            vm.openMenu = () => {
                var params = {
                    size: 'full',
                    templateUrl: 'views/menu.html',
                    controller: function ($scope, $modalInstance) {
                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        };
                    }
                };
                var modalInstance = $modal.open(params);
            };
        });
})();