import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeReact from 'rehype-react';
import { marked } from 'marked';
import { cn } from '../utils/cn';

export interface MarkdownProps {
	source?: string;
	className?: string;
	children?: React.ReactNode;
	/** Map of element tag names to React components for rendering (like MDX `components`) */
	components?: Record<string, React.ComponentType<any>>;
}

const Markdown: React.FC<MarkdownProps> = ({ source, children, className, components }) => {
	const md = source ?? (typeof children === 'string' ? children : String(children ?? ''));

	const processor = React.useMemo(() =>
		unified()
			.use(remarkParse)
			.use(remarkGfm)
			.use(remarkRehype, { allowDangerousHtml: true })
				.use(rehypeRaw)
				// rehype-react typings can be difficult; cast to any so TS accepts the options object
				.use((rehypeReact as any), {
					createElement: React.createElement,
					Fragment: React.Fragment,
					// JSX/runtime options help some bundlers/production builds (storybook cached runtime expects this)
					jsx: { runtime: 'automatic', importSource: 'react' },
					components,
				}),
		[components]
	);

	const classes = cn('omoikane-markdown omoikane-typography prose', className);

	// Attempt to render to React using rehype-react. If the runtime's rehype-react
	// expectations differ (some Storybook/test runtimes use a cached version that
	// requires extra options), fall back to HTML rendering with `marked`.
	try {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - unified result typing is hard to express here but this returns React.ReactNode
		const reactNode = processor.processSync(md).result as React.ReactNode;
		return <div className={classes}>{reactNode}</div>;
	} catch (err) {
		const html = marked.parse(md);
		return <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
	}
};

export default Markdown;
