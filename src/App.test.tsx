import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Some tests added, many more shouyld be done to
 *  guarantee quality on a real-world application
 */
describe('App component', () => {
  test('it renders', () => {
    render(<App />);
 
 
    expect(screen.getByText('Objects')).toBeInTheDocument();
  });
 })
