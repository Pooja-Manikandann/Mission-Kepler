import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

describe('App tests', () => {
  it('renders app successfully', () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
  });
});