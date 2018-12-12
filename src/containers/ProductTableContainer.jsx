import React from 'react';
import ProductList from '../components/ProductList';
import ProductStore from '../data/stores/ProductStore';
import ProductActions from '../data/actions/ProductActions';

class ProductTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      error: null,
    };
  }

  componentWillMount = () => {
    ProductStore.addChangeListener(this.onChange);
  };

  componentDidMount = async () => {
    await ProductActions.getProducts();
  };

  componentWillUnmount = () => {
    ProductStore.removeChangeListener(this.onChange);
  };

  onChange = () => {
    this.setState({
      products: ProductStore.getProducts()
        ? ProductStore.getProducts().selectedProducts
        : null,
      error: ProductStore.getError() ? ProductStore.getError().message : null,
    });
  };

  render = () => {
    const { products, error } = this.state;

    return (
      <div className="col-sm-12">
        {error ? (
          <p id="error-text">Error Occurred: {error}</p>
        ) : !products ? (
          <em>Loading products...</em>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    );
  };
}

export default ProductTableContainer;
