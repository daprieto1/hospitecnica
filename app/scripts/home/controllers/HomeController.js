(function () {
    'use strict';
    angular.module('homeModule')
        .controller('HomeController', function ($firebaseArray) {
            var vm = this;

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
                    .then(leads => vm.leads = leads)
                    .catch(err => console.log(err));

                vm.contact = {
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                }

                vm.sections = ['Introducción', 'Productos', 'Covertura', 'Contactanos'];
            }

            initCtrl();
        });
})();