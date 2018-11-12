import React from 'react';

// HOC example
const withProps = WrappedComponent =>
  class extends React.Component {
    render() {
      console.log('PROPS ARE: ', this.props);
      return <WrappedComponent />;
    }
  };

export default withProps;
