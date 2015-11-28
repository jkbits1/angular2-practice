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
      .take(3)
      .safeApply($scope, function (x) {
        $scope.counter = x;
      });

  $scope.click = function () {
    $scope.buttonEnabled = false;
    observable.subscribe(
      function onNext(val) {
        console.log(val);
      },
      function onError (err) {
        console.log(err);
      },
      function onCompleted () {
        console.log('done');
      }
    );
  };
});
