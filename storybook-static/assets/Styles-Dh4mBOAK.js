import{j as s}from"./jsx-runtime-DwZrPTBh.js";import{r as c}from"./iframe-DeqXgmUH.js";const l="omoikane-global-styles",f=`
:root{
  --font-sans: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-primary: #1d4ed8;
  --color-primary-600: #2563eb;
  --radius: 0.5rem;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
}

/* Example dark theme variables: toggle by setting data-theme="dark" on the <html> or app root element */
[data-theme="dark"]{
  --color-bg: #0b1221;
  --color-surface: #071026;
  --color-text: #e6eef8;
  --color-muted: #94a3b8;
  --color-primary: #60a5fa;
  --color-primary-600: #3b82f6;
}

/* utility class for forcing font family when needed */
.omoikane-font-sans { font-family: var(--font-sans) !important; }

*{box-sizing:border-box}
html,body,#root{height:100%}
body{
  margin:0;
  font-family: var(--font-sans);
  background:var(--color-bg);
  color:var(--color-text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

/* focus styles */
:focus{
  outline: none;
}
button:focus, [role="button"]:focus, a:focus, input:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(37,99,235,0.18);
  border-radius: 6px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important }
}

/* Utility: visually hidden */
.omoikane-sr-only {
  position: absolute !important;
  height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

/* Example Recursive utility classes using variable font axes
   Replace <uniquifier> with descriptive names for semantic classes in your app.
   Axes available: slnt (-15..0), wght (300..1000), CASL (0..1), CRSV (0..1), MONO (0..1)
*/
.recursive-regular {
  font-family: 'Recursive', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
}

.recursive-italic {
  font-family: 'Recursive', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: italic;
  /* slnt negative values create italic-like slant */
  font-variation-settings: 'slnt' -10, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
}

.recursive-mono {
  font-family: 'Recursive', monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 1;
}

.recursive-bold-casual {
  font-family: 'Recursive', sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 1, 'CRSV' 1, 'MONO' 0;
}

/* Semantic utility classes */
.recursive-body {
  font-family: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
}

.recursive-ui {
  font-family: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
}

.recursive-heading {
  font-family: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
}

.recursive-serif {
  font-family: 'Recursive', Georgia, 'Times New Roman', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  /* increase casual/cursive axes to get serif-like appearance */
  font-variation-settings: 'slnt' 0, 'CASL' 1, 'CRSV' 0.5, 'MONO' 0;
}

/* Additional semantic presets */
.recursive-display-large {
  font-family: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
  letter-spacing: -0.02em;
}

.recursive-display-small {
  font-family: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
}

.recursive-caption {
  font-family: 'Recursive', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0;
  font-size: 12px;
}

.recursive-code {
  font-family: 'Recursive', monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'MONO' 1;
}

./* Markdown content styling hook
.   - 'omoikane-markdown' is a small, opinionated baseline so rendered HTML
.     from markdown looks like other text in the design system.
.   - We prefer Tailwind's 'prose' class where available, but include a
.     minimal fallback so plain CSS consumers still look good.
.*/
.omoikane-markdown {
  color: var(--color-text);
  line-height: 1.6;
}
.omoikane-markdown h1,
.omoikane-markdown h2,
.omoikane-markdown h3,
.omoikane-markdown h4 {
  color: var(--color-text);
  margin-top: 1.25em;
  margin-bottom: 0.5em;
  font-family: var(--font-sans);
  font-weight: 700;
}
.omoikane-markdown p {
  margin: 0.5em 0 1em 0;
}
.omoikane-markdown a { color: var(--color-primary); }
.omoikane-markdown blockquote {
  margin: 0.75em 0;
  padding-left: 1rem;
  border-left: 4px solid rgba(0,0,0,0.06);
  color: var(--color-muted);
}
.omoikane-markdown pre {
  background: var(--color-surface);
  padding: 0.75rem;
  border-radius: calc(var(--radius) / 2);
  overflow: auto;
}
.omoikane-markdown code { font-family: 'Recursive', monospace; font-size: 0.95em; }
.omoikane-markdown ul,
.omoikane-markdown ol { margin: 0.5em 0 1em 1.25rem; }
.omoikane-markdown table { width: 100%; border-collapse: collapse; margin: 0.75em 0; }
.omoikane-markdown th,
.omoikane-markdown td { border: 1px solid rgba(0,0,0,0.06); padding: 0.5rem; }
.omoikane-markdown img { max-width: 100%; height: auto; }

/* Central typography baseline used across components.
  Prefer using Tailwind's 'prose' when available; these rules act as
  a fallback so components look consistent even without Tailwind
  processing (e.g. in Storybook runtime or tests).
*/
.omoikane-typography,
.omoikane-root .omoikane-typography {
  font-family: var(--font-sans);
  color: var(--color-text);
  line-height: 1.6;
  font-size: 1rem;
}

.omoikane-typography h1 { font-size: 2.25rem; line-height: 1.1; margin-top: 1.25rem; margin-bottom: .5rem; font-family: var(--font-sans); font-weight: 900; }
.omoikane-typography h2 { font-size: 1.75rem; line-height: 1.15; margin-top: 1.25rem; margin-bottom: .5rem; font-family: var(--font-sans); font-weight: 700; }
.omoikane-typography h3 { font-size: 1.25rem; line-height: 1.2; margin-top: 1rem; margin-bottom: .5rem; font-family: var(--font-sans); font-weight: 700; }
.omoikane-typography p { margin: 0.5em 0 1em 0; }
.omoikane-typography a { color: var(--color-primary); text-decoration: underline; }
.omoikane-typography blockquote { margin: 0.75em 0; padding-left: 1rem; border-left: 4px solid rgba(0,0,0,0.06); color: var(--color-muted); }
.omoikane-typography pre { background: var(--color-surface); padding: 0.75rem; border-radius: calc(var(--radius) / 2); overflow: auto; }
.omoikane-typography code { font-family: 'Recursive', monospace; font-size: 0.95em; }
.omoikane-typography ul, .omoikane-typography ol { margin: 0.5em 0 1em 1.25rem; }
.omoikane-typography table { width: 100%; border-collapse: collapse; margin: 0.75em 0; }
.omoikane-typography th, .omoikane-typography td { border: 1px solid rgba(0,0,0,0.06); padding: 0.5rem; }
.omoikane-typography img { max-width: 100%; height: auto; }

/* Allow opt-out: components that deliberately manage colors (e.g. color.js wrappers)
  can add 'color-override' class so they won't be affected by global color rules.
*/
.color-override { color: inherit; }
`,d=({children:m,theme:t="auto"})=>(c.useEffect(()=>{if(typeof document>"u"||document.getElementById(l))return;{const e=document.createElement("link");e.rel="preload",e.as="font",e.type="font/woff2",e.href="/fonts/Recursive-Variable.woff2",e.crossOrigin="anonymous",document.head.appendChild(e);const i=document.createElement("style");i.id="omoikane-local-font-face",i.innerHTML=`@font-face {
        font-family: 'Recursive';
        src: url('/fonts/Recursive-Variable.woff2') format('woff2');
        font-display: swap;
        font-weight: 100 900;
        font-style: normal;
      }
      /* If you have an italic variable file, add a separate @font-face with font-style: italic */`,document.head.appendChild(i)}const r=e=>{e==="auto"?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"):e==="dark"?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme")};r(t);let o=null;const a=()=>{t==="auto"&&r("auto")};if(t==="auto"&&window.matchMedia){o=window.matchMedia("(prefers-color-scheme: dark)");try{o.addEventListener("change",a)}catch{o.addListener(a)}}const n=document.createElement("style");n.id=l,n.innerHTML=f,document.head.appendChild(n);try{document.body&&!document.body.classList.contains("omoikane-root")&&document.body.classList.add("omoikane-root")}catch{}return()=>{if(o)try{o.removeEventListener("change",a)}catch{o.removeListener(a)}}},[t]),s.jsx(s.Fragment,{children:m}));d.__docgenInfo={description:"",methods:[],displayName:"Styles",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'auto'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}}}};export{d as S};
