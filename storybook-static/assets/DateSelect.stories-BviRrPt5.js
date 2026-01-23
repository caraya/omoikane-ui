import{j as r}from"./jsx-runtime-DwZrPTBh.js";import{D as m}from"./DateSelect-CV8rjeTi.js";import{r as d}from"./iframe-DeqXgmUH.js";import"./cn-fNskMoFt.js";import"./CaretDown.es-Di0rEdCy.js";import"./IconBase.es-BPXsrtLd.js";import"./preload-helper-PPVm8Dsz.js";const W={title:"Dates/DateSelect",component:m,tags:["autodocs"],argTypes:{minYear:{control:"number"},maxYear:{control:"number"},includeTime:{control:"boolean"},use24HourClock:{control:"boolean"},locale:{control:"select",options:["en-US","es-ES","ja-JP","de-DE"]},disabled:{control:"boolean"}}},a=e=>{const[l,u]=d.useState(e.value||new Date);return r.jsxs("div",{className:"space-y-4",children:[r.jsx(m,{...e,value:l,onChange:u}),r.jsxs("div",{className:"text-sm text-gray-500",children:["Selected: ",r.jsx("span",{className:"font-mono",children:l.toString()})]})]})},s={render:e=>r.jsx(a,{...e})},t={render:e=>r.jsx(a,{...e}),args:{includeTime:!0}},o={render:e=>r.jsx(a,{...e}),args:{includeTime:!0,use24HourClock:!0}},n={render:e=>r.jsx(a,{...e}),args:{minYear:1980,maxYear:2e3,value:new Date(1990,5,15)}},c={render:e=>r.jsx(a,{...e}),args:{locale:"es-ES"}},i={render:e=>r.jsx(a,{...e}),args:{includeTime:!0,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <DateSelectWithState {...args} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <DateSelectWithState {...args} />,
  args: {
    includeTime: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <DateSelectWithState {...args} />,
  args: {
    includeTime: true,
    use24HourClock: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <DateSelectWithState {...args} />,
  args: {
    minYear: 1980,
    maxYear: 2000,
    value: new Date(1990, 5, 15)
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <DateSelectWithState {...args} />,
  args: {
    locale: 'es-ES'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <DateSelectWithState {...args} />,
  args: {
    includeTime: true,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};const b=["Default","WithTime","With24HourClock","CustomYearRange","SpanishLocale","Disabled"];export{n as CustomYearRange,s as Default,i as Disabled,c as SpanishLocale,o as With24HourClock,t as WithTime,b as __namedExportsOrder,W as default};
