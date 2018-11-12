import React from 'react';
import ProductStore from '../data/stores/ProductStore';
import ProductActions from '../data/actions/ProductActions';

export default class Productform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sku: '',
      title: '',
      price: '',
      basePrice: '',
      desc: '',
      stocked: '',
      error: null,
    };
  }

  onCancel = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { sku, title, stocked, price, basePrice, desc } = this.state;
    const { history } = this.props;
    const product = {
      sku,
      title,
      price: price ? Number(price) : null,
      basePrice: price ? Number(basePrice) : null,
      desc,
      stocked: stocked ? !!stocked : null,
    };
    console.log(product);
    await ProductActions.saveProduct(product);
    if (ProductStore.getError()) {
      this.setState({
        error: ProductStore.getError() ? ProductStore.getError() : null,
      });
      event.preventDefault();
    }
    history.push('');
  };

  handleChange = event => {
    const { id, value } = event.target;
    const stateChange = {};
    stateChange[id] = value;
    this.setState(stateChange);
  };

  render = () => {
    const { sku, title, stocked, price, basePrice, desc, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {error ? (
          <p className="error-message">
            Error Occurred: {error.request.response}
          </p>
        ) : null}
        <div className="form-group">
          <label htmlFor="sku">Sku</label>
          <input
            type="text"
            className="form-control"
            id="sku"
            value={sku}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (€)</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="basePrice">Base Price (€)</label>
          <input
            type="number"
            className="form-control"
            id="basePrice"
            value={basePrice}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stocked">Stocked</label>
          <input
            type="text"
            className="form-control"
            id="stocked"
            value={stocked}
            onChange={this.handleChange}
          />
        </div>
        <div className="button-grid">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    );
  };
}
