import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{useMDXComponents as o}from"./index-CDlax2gF.js";import{M as t}from"./blocks-CukJbebj.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Explainers/Styles vs Typography"}),`
`,e.jsx(n.h1,{id:"styles-vs-typography--when-to-use-each",children:"Styles vs Typography — when to use each"}),`
`,e.jsxs(n.p,{children:["This short explainer describes the different responsibilities of the ",e.jsx(n.code,{children:"Styles"})," layer and a higher-level ",e.jsx(n.code,{children:"Typography"})," layer (semantic text components or tokens). Keeping them separate makes the system predictable, accessible, and easy to theme."]}),`
`,e.jsxs(n.h2,{id:"styles-global-foundation",children:[e.jsx(n.code,{children:"Styles"})," (global foundation)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Responsible for loading fonts, injecting base CSS variables, resets, and lightweight utility classes."}),`
`,e.jsxs(n.li,{children:["Examples:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["font-face / Google Fonts preload, ",e.jsx(n.code,{children:"--font-sans"})," variable"]}),`
`,e.jsxs(n.li,{children:["color tokens (",e.jsx(n.code,{children:"--color-text"}),", ",e.jsx(n.code,{children:"--color-muted"}),"), spacing and base rhythm tokens"]}),`
`,e.jsxs(n.li,{children:["small utility presets like ",e.jsx(n.code,{children:".recursive-body"}),", ",e.jsx(n.code,{children:".recursive-heading"}),", or font-variation helper classes"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Scope: global (wrap your app once with ",e.jsx(n.code,{children:"Styles"})," at the root or include it in your app shell)."]}),`
`,e.jsx(n.li,{children:"Good for: configuring the design system, making tokens and fonts available everywhere, and providing quick utilities for prototyping or docs."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Styles } from '../src/components/Styles';

function App({ children }) {
  return <Styles>{children}</Styles>;
}
`})}),`
`,e.jsxs(n.h2,{id:"typography-semantic-components--tokens",children:[e.jsx(n.code,{children:"Typography"})," (semantic components / tokens)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Responsible for how text is expressed in UI components: semantic variants, scale, responsive sizes, accessible line-height and weight choices."}),`
`,e.jsxs(n.li,{children:["Examples of what a ",e.jsx(n.code,{children:"Typography"})," layer provides:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Heading"}),", ",e.jsx(n.code,{children:"Body"}),", ",e.jsx(n.code,{children:"Label"}),", ",e.jsx(n.code,{children:"Caption"}),", ",e.jsx(n.code,{children:"Code"})," components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"variant"})," props (e.g., ",e.jsx(n.code,{children:'level="h1" | "h2" | "lead"'}),") that map to tokenized font-size/line-height/letter-spacing"]}),`
`,e.jsxs(n.li,{children:["accessibility defaults (sensible contrast, ",e.jsx(n.code,{children:"aria"})," considerations for headings)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Scope: component-level styling that consumes tokens from ",e.jsx(n.code,{children:"Styles"}),"."]}),`
`,e.jsx(n.li,{children:"Good for: ensuring consistent typographic rhythm across the app, choosing the right semantic element for headings and paragraphs, and encapsulating responsive rules."}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Example usage (pseudo-code)
<Styles>
  <Heading level="h1">Welcome</Heading>
  <Body variant="lead">A short leading paragraph that introduces the page.</Body>
</Styles>
`})}),`
`,e.jsx(n.h2,{id:"why-keep-them-separate",children:"Why keep them separate?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Single responsibility: ",e.jsx(n.code,{children:"Styles"})," sets up the environment (fonts, tokens) while ",e.jsx(n.code,{children:"Typography"})," decides how to express text using those tokens."]}),`
`,e.jsxs(n.li,{children:["The separation enables theming and runtime swaps: you can change font-loading or token values in ",e.jsx(n.code,{children:"Styles"})," without rewriting every text component."]}),`
`,e.jsxs(n.li,{children:["Reusability: ",e.jsx(n.code,{children:"Typography"})," components are small, predictable building blocks that rely on the tokens ",e.jsx(n.code,{children:"Styles"})," exposes."]}),`
`]}),`
`,e.jsx(n.h2,{id:"practical-guidance",children:"Practical guidance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always mount ",e.jsx(n.code,{children:"Styles"})," near the root of your app or in Storybook's preview so tokens and fonts are available everywhere."]}),`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"Typography"})," components for semantic UI text (headings, body copy, labels) so you get consistent sizes and accessible defaults."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"Styles"})," utility classes or the interactive Storybook knobs when you need quick experiments with font-variation-settings or to demonstrate presets in docs."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"do-typography-components-inherit-from-styles",children:["Do ",e.jsx(n.code,{children:"Typography"})," components inherit from ",e.jsx(n.code,{children:"Styles"}),"?"]}),`
`,e.jsxs(n.p,{children:["Yes — ",e.jsx(n.code,{children:"Typography"})," components typically ",e.jsx(n.em,{children:"inherit"})," the foundation ",e.jsx(n.code,{children:"Styles"})," provides through the CSS cascade and CSS variables. In practice:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Styles"})," sets tokens and anchors (e.g. ",e.jsx(n.code,{children:"--font-sans"}),", ",e.jsx(n.code,{children:"--color-text"}),", base line-height)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Typography"})," reads those tokens (e.g. ",e.jsx(n.code,{children:"fontFamily: var(--font-sans)"}),") and applies semantic sizes, line-heights, and accessible defaults."]}),`
`,e.jsxs(n.li,{children:["This separation keeps responsibilities clear: change font-loading or token values in ",e.jsx(n.code,{children:"Styles"})," and ",e.jsx(n.code,{children:"Typography"})," components automatically pick up those changes."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The concrete examples below show this flow: ",e.jsx(n.code,{children:"Styles"})," provides tokens, and the tiny ",e.jsx(n.code,{children:"Heading"}),"/",e.jsx(n.code,{children:"Body"})," components consume them."]}),`
`,e.jsx(n.h2,{id:"concrete-examples-inline",children:"Concrete examples (inline)"}),`
`,e.jsxs(n.p,{children:["Below are very small, self-contained example components that illustrate how a ",e.jsx(n.code,{children:"Typography"})," layer might consume tokens from ",e.jsx(n.code,{children:"Styles"}),". These are meant for the docs — in production you would place them in ",e.jsx(n.code,{children:"src/components/typography"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Example: a tiny Heading and Body components using tokens from Styles
import React from 'react';

export function Heading({ children, level = 'h2' }: { children: React.ReactNode; level?: 'h1'|'h2'|'h3'|'h4' }) {
  const Tag = level as any;
  return (
    <Tag style={{
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.15,
      margin: 0,
      color: 'var(--color-text)'
    }}>{children}</Tag>
  );
}

export function Body({ children, variant = 'normal' }: { children: React.ReactNode; variant?: 'normal'|'lead' }) {
  const style = variant === 'lead' ? { fontSize: 18, lineHeight: 1.6 } : { fontSize: 16, lineHeight: 1.5 };
  return (
    <p style={{ ...style, margin: 0, color: 'var(--color-text)' }}>{children}</p>
  );
}

// Usage inside the docs
<Styles>
  <div style={{ padding: 16 }}>
    <Heading level="h1">Design system heading</Heading>
    <div style={{ height: 8 }} />
    <Body variant="lead">This is a short leading paragraph that consumes tokens from \`Styles\` (font-family, color, rhythm).</Body>
  </div>
</Styles>
`})}),`
`,e.jsx(n.h2,{id:"example-interactive-docs",children:"Example: interactive docs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Styles"})," can expose small utility classes like ",e.jsx(n.code,{children:".recursive-body"})," that set ",e.jsx(n.code,{children:"font-variation-settings"})," for a quick preview."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"Interactive"})," story in the ",e.jsx(n.code,{children:"Styles"})," story set shows how knobs can drive the variable font axes while ",e.jsx(n.code,{children:"Typography"})," components remain the recommended way to render production UI text."]}),`
`]}),`
`,e.jsx(n.h2,{id:"summary",children:"Summary"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Styles"})," = global foundation (fonts, tokens, utilities)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Typography"})," = semantic layer (components, variants, accessibility)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["If you'd like, I can add a short ",e.jsx(n.code,{children:"Typography"})," folder with example ",e.jsx(n.code,{children:"Heading"}),"/",e.jsx(n.code,{children:"Body"})," components and a Storybook story that demonstrates the recommended usage pattern."]})]})}function x(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
