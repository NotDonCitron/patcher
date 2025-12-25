import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillsGrid from './SkillsGrid';

describe('SkillsGrid Component', () => {
  it('renders skill categories', () => {
    render(<SkillsGrid />);
    expect(screen.getByText(/Technische Fähigkeiten/i)).toBeInTheDocument();
    expect(screen.getByText(/Webentwicklung/i)).toBeInTheDocument();
    expect(screen.getByText(/KI & Automatisierung/i)).toBeInTheDocument();
  });
});
