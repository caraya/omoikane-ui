# Instructions for adding production fonts

Place your production-ready variable WOFF2 font files here so they are served from `/fonts/*`.

Recommended filename (used by `Styles.tsx`):

  /fonts/Recursive-Variable.woff2

How to add the font file:

  1. Download the WOFF2 file manually and place it in this directory named `Recursive-Variable.woff2`.
  2. Alternatively, add the file via your CI/CD pipeline or asset process so it lands at `/public/fonts/Recursive-Variable.woff2` in production builds.

Notes:

- Ensure your web server serves `font/woff2` with the correct MIME type.
- If you need italic or separate variable-italic fonts, add additional files and update `Styles.tsx` accordingly.
- For Storybook static builds, this directory is already configured to be served via `staticDirs`.
