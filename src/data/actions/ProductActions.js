import ProductService from '../../services/ProductService';
import API_URL from '../../constants';
import AppDispatcher from '../AppDispatcher';
import ProductConstants from '../constants/ProductConstants';

const productService = new ProductService(API_URL);

export default {
  getProducts: async () => {
    try {
      const products = await productService.getProducts();
      AppDispatcher.dispatch({
        actionType: ProductConstants.GET_PRODUCTS,
        products,
      });
    } catch (ex) {
      AppDispatcher.dispatch({
        actionType: ProductConstants.GET_PRODUCTS_FAILURE,
        error: ex,
      });
    }
  },
};
