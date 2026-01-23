import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{S as s}from"./Switch-Lw2qq-Vp.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/Switch",component:s,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"]},checkedColor:{control:"color"},uncheckedColor:{control:"color"},thumbColor:{control:"color"},focusRingColor:{control:"color"}}},o={args:{checked:!1,disabled:!1,size:"md"},render:r=>e.jsx("div",{style:{padding:20},children:e.jsxs("label",{className:"flex items-center gap-3",children:[e.jsx(s,{...r,onChange:l=>console.log("switch",l)}),e.jsx("span",{children:"Enable feature"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    size: 'md'
  },
  render: args => <div style={{
    padding: 20
  }}>
      <label className="flex items-center gap-3">
        <Switch {...args} onChange={v => console.log('switch', v)} />
        <span>Enable feature</span>
      </label>
    </div>
}`,...o.parameters?.docs?.source}}};const i=["Playground"];export{o as Playground,i as __namedExportsOrder,d as default};
