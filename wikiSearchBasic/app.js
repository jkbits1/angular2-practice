/**
 * Created by jk on 28/11/15.
 */

var app = angular.module('plunker', ['rx']);

app.controller('MainCtrl', function($scope, rx, $http, observeOnScope) {

  observeOnScope($scope, 'search')
    .throttle(1000)
    .map(function(change){
      return change.newValue || "";
    })
    .distinctUntilChanged() // Only if the value has changed
    .flatMapLatest(searchWikipedia)
    .safeApply($scope, function(result) {
      console.log('render');
      $scope.results = [];
      for(var i=0, ii = result.data[1].length; i<ii; i+=1){
        $scope.results.push({
          title: result.data[1][i],
          url: result.data[3][i]
        });
      }
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
