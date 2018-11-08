import React from 'react';
import PropTypes from 'prop-types';
import { toCurrency, toReadableStocked } from '../core/pipes';

const Product = ({ product }) => (
  <tr>
    <td>{product.id}</td>
    <td>{product.sku}</td>
    <td>{product.title}</td>
    <td>{toCurrency(product.price)}</td>
    <td>{toCurrency(product.basePrice)}</td>
    <td>{toReadableStocked(product.stocked)}</td>
  </tr>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    sku: PropTypes.string,
    price: PropTypes.number,
    basePrice: PropTypes.number,
    stocked: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
};

export default Product;
