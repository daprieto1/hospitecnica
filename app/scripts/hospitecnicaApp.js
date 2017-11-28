(function () {
    'use strict';

    angular.module('hospitecnicaApp', [
        'ngRoute',
        'ngTouch',
        'mm.foundation',
        'firebase',
        'homeModule'
    ])
        .config(['FIREBASE_CONFIG', function (FIREBASE_CONFIG) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }])
        .run(function () {
        });
})();