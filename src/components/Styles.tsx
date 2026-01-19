import React, { useEffect } from 'react';

const STYLE_ID = 'omoikane-global-styles';

const CSS = `
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
`;

export const Styles: React.FC<{ children?: React.ReactNode; theme?: 'light' | 'dark' | 'auto' }> = ({ children, theme = 'auto' }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(STYLE_ID)) return;

    const isProd = process.env.NODE_ENV === 'production';

    if (!isProd) {
      // Development — load from Google Fonts for convenience and fast iteration
      const pre1 = document.createElement('link');
      pre1.rel = 'preconnect';
      pre1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(pre1);

      const pre2 = document.createElement('link');
      pre2.rel = 'preconnect';
      pre2.href = 'https://fonts.gstatic.com';
      pre2.crossOrigin = '';
      document.head.appendChild(pre2);

      const gf = document.createElement('link');
      gf.rel = 'stylesheet';
      gf.href = "https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap";
      document.head.appendChild(gf);
    } else {
      // Production — prefer a locally hosted variable WOFF2 for privacy and reliability.
      // Place your font file at: /public/fonts/Recursive-Variable.woff2 (served as /fonts/Recursive-Variable.woff2)
      const preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'font';
      preload.type = 'font/woff2';
      preload.href = '/fonts/Recursive-Variable.woff2';
      preload.crossOrigin = 'anonymous';
      document.head.appendChild(preload);

      const ff = document.createElement('style');
      ff.id = 'omoikane-local-font-face';
      ff.innerHTML = `@font-face {
        font-family: 'Recursive';
        src: url('/fonts/Recursive-Variable.woff2') format('woff2');
        font-display: swap;
        font-weight: 100 900;
        font-style: normal;
      }
      /* If you have an italic variable file, add a separate @font-face with font-style: italic */`;
      document.head.appendChild(ff);
    }

    // Apply theme: 'auto' follows prefers-color-scheme, 'light' or 'dark' force a theme.
    const applyTheme = (t: 'light' | 'dark' | 'auto') => {
      if (t === 'auto') {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) document.documentElement.setAttribute('data-theme', 'dark');
        else document.documentElement.removeAttribute('data-theme');
      } else if (t === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    };

    applyTheme(theme);

    // If auto, listen for changes
    let mql: MediaQueryList | null = null;
    const handleChange = () => {
      if (theme === 'auto') applyTheme('auto');
    };
    if (theme === 'auto' && window.matchMedia) {
      mql = window.matchMedia('(prefers-color-scheme: dark)');
      try { mql.addEventListener('change', handleChange); } catch { mql.addListener(handleChange); }
    }

    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.innerHTML = CSS;
    document.head.appendChild(el);

    return () => {
      // keep styles for storybook hot reload — don't remove by default
      // document.head.removeChild(el);
      if (mql) {
        try { mql.removeEventListener('change', handleChange); } catch { mql.removeListener(handleChange); }
      }
    };
  }, [theme]);

  return <>{children}</>;
};

export default Styles;
