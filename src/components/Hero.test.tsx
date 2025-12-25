import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  it('displays the title parts in German', () => {
    render(<Hero />);
    expect(screen.getByText(/AI Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/System Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Willkommen/i)).toBeInTheDocument();
  });
});