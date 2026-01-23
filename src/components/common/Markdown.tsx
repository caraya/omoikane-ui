import React from 'react';
import { marked } from 'marked';
import { cn } from '../../utils/cn';

marked.setOptions({
  gfm: true,
  breaks: true,
});

export interface MarkdownProps {
  /** Markdown source string. If omitted, children will be used. */
  source?: string;
  /** Extra classNames to merge with defaults */
  className?: string;
  /** Optional children when source prop is not provided */
  children?: React.ReactNode;
}

/**
 * Renders markdown as HTML. By default we add a small set of classes so
 * rendered content inherits the design system typography:
 * - `recursive-body` uses the system font vars defined in `Styles`
 * - `prose` uses Tailwind Typography when available
 * - `omoikane-markdown` can be targeted by global CSS in `Styles.tsx`
 */
const Markdown: React.FC<MarkdownProps> = ({ source, children, className }) => {
  const md = source ?? (typeof children === 'string' ? children : String(children ?? ''));

  const html = React.useMemo(() => marked.parse(md), [md]);

  const classes = cn('omoikane-markdown omoikane-typography prose', className);

  return <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;
