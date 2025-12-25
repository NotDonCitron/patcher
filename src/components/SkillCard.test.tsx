import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Code } from 'lucide-react';
import SkillCard from './SkillCard';

describe('SkillCard Component', () => {
  it('renders the skill name and icon', () => {
    render(<SkillCard name="React" icon={Code} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    // Überprüfen, ob das Icon vorhanden ist (durch das SVG-Tag)
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
