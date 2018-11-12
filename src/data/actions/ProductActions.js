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
  saveProduct: async productDto => {
    try {
      const product = await productService.saveProduct(productDto);
      AppDispatcher.dispatch({
        actionType: ProductConstants.SAVE_PRODUCT,
        product,
      });
    } catch (ex) {
      AppDispatcher.dispatch({
        actionType: ProductConstants.SAVE_PRODUCT_FAILURE,
        error: ex,
      });
    }
  },
};
