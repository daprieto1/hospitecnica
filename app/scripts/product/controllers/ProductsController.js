(function () {
    angular.module('hospitecnicaApp.productModule')
        .controller('ProductsController', [function () {
            var vm = this;
            console.log('here');
            function initCtrl() {
                vm.categories = [
                    { name: 'Tecnología médica', img: 'images/home-section2-mix-1.jpg' },
                    {
                        name: 'Arquitectura hospitalaria',
                        img: 'images/home-section2-mix-2.jpg',
                        subcategories: [{ name: "diseño" }, { name: "iluminación" }, { name: "grua" }]
                    },
                    { name: 'Accesorios', img: 'images/home-section2-mix-3.jpg' },
                    { name: 'Consumo', img: 'images/home-section2-mix-4.jpg' },
                    { name: 'Renta', img: 'images/home-section2-mix-5.jpg' },
                ];
                vm.products = [
                    { name: 'ventilador adulto pediátrico', img: 'images/home-section2-mix-1.jpg', description: 'This is an important product to monitoring the diseases of the people', brand: 'Super Elements S.A.' },
                    { name: 'ventilador adulto pediátrico', img: 'images/home-section2-mix-1.jpg' },
                    { name: 'ventilador adulto pediátrico', img: 'images/home-section2-mix-1.jpg' },
                    { name: 'ventilador adulto pediátrico', img: 'images/home-section2-mix-1.jpg' }
                ];
                vm.categories.forEach(category => {
                    category.background = `url(${category.img}), #ff182e`;
                });
                console.log(vm.category);
            }

            initCtrl();
        }]);
})();