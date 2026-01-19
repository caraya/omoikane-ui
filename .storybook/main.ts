import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.@(mdx|md)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
  ],
  staticDirs: [
    // Serve the local public folder so fonts placed in `public/fonts` are available at /fonts/*
    '../public'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
