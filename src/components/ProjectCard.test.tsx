import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from './ProjectCard';

describe('ProjectCard Component', () => {
  const sampleProject = {
    title: 'Test Projekt',
    description: 'Dies ist eine Beschreibung.',
    tags: ['React', 'Python'],
    link: '#'
  };

  it('renders project details correctly', () => {
    render(<ProjectCard {...sampleProject} />);
    expect(screen.getByText('Test Projekt')).toBeInTheDocument();
    expect(screen.getByText('Dies ist eine Beschreibung.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });
});
