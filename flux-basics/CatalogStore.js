/**
 * Created by Jon on 24/01/16.
 */

angular.module('plunker')
  .factory("CatalogStore", function (Dispatcher, Actions) {
    var event = new EventEmitter(), catalogItems = [], dispatchToken;

    // mutate state API
    dispatchToken = Dispatcher.register(function (action) {
      switch  (action.type) {
        case Actions.CATALOG_LOADED:
          catalogItems = action.data;
          break;
      }

      // notify change
      event.emit('change');
    });

    // helper function
    function getItems () {
      return catalogItems;
    }

    // read only API
    return {
      getItems: getItems,
      event: event,
      dispatchToken: dispatchToken
    };
  });
