/**
 * Created by Jon on 25/01/16.
 */

angular.module('plunker')
  .factory("CartStore", function (Dispatcher, Actions) {
    var event = new EventEmitter(), cartItems = [], dispatchToken;

    dispatchToken = Dispatcher.register(function (action) {
      switch (action.type) {
        case Actions.CART_ADD_ITEM:
          addItem(action.data);
          break;
        case Actions.CART_REMOVE_ITEM:
          removeItem(action.data);
          break;
      }
      // notify change
      event.emit('change');
    });

    function addItem (item) {
      var items = cartItems.filter(function (cartItem) {
        return (item.id === cartItem.data.id);
      });

      if (items.length === 0) {
        cartItems.push({
          qty: 1,
          data: item
        });
      }
      else {
        items[0].qty += 1;
      }
    }

    function removeItem (item) {
      var index = cartItems.indexOf(item);

      if (index >= 0) {
        cartItems.splice(index, 1);
      }
    }

    function getItems () {
      return cartItems;
    }

    return {
      getItems: getItems,
      event: event,
      dispatchToken: dispatchToken
    };
  });
