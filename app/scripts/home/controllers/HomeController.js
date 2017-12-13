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

                vm.products = [
                    { name: 'Tecnología Hospitalaria', internalProducts: [{ name: 'Ventiladores' }, { name: 'Monitores' }, { name: 'Electrobisturí' }, { name: 'Electrocardíografos' }, { name: 'Tomosíntesis 3dD' }, { name: 'Vacuómetros' }, { name: 'Flujómetros' }] },
                    { name: 'Arquitectura Hospitalaria', internalProducts: [{ name: 'Ventiladores' }, { name: 'Monitores' }, { name: 'Electrobisturí' }, { name: 'Electrocardíografos' }, { name: 'Tomosíntesis 3dD' }, { name: 'Vacuómetros' }, { name: 'Flujómetros' }] },
                    { name: 'Consumo', internalProducts: [{ name: 'Ventiladores' }, { name: 'Monitores' }, { name: 'Electrobisturí' }, { name: 'Electrocardíografos' }, { name: 'Tomosíntesis 3dD' }, { name: 'Vacuómetros' }, { name: 'Flujómetros' }] },
                    { name: 'Accesorios', internalProducts: [{ name: 'Ventiladores' }, { name: 'Monitores' }, { name: 'Electrobisturí' }, { name: 'Electrocardíografos' }, { name: 'Tomosíntesis 3dD' }, { name: 'Vacuómetros' }, { name: 'Flujómetros' }] },
                    { name: 'Renta', internalProducts: [{ name: 'Ventiladores' }, { name: 'Monitores' }, { name: 'Electrobisturí' }, { name: 'Electrocardíografos' }, { name: 'Tomosíntesis 3dD' }, { name: 'Vacuómetros' }, { name: 'Flujómetros' }] }
                ];

            }

            initCtrl();
        }])
        .directive('myMap', function () {
            // directive link function
            var link = function (scope, element, attrs) {
                var map, infoWindow;
                var markers = [];

                // map config
                var mapOptions = {
                    center: new google.maps.LatLng(4.015049, -74.154519),
                    zoom: 6,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false
                };

                // init the map
                function initMap() {
                    if (map === void 0) {
                        map = new google.maps.Map(element[0], mapOptions);
                    }
                }

                // place a marker
                function setMarker(map, position, title, content) {
                    var marker;
                    var markerOptions = {
                        position: position,
                        map: map,
                        title: title,
                        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                    };

                    marker = new google.maps.Marker(markerOptions);
                    markers.push(marker); // add marker to array

                    google.maps.event.addListener(marker, 'click', function () {
                        // close window if not undefined
                        if (infoWindow !== void 0) {
                            infoWindow.close();
                        }
                        // create new window
                        var infoWindowOptions = {
                            content: content
                        };
                        infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                        infoWindow.open(map, marker);
                    });
                }

                // show the map and place some markers
                initMap();

                setMarker(map, new google.maps.LatLng(4.739434, -74.045691), 'Oficina Principal', 'Calle 67 # 56 - 56');
                setMarker(map, new google.maps.LatLng(7.119545, -73.118216), 'Oficina Secundaria', 'Calle 67 # 56 - 56');
                setMarker(map, new google.maps.LatLng(3.423850, -76.518456), 'Oficina Tercera', 'Calle 67 # 56 - 56');
            };

            return {
                restrict: 'A',
                template: `<div id="coverage-map" class="large-12 columns"></div>`,
                replace: true,
                link: link
            };
        });;
})();