import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }

  static getDerivedStateFromError = (error, info) => {
    console.log('the error', error);
    return { hasError: true, error, errorInfo: info };
  };

  componentDidCatch = (error, info) => {
    console.log('something went wrong', error, info);
  };

  render = () => {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;
    return hasError ? (
      <p>
        Error Occurred with: {error} and {errorInfo}
      </p>
    ) : (
      children
    );
  };
}
