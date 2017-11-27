(function () {
    'use strict';

    angular.module('hospitecnicaApp', ['mm.foundation', 'hospitecnicaApp.config', 'firebase', 'homeModule'])
        .config(function (FIREBASE_CONFIG) {
            firebase.initializeApp(FIREBASE_CONFIG);
        })
        .run(function () {
        });
})();