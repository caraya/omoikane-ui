import{j as o}from"./jsx-runtime-DwZrPTBh.js";import{R as a}from"./iframe-DeqXgmUH.js";import{P as s}from"./ProgressSpinner-CtS0cGri.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const g={title:"Components/ProgressSpinner",component:s,args:{size:36,thickness:3.5,variant:"default"},argTypes:{size:{control:{type:"number",min:8,max:120,step:1}},thickness:{control:{type:"number",min:1,max:12,step:.5}},variant:{control:{type:"select"},options:["default","neutral","positive","negative","info"]},value:{control:{type:"number",min:0,max:100,step:1}}}},e={render:t=>o.jsx(s,{...t})},r={render:t=>{const[c,m]=a.useState(30);return a.useEffect(()=>{const i=setInterval(()=>m(n=>n>=100?0:n+7),600);return()=>clearInterval(i)},[]),o.jsx(s,{...t,value:c})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ProgressSpinner {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [v, setV] = React.useState(30);
    React.useEffect(() => {
      const t = setInterval(() => setV(s => s >= 100 ? 0 : s + 7), 600);
      return () => clearInterval(t);
    }, []);
    return <ProgressSpinner {...args} value={v} />;
  }
}`,...r.parameters?.docs?.source}}};const f=["Indeterminate","Determinate"];export{r as Determinate,e as Indeterminate,f as __namedExportsOrder,g as default};
