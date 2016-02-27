/**
 * Created by Jon on 24/01/16.
 */

var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, CatalogActions, CatalogStore, CartActions, CartStore) {
  var vm = this;

  //$scope.catalogItems = [];
  vm.catalogItems = [];
  vm.addItem = addItem;
  vm.removeItem = removeItem;

  //trigger action to load catalog
  CatalogActions.loadCatalog();

  // register callback to respond to catalog updates
  CatalogStore.event.on('change', catalogUpdate);

  CartStore.event.on('change', cartUpdated);

  function catalogUpdate () {
    // update view with current state
    vm.catalogItems = CatalogStore.getItems();
  }

  function cartUpdated () {
    vm.cartItems = CartStore.getItems();
    vm.total = vm.cartItems.reduce(function (prev, item) {
      return prev + (item.qty * item.data.cost);
    }, 0);
  }

  function addItem (item) {
    CartActions.addItem(angular.copy(item));
  }

  function removeItem (item) {
    CartActions.removeItem(item);
  }
});

