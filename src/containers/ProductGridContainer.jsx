import React from 'react';
import ProductService from '../services/productService';
import ProductGrid from '../components/ProductGrid';

export default class ProductGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
    this.productService = new ProductService(props.apiUrl);
  }

  componentDidMount = () => {
    const { products } = this.state;
    if (!products) {
      (async () => {
        try {
          const productList = await this.productService.getProducts();
          console.log('list', productList);
          this.setState({ products: productList.selectedProducts });
        } catch (ex) {
          console.log('got an error ', ex);
        }
      })();
    }
  };

  render = () => {
    const { products } = this.state;

    return (
      <div className="col-sm-12">
        {!products ? (
          <em>Loading products...</em>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    );
  };
}
