(function () {
    angular.module('hospitecnicaApp.productModule')
        .controller('ProductsController', [function () {
            var vm = this;
            console.log('here');
            function initCtrl() {
                vm.products = [
                    { name: "ventilador adulto pediátrico", img: "images/home-section2-mix-1.jpg", description:"This is an important product to monitoring the diseases of the people", brand:'Super Elements S.A.'},
                    { name: "ventilador adulto pediátrico", img: "images/home-section2-mix-1.jpg" },
                    { name: "ventilador adulto pediátrico", img: "images/home-section2-mix-1.jpg" },
                    { name: "ventilador adulto pediátrico", img: "images/home-section2-mix-1.jpg" }
                ];
                vm.products.forEach(product => {
                    product.active = false;
                    product.background = `url(${product.img}), #ff182e`;
                });
                console.log(vm.products);
            }

            initCtrl();
        }]);
})();