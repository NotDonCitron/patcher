import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectGrid from './ProjectGrid';

describe('ProjectGrid Component', () => {
  it('renders the projects section title', () => {
    render(<ProjectGrid />);
    expect(screen.getByText(/Ausgewählte Projekte/i)).toBeInTheDocument();
  });
});
