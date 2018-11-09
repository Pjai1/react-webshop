import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import ProductConstants from '../constants/ProductConstants';

const CHANGE_EVENT = 'change';

let _products = [];
let _error;

const setProducts = products => {
  _products = products;
};

const setError = error => {
  _error = error;
};

class ProductStore extends EventEmitter {
  emitChange = () => {
    this.emit(CHANGE_EVENT);
  };

  addChangeListener = callback => {
    this.on(CHANGE_EVENT, callback);
  };

  removeChangeListener = callback => {
    this.removeListener(CHANGE_EVENT, callback);
  };

  getProducts = () => _products;

  getError = () => _error;
}

const productStore = new ProductStore();

productStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.actionType) {
    case ProductConstants.GET_PRODUCTS:
      setProducts(action.products);
      productStore.emitChange();
      break;

    case ProductConstants.GET_PRODUCTS_FAILURE:
      setError(action.error);
      productStore.emitChange();
      break;

    default:
  }
});

export default productStore;
