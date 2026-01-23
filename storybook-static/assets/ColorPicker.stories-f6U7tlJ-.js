import{j as r}from"./jsx-runtime-DwZrPTBh.js";import{C as c}from"./ColorPicker-CTRFYTG7.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Color.js/ColorPicker",component:c,tags:["autodocs"],argTypes:{color:{control:"text"},space:{control:"select",options:["srgb","oklch","p3","rec2020"]}}},t=o=>r.jsxs("div",{style:{padding:20},children:[r.jsxs("div",{className:"mb-4 text-sm text-gray-500",children:["Note: This component loads external scripts from ",r.jsx("code",{children:"elements.colorjs.io"}),". Ensure you have internet access."]}),r.jsx(c,{...o})]}),e={render:o=>r.jsx(t,{...o}),args:{color:"oklch(70% 0.25 138)"}},s={render:o=>r.jsx(t,{...o}),args:{color:"oklch(62.796% 0.4 296)",space:"oklch"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ColorPickerWithErrorConfig {...args} />,
  args: {
    color: 'oklch(70% 0.25 138)'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ColorPickerWithErrorConfig {...args} />,
  args: {
    color: 'oklch(62.796% 0.4 296)',
    space: 'oklch'
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","OKLCHSpace"];export{e as Default,s as OKLCHSpace,m as __namedExportsOrder,p as default};
