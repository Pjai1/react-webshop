import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => (
  <table className="table table-dark table-hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Sku</th>
        <th>Title</th>
        <th>Price</th>
        <th>BasePrice</th>
        <th>Stocked</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => <Product key={product.id} product={product} />)}
    </tbody>
  </table>
);

export default ProductList;
