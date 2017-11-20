(function () {
    'use strict';
    angular.module('homeModule')
        .controller('HomeController', function ($firebaseArray) {
            var vm = this;                        
             
            vm.sendContact = () => {
                console.log(vm.contact);
                var ref = firebase.database().ref().child('lead');   
                var leads = $firebaseArray(ref);
                
                leads.$add(vm.contact)
                    .then(ref => console.log(ref))
                    .catch(err => console.log(err));      
            };

            function initCtrl() {
                vm.contact = {
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                }
            }

            initCtrl();
        });
})();