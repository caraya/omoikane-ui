import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{C as c}from"./ColorSwatch-BS1DPlQJ.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Color.js/ColorSwatch",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","large"]},value:{control:"text"},gamuts:{control:"text"}}},l=({children:r,...n})=>e.jsxs("div",{style:{padding:20},children:[e.jsxs("div",{className:"mb-4 text-sm text-gray-500 bg-yellow-50 p-2 rounded border border-yellow-200 inline-block",children:["⚠️ Note: This component loads external web components from ",e.jsx("code",{children:"elements.colorjs.io"}),"."]}),e.jsx("div",{className:"mt-4",children:r||e.jsx(c,{...n})})]}),a={render:r=>e.jsx(l,{...r}),args:{value:"oklch(60% 0.2 250)",label:"Deep Purple"}},o={render:r=>e.jsx(l,{...r}),args:{value:"color(display-p3 1 0 0)",size:"large",label:"P3 Red",info:[{L:"oklch.l"},{C:"oklch.c"},{H:"oklch.h"}]}},s={render:r=>e.jsx(l,{...r}),args:{value:"oklch(90% 0.37 145)",label:"Neon Green (OOG)",size:"medium"}},t={render:()=>e.jsxs(l,{children:[e.jsx(c,{children:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:e.jsx("input",{type:"text",defaultValue:"blue",className:"border rounded px-2 py-1"})})}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Note: ColorSwatch can wrap an input element to visualize it automatically."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ColorSwatchWrapper {...args} />,
  args: {
    value: 'oklch(60% 0.2 250)',
    label: 'Deep Purple'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ColorSwatchWrapper {...args} />,
  args: {
    value: 'color(display-p3 1 0 0)',
    size: 'large',
    label: 'P3 Red',
    info: [{
      "L": "oklch.l"
    }, {
      "C": "oklch.c"
    }, {
      "H": "oklch.h"
    }]
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ColorSwatchWrapper {...args} />,
  args: {
    // Extremely saturated green that is likely out of sRGB
    value: 'oklch(90% 0.37 145)',
    label: 'Neon Green (OOG)',
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ColorSwatchWrapper>
            <ColorSwatch>
                <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
                    <input type="text" defaultValue="blue" className="border rounded px-2 py-1" />
                </div>
            </ColorSwatch>
            <p className="mt-2 text-sm text-gray-500">
                Note: ColorSwatch can wrap an input element to visualize it automatically.
            </p>
        </ColorSwatchWrapper>
}`,...t.parameters?.docs?.source}}};const h=["Basic","LargeWithInfo","OutOfGamut","Editable"];export{a as Basic,t as Editable,o as LargeWithInfo,s as OutOfGamut,h as __namedExportsOrder,u as default};
