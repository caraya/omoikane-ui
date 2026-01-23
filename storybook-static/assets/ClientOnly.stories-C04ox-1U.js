import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{C as d}from"./ClientOnly-DjUXWs0c.js";import{B as i,C as o}from"./Typography-C6JgP99u.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const b={title:"Components/ClientOnly",component:d,tags:["autodocs"],parameters:{layout:"centered"}},a=()=>{const s=typeof window<"u"?window.navigator.userAgent:"Server",t=typeof window<"u"?`${window.innerWidth}x${window.innerHeight}`:"Server";return e.jsxs("div",{className:"p-4 border border-green-500 bg-green-50 rounded",children:[e.jsx(i,{children:"I am client only!"}),e.jsxs(o,{className:"block",children:["User Agent: ",s]}),e.jsxs(o,{className:"block",children:["Window: ",t]})]})},r={args:{children:e.jsx(a,{}),fallback:e.jsx("div",{className:"p-4 border border-dashed border-gray-300 rounded text-gray-400",children:"Loading Client Content... (Fallback)"})}},n={args:{children:e.jsx(a,{})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BrowserInfo />,
    fallback: <div className="p-4 border border-dashed border-gray-300 rounded text-gray-400">Loading Client Content... (Fallback)</div>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BrowserInfo />
  }
}`,...n.parameters?.docs?.source}}};const f=["Default","WithoutFallback"];export{r as Default,n as WithoutFallback,f as __namedExportsOrder,b as default};
