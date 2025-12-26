import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  it('displays the title parts in German', () => {
    render(<Hero />);
    expect(screen.getByText(/AI/i)).toBeInTheDocument();
    expect(screen.getByText(/Engineer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/System/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Willkommen/i)).toBeInTheDocument();
    
    // Check for Resume Download Button
    const downloadLink = screen.getByRole('link', { name: /Lebenslauf/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', '/lebenslauf.pdf');
    expect(downloadLink).toHaveAttribute('download');
  });
});