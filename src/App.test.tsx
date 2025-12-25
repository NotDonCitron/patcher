import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the main landing page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/AI Engineer & System Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Technische Fähigkeiten/i)).toBeInTheDocument();
  });
});