import React from 'react';
import ProductList from '../components/ProductList';
import ProductStore from '../data/stores/ProductStore';
import ProductActions from '../data/actions/ProductActions';

export default class ProductTableContainer extends React.Component {
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
      products: ProductStore.getProducts().selectedProducts,
    });
  };

  componentDidCatch = () => {
    this.setState({
      error: ProductStore.getError(),
    });
  };

  render = () => {
    const { products, error } = this.state;

    return (
      <div className="col-sm-12">
        {error ? <em>Error Occurred: {error}</em> : null}

        {products ? (
          <ProductList products={products} />
        ) : (
          <em>Loading products...</em>
        )}
      </div>
    );
  };
}
