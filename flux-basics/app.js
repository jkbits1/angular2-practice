/**
 * Created by Jon on 24/01/16.
 */

var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, CatalogActions, CatalogStore) {
  $scope.catalogItems = [];

  //trigger action to load catalog
  CatalogActions.loadCatalog();

  // register callback to respond to catalog updates
  CatalogStore.event.on('change', catalogUpdate);

  function catalogUpdate () {
    // update view with current state
    $scope.catalogItems = CatalogStore.getItems();
  }
});

