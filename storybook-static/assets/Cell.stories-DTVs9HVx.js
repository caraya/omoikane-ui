import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{C as t,D as a}from"./Cell-CKDM8_4M.js";import{e as s}from"./CaretRight.es-CP-fpp5F.js";import{e as c}from"./Info.es-Cya3ISZK.js";import{o as l}from"./User.es-Dyvv3N-3.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./IconBase.es-BPXsrtLd.js";const x={title:"Components/Cell",component:t,tags:["autodocs"]},r={render:o=>e.jsxs("div",{className:"w-[320px] border border-gray-200 rounded-md overflow-hidden bg-gray-100",children:[e.jsx(t,{...o}),e.jsx(t,{title:"Selecting an item",active:!0}),e.jsx(t,{title:"With accessories",leftAccessory:e.jsx(l,{size:20}),rightAccessory:e.jsx(s,{size:16})}),e.jsx(t,{title:"Disabled cell",disabled:!0,rightAccessory:e.jsx(s,{size:16})})]}),args:{title:"Basic Compact Cell",rightAccessory:e.jsx(s,{size:16})}},i={render:o=>e.jsxs("div",{className:"w-[320px] border border-gray-200 rounded-md overflow-hidden bg-gray-100",children:[e.jsx(a,{...o}),e.jsx(a,{title:"Article Title",subtitle2:"This is a description or preview of the content that appears below the title.",rightAccessory:e.jsx(s,{size:16})}),e.jsx(a,{title:"User Profile",subtitle1:"ADMINISTRATOR",subtitle2:"Last active: 2 hours ago",leftAccessory:e.jsx(l,{size:32,className:"text-gray-400"}),rightAccessory:e.jsx(c,{size:20})})]}),args:{title:"Detail Cell Title",subtitle2:"Subtitle appears below",rightAccessory:e.jsx(s,{size:16})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[320px] border border-gray-200 rounded-md overflow-hidden bg-gray-100">
      <CompactCell {...args} />
      <CompactCell title="Selecting an item" active />
      <CompactCell title="With accessories" leftAccessory={<UserIcon size={20} />} rightAccessory={<CaretRightIcon size={16} />} />
      <CompactCell title="Disabled cell" disabled rightAccessory={<CaretRightIcon size={16} />} />
    </div>,
  args: {
    title: 'Basic Compact Cell',
    rightAccessory: <CaretRightIcon size={16} />
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[320px] border border-gray-200 rounded-md overflow-hidden bg-gray-100">
      <DetailCell {...args} />
      <DetailCell title="Article Title" subtitle2="This is a description or preview of the content that appears below the title." rightAccessory={<CaretRightIcon size={16} />} />
      <DetailCell title="User Profile" subtitle1="ADMINISTRATOR" subtitle2="Last active: 2 hours ago" leftAccessory={<UserIcon size={32} className="text-gray-400" />} rightAccessory={<InfoIcon size={20} />} />
    </div>,
  args: {
    title: 'Detail Cell Title',
    subtitle2: 'Subtitle appears below',
    rightAccessory: <CaretRightIcon size={16} />
  }
}`,...i.parameters?.docs?.source}}};const y=["Compact","Detail"];export{r as Compact,i as Detail,y as __namedExportsOrder,x as default};
