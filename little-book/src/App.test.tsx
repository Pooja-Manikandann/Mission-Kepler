import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('contains hello text', () => {
      render(
          <App />
      );
      expect(screen.getByText('heello')).toBeInTheDocument();
  });
});