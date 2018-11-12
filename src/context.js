import React from 'react';

export const AppContext = React.createContext('hello');

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Click to be surprised!',
    };
  }

  setMessage = () => {
    this.setState({ message: 'I am a message' });
  };

  render = () => {
    const { message } = this.state;
    const { children } = this.props;
    return (
      <AppContext.Provider value={{ setMessage: this.setMessage, message }}>
        {children}
      </AppContext.Provider>
    );
  };
}

// Old syntax
export const AppConsumer = AppContext.Consumer;
