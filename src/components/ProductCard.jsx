import React from 'react';
import PropTypes from 'prop-types';
import { toCurrency, toReadableStocked, toPercentage } from '../core/pipes';

const ProductCard = ({ product }) => (
  <div className="card" key={product.id}>
    <img className="card-img-top" src={product.image} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">
        <b>Product Id:</b> {product.id}
      </p>
      <p className="card-text">
        <b>Product Sku:</b> {product.sku}
      </p>
      <p className="card-text">
        <b>Product Desc:</b> {product.desc}
      </p>
      <p className="card-text">
        <b>Product Stocked:</b> {toReadableStocked(product.stocked)}
      </p>
      <p className="card-text">
        <b>Discount:</b> {toPercentage(1 - product.price / product.basePrice)}
      </p>
      <p className="card-text">
        <b>Product Price:</b> {toCurrency(product.price)}
      </p>
    </div>
  </div>
);

ProductCard.propTypes = {
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

export default ProductCard;
