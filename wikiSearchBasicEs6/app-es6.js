/**
 * Created by jk on 28/11/15.
 */

var app = angular.module('plunker', ['rx']);

app.controller('MainCtrl', function($scope, rx, $http, observeOnScope) {

  observeOnScope($scope, 'search')
    .throttle(1000)
    .map((change) => {
      return change.newValue || "";
    })
    .distinctUntilChanged() // Only if the value has changed
    .flatMapLatest(searchWikipedia)
    .safeApply($scope, (result) => {
      console.log('render');
      $scope.results = [];

      var results1 = Array.prototype.slice.call(result.data[1]);

      $scope.results = results1.map((val, idx) => {
        return {
          title: val,
          url: result.data[3][idx]
        }
      });
    })
    .subscribe();

  function searchWikipedia(term) {
    return rx.Observable.fromPromise($http({
      url: "http://en.wikipedia.org/w/api.php?&callback=JSON_CALLBACK",
      method: "jsonp",
      params: {
        action: "opensearch",
        search: encodeURI(term),
        format: "json"
      }
    }));
  }
});
