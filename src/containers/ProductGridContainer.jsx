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
    };
    this.onChange = this.onChange.bind(this);
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
    console.log(error);
    return (
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
