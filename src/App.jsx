import React from 'react';
import { Route } from 'react-router-dom';
import ProductTableContainer from './containers/ProductTableContainer';
import API_URL from './constants';
import './App.scss';
import Header from './components/Header';
import ProductGridContainer from './containers/ProductGridContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-grid">
        <Header />
        <div>
          <Route
            path="/"
            exact
            render={() => <ProductGridContainer apiUrl={API_URL} />}
          />
          <Route
            path="/table"
            render={() => <ProductTableContainer apiUrl={API_URL} />}
          />
        </div>
      </div>
    );
  }
}
