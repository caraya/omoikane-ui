import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{P as r}from"./Pill-BK8eSsm0.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const m={title:"Components/Pill",component:r,args:{children:"Default",variant:"default",size:"md",rounded:!0},argTypes:{variant:{control:{type:"select"},options:["default","neutral","positive","negative","info"]},size:{control:{type:"select"},options:["sm","md","lg"]},rounded:{control:"boolean"},children:{control:"text"}}},i={render:l=>e.jsx(r,{...l})},a={render:()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(r,{children:"Default"}),e.jsx(r,{variant:"neutral",children:"Neutral"}),e.jsx(r,{variant:"positive",children:"Positive"}),e.jsx(r,{variant:"negative",children:"Negative"}),e.jsx(r,{variant:"info",children:"Info"})]})},s={render:()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Pill {...args} />
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 items-center">
      <Pill>Default</Pill>
      <Pill variant="neutral">Neutral</Pill>
      <Pill variant="positive">Positive</Pill>
      <Pill variant="negative">Negative</Pill>
      <Pill variant="info">Info</Pill>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 items-center">
      <Pill size="sm">Small</Pill>
      <Pill size="md">Medium</Pill>
      <Pill size="lg">Large</Pill>
    </div>
}`,...s.parameters?.docs?.source}}};const p=["Playground","Variants","Sizes"];export{i as Playground,s as Sizes,a as Variants,p as __namedExportsOrder,m as default};
