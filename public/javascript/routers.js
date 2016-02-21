/**
 * Created by hwang on 2016/2/21 0:40.
 */
'use strict';

angular.module('hylaxApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/member/list');
    $stateProvider

        // member manager
        .state('member', {
            abstract: true,
            url: '/member',
            templateUrl: './view/member/member.html',
            controller: 'memberCtrl'
        })
        .state('member.list', {
            url: '^/member/list',
            templateUrl: './view/member/list.html',
            controller: 'listCtrl'
        }).state('member.level', {
            url: '^/member/level',
            templateUrl: './view/member/level.html',
            controller: 'levelCtrl'
        }).state('member.model', {
            url: '^/member/model',
            templateUrl: './view/member/model.html',
            controller: 'modelCtrl'
        })
});