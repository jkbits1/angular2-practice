/**
 * Created by jk on 28/11/15.
 */

var app = angular.module('ang-rxjs', ['rx']);

app.controller('MainCtrl', function ($scope, rx) {
  $scope.buttonEnabled = true;
  $scope.counter = 0;

  var observable =
    rx.Observable
      .interval(5000)
      .safeApply($scope, function (x) {
        $scope.counter = x;
      });

  $scope.click = function () {
    $scope.buttonEnabled = false;
    observable.subscribe();
  };
});
