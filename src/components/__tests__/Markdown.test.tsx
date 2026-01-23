import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Markdown from '../Markdown';

describe('Markdown', () => {
  it('renders heading, task list, code block and table from GFM markdown', () => {
    const md = `# Title

  - [ ] todo item

  \`\`\`js
  console.log('x')
  \`\`\`

  | a | b |
  | - | - |
  | 1 | 2 |`;

    render(<Markdown source={md} />);

    // heading
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Title');

    // task list item text present
    expect(screen.queryByText('todo item')).not.toBeNull();

    // code content
    expect(screen.queryByText("console.log('x')")).not.toBeNull();

    // table rendered
    expect(screen.queryByRole('table')).not.toBeNull();
  });
});
