import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About Component', () => {
  it('displays the bio and motivation in German', () => {
    render(<About />);
    expect(screen.getByText(/Über mich/i)).toBeInTheDocument();
    expect(screen.getByText(/Homeoffice/i)).toBeInTheDocument();
    expect(screen.getByText(/Gesundheit/i)).toBeInTheDocument();
  });
});
