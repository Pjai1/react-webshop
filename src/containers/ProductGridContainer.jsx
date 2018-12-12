import React from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductStore from '../data/stores/ProductStore';
import ProductActions from '../data/actions/ProductActions';
import { AppContext } from '../context';
import withProps from '../withProps';

class ProductGridContainer extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      products: null,
      error: null,
    };
  }

  componentWillMount = () => {
    ProductStore.addChangeListener(this.onChange);
    console.log(this.context);
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
          <ProductGrid products={products} />
        )}
      </div>
    );
  };
}

export default withProps(ProductGridContainer);
