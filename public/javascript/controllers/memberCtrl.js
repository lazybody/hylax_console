/**
 * Created by hwang on 2016/2/21 1:37.
 */
'use strict';

angular.module('hylaxApp')
    .controller('memberCtrl', function ($scope, $state, $location) {
        console.log('member ctrl');
        $scope.catalog = [
            {
                name: '管理',
                content: [
                    {
                        title: '会员列表',
                        url: 'member.list'
                    },
                    {
                        title: '会员等级',
                        url: 'member.level'
                    },
                    {
                        title: '会员中心模板',
                        url: 'member.model'
                    }
                ]
            },
            {
                name: '数据',
                content: []
            }
        ];
        var currUrl = $state.current.url.split('/');
        $scope.showCatelog = '';
        $scope.selectItem = currUrl[currUrl.length - 1];
        for (var i = 0; i < $scope.catalog.length; i++) {
            for (var j = 0; j < $scope.catalog[i].content.length; j++) {
                if (('document.' + $scope.selectItem) == $scope.catalog[i].content[j].url) {
                    $scope.selectCatalog = $scope.catalog[i].name;
                    break;
                }
            }
        }
        if (!$scope.selectItem) {
            $scope.selectItem = $scope.catalog[0].content[0].url;
        } else {
            $scope.selectItem = 'member.' + $scope.selectItem;
        }
        $scope.goTo = function (item, contentItem) {
            $scope.selectCatalog = item.name;
            $scope.selectItem = contentItem.url;
            $state.go(contentItem.url);
        };

        $scope.selectCatelog = function (item) {
            if ($scope.showCatelog == item.name || $scope.selectCatalog == item.name) {
                $scope.showCatelog = '';
                $scope.selectCatalog = '';
            } else {
                $scope.showCatelog = item.name;
                $scope.selectCatalog = '';
            }
        };
    }).controller('listCtrl', function ($scope, $state, $location) {
        console.log('member list ctrl');
    }).controller('levelCtrl', function ($scope, $state, $location) {
        console.log('member level ctrl');
    }).controller('modelCtrl', function ($scope, $state, $location) {
        console.log('member model ctrl');
    });