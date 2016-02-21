/**
 * Created by hwang on 2016/2/21 0:42.
 */
'use strict';

var app = angular.module('hylaxApp', [
    'ui.router', 'toaster', 'ui.bootstrap'
]);
app.run(function ($rootScope, $state, $stateParams) {
    console.log('test');
});