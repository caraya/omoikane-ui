import{j as a}from"./jsx-runtime-DwZrPTBh.js";import{D as l}from"./DatePicker-D4tWIw4z.js";import{r as i}from"./iframe-DeqXgmUH.js";import"./IconBase.es-BPXsrtLd.js";import"./CaretRight.es-CP-fpp5F.js";import"./cn-fNskMoFt.js";import"./Button-DveoISW4.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"Dates/DatePicker",component:l,tags:["autodocs"],argTypes:{locale:{control:"select",options:["en-US","en-GB","ja-JP","de-DE","es-ES"],description:"The locale used for formatting dates"},disabled:{control:"boolean"},placeholder:{control:"text"}},parameters:{layout:"centered"}},c=e=>{const[d,p]=i.useState(e.value);return a.jsx(l,{...e,value:d,onChange:p})},r={render:e=>a.jsx(c,{...e}),args:{placeholder:"Select a date..."}},t={render:e=>a.jsx(c,{...e}),args:{value:new Date(2026,0,15),placeholder:"Select a date..."}},s={render:e=>a.jsx(c,{...e}),args:{locale:"en-GB",value:new Date(2026,0,15)}},o={render:e=>a.jsx(c,{...e}),args:{locale:"ja-JP",value:new Date(2026,0,15)}},n={args:{disabled:!0,value:new Date}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    placeholder: 'Select a date...'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    value: new Date(2026, 0, 15),
    // Jan 15, 2026
    placeholder: 'Select a date...'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    locale: 'en-GB',
    value: new Date(2026, 0, 15)
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <DatePickerWithState {...args} />,
  args: {
    locale: 'ja-JP',
    value: new Date(2026, 0, 15)
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: new Date()
  }
}`,...n.parameters?.docs?.source}}};const v=["Default","PreselectedDate","UKLocale","JapaneseLocale","Disabled"];export{r as Default,n as Disabled,o as JapaneseLocale,t as PreselectedDate,s as UKLocale,v as __namedExportsOrder,j as default};
