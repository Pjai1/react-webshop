import React from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductStore from '../data/stores/ProductStore';
import ProductActions from '../data/actions/ProductActions';

export default class ProductGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      error: null,
      hasError: false,
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

  static getDerivedStateFromError = error => {
    console.log('the error', error);
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    console.log('something went wrong', error, info);
  };

  render = () => {
    const { products, error, hasError } = this.state;
    return hasError ? (
      <p>Something awful happened</p>
    ) : (
      <div className="col-sm-12">
        {error ? (
          <p>Error Occurred: {error}</p>
        ) : !products ? (
          <em>Loading products...</em>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    );
  };
}
