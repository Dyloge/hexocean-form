import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import OrderForm from './OrderForm';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <OrderForm onSubmit={this.submit} />
      </Provider>
    );
  }
}
