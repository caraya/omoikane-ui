import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Styles } from '../src/components/Styles';

const meta: Meta<typeof Styles> = {
  title: 'Components/Styles',
  component: Styles,
};

export default meta;

type Story = StoryObj<typeof Styles>;

export const Intro: Story = {
  render: () => (
    <Styles>
      <div style={{ padding: 24 }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>Omoikane UI — Global Styles</h1>
        <p style={{ color: 'var(--color-muted)' }}>This story injects a minimal set of global styles and CSS variables used across the component library.</p>

        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <div style={{ background: 'var(--color-primary)', color: '#fff', padding: 12, borderRadius: 8 }}>Primary</div>
          <div style={{ background: 'var(--color-surface)', color: 'var(--color-text)', padding: 12, borderRadius: 8 }}>Surface</div>
        </div>
      </div>
    </Styles>
  )
};

export const Usage: Story = {
  render: () => (
    <Styles>
      <div style={{ padding: 24, display: 'grid', gap: 16 }}>
        <h2 className="recursive-heading">Recursive — Heading (recursive-heading)</h2>

        <div>
          <p className="recursive-body">This is body text using <strong>recursive-body</strong>. It uses the Recursive variable font with neutral axes.</p>
          <p className="recursive-italic">This is an italic example using <strong>recursive-italic</strong>.</p>
          <p className="recursive-mono">Code / monospace example using <strong>recursive-mono</strong>.</p>
          <p className="recursive-bold-casual">A bolder casual style using <strong>recursive-bold-casual</strong>.</p>
        </div>

        <div>
          <h3>How to use</h3>
          <pre style={{ background: '#0f172a', color: '#fff', padding: 12, borderRadius: 6, overflow: 'auto' }}>
{`.recursive-<uniquifier> {
  font-family: "Recursive", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "CASL" 0,
    "CRSV" 0,
    "MONO" 0;
}`}
          </pre>
        </div>
      </div>
    </Styles>
  )
};

export const Interactive: Story = {
  args: {
    slnt: 0,
    wght: 400,
    CASL: 0,
    CRSV: 0,
    MONO: 0,
    italic: false,
    preset: 'none'
  },
  argTypes: {
    slnt: { control: { type: 'number', min: -15, max: 0, step: 1 } },
    wght: { control: { type: 'number', min: 300, max: 1000, step: 50 } },
    CASL: { control: { type: 'number', min: 0, max: 1, step: 0.1 } },
    CRSV: { control: { type: 'number', min: 0, max: 1, step: 0.1 } },
    MONO: { control: { type: 'number', min: 0, max: 1, step: 1 } },
    italic: { control: 'boolean' },
    preset: { control: { type: 'select' }, options: ['none','recursive-body','recursive-ui','recursive-heading','recursive-display-large','recursive-display-small','recursive-caption','recursive-code','recursive-serif'] }
  },
  render: (args) => {
    const { slnt, wght, CASL, CRSV, MONO, italic, preset } = args as any;
    const variation = `'slnt' ${slnt}, 'wght' ${wght}, 'CASL' ${CASL}, 'CRSV' ${CRSV}, 'MONO' ${MONO}`;
    const style: React.CSSProperties = {
      fontFamily: "'Recursive', sans-serif",
      fontVariationSettings: variation,
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: wght as any
    };

    return (
      <Styles>
        <div style={{ padding: 24 }}>
          <div style={{ marginBottom: 12 }}>
            <strong>Interactive Recursive demo</strong>
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            <div className={preset === 'none' ? undefined : preset} style={style}>
              The quick brown fox jumps over the lazy dog — 0123456789
            </div>

            <div style={{ color: 'var(--color-muted)' }}>
              <div>Current variation: <code>{variation}</code></div>
              <div>Italic: {italic ? 'yes' : 'no'}</div>
              <div>Preset class: {preset}</div>
            </div>
          </div>
        </div>
      </Styles>
    );
  }
};

export const ThemePreview: Story = {
  args: {
    theme: 'auto'
  },
  argTypes: {
    theme: { control: { type: 'select' }, options: ['auto', 'light', 'dark'] }
  },
  render: (args) => (
    <Styles theme={(args as any).theme}>
      <div style={{ padding: 24 }}>
        <h2>Theme preview — {String((args as any).theme)}</h2>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <div style={{ background: 'var(--color-primary)', color: '#fff', padding: 12, borderRadius: 8 }}>Primary</div>
          <div style={{ background: 'var(--color-surface)', color: 'var(--color-text)', padding: 12, borderRadius: 8 }}>Surface</div>
          <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 12, borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)' }}>Background</div>
        </div>
      </div>
    </Styles>
  )
};
