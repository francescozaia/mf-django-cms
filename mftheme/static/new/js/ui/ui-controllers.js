"use strict";

angular.module('UserInterface.controllers', [])
    .controller('ModalController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
        $scope.open = function () {
            $modal.open({
                //templateUrl: '/app/partials/login-form-partial.html',
                template: '<div class="modal-header"><h3>Login!</h3></div><div class="modal-body"><form role="form" method="get" ng-submit="login()" ng-controller="LoginController"><div class="form-group"><label for="username">Username</label><input ng-model="data.username" type="text" class="form-control" name="username" id="username" placeholder="Enter your username"></div><div class="form-group"><label for="password">Password</label><input ng-model="data.password" type="password" class="form-control" name="password" id="password" placeholder="Password"></div><div class="checkbox"><label><input ng-model="data.remember" type="checkbox" name="remember" id="remember"> Remember me</label></div><div ng-bind="User.username"></div><input type="submit" class="btn btn-default submit" value="Submit" /><input type="button" class="btn btn-warning" value="Cancel" ng-click="cancel()"/></form></div>',
                controller: function ($scope, $modalInstance) {
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                }
            }).result.then(function () {
                    // resolved: modal is closed (with result)
                }, function () {
                    // rejected: modal is dismissed (without result)
                    $log.info('Modal dismissed at: ' + new Date());
                });
        };
    }])
    .controller('CollapseController', ['$scope', function($scope) {
        $scope.isCollapsed = false;
    }]);