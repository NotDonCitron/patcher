import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactCTA from './ContactCTA';

describe('ContactCTA Component', () => {
  it('displays the contact message and a button', () => {
    render(<ContactCTA />);
    expect(screen.getByText(/Interesse an einer Zusammenarbeit/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Kontakt aufnehmen/i })).toBeInTheDocument();
  });
});
