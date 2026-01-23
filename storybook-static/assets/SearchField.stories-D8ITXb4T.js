import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{R as n}from"./iframe-DeqXgmUH.js";import{S as r}from"./SearchField-DTIY_D1C.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const h={title:"Components/SearchField",component:r,args:{placeholder:"Search...",size:"md",clearable:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},clearable:{control:"boolean"},placeholder:{control:"text"}}},a={render:l=>{const[o,t]=n.useState("");return e.jsx(r,{...l,value:o,onChange:c=>t(c)})}},s={render:()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = React.useState('');
    return <SearchField {...args} value={val} onChange={v => setVal(v)} />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 items-center">
      <SearchField size="sm" placeholder="Small" />
      <SearchField size="md" placeholder="Medium" />
      <SearchField size="lg" placeholder="Large" />
    </div>
}`,...s.parameters?.docs?.source}}};const g=["Playground","Sizes"];export{a as Playground,s as Sizes,g as __namedExportsOrder,h as default};
