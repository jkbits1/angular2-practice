/**
 * Created by Jon on 24/01/16.
 */

angular.module('plunker')
  .factory("CatalogActions", function (Dispatcher, Actions, $http) {
    return {
      loadCatalog: function (item) {
        $http.get('catalog.json')
          .then(function (response) {
            Dispatcher.dispatch({
              type: Actions.CATALOG_LOADED,
              data: response.data
            });
          });
      }
    }
  });

