import React from 'react';
import { Route } from 'react-router-dom';
import ProductTableContainer from './containers/ProductTableContainer';
import './App.scss';
import Header from './components/Header';
import ProductGridContainer from './containers/ProductGridContainer';
import ProductForm from './components/ProductForm';
import AppProvider from './context';
import ErrorBoundary from './components/ErrorBoundary';

export default class App extends React.Component {
  render() {
    return (
      // <AppProvider>
      <div className="container-grid">
        <Header />
        <div>
          <Route
            path="/"
            exact
            render={() => (
              <ErrorBoundary>
                <ProductGridContainer property="the best prop ever" />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/table"
            render={() => (
              <ErrorBoundary>
                <ProductTableContainer />
              </ErrorBoundary>
            )}
          />
          <Route path="/detail" component={ProductForm} />
        </div>
      </div>
      // </AppProvider>
    );
  }
}
