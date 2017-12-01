(function () {
    'use strict';
    angular.module('hospitecnicaApp.homeModule')
        .controller('HomeController', ['$firebaseArray', '$location', '$anchorScroll', function ($firebaseArray, $location, $anchorScroll) {
            var vm = this;

            vm.scroll = place => {
                console.log(place);
                $location.hash(place);
                $anchorScroll();
            };

            vm.sendContact = () => {
                console.log(vm.contact);

                vm.leadsFirebaseArray.$add(vm.contact)
                    .then(ref => console.log(ref))
                    .catch(err => console.log(err));
            };

            function initCtrl() {
                vm.leads = [];

                vm.leadsFirebaseArray = $firebaseArray(firebase.database().ref().child('leads'));
                vm.leadsFirebaseArray.$loaded()
                    .then(leads => { console.log(leads); vm.leads = leads; })
                    .catch(err => console.log(err));

                vm.contact = {
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                }

                vm.sections = [
                    { label: 'Introducción', id: 'introduction' },
                    { label: 'Productos', id: 'products' },
                    { label: 'Cobertura', id: 'coverage' },
                    { label: 'Contáctanos', id: 'contact-us' }
                ];
            }

            initCtrl();
        }]);
})();