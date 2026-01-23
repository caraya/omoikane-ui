import{j as t}from"./jsx-runtime-DwZrPTBh.js";import{r}from"./iframe-DeqXgmUH.js";import{T as e}from"./Toast-xbmG3XKg.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const h={title:"Components/Toast",component:e,argTypes:{position:{control:{type:"select"},options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]}}},a=i=>{const[n,s]=r.useState(!0);return t.jsxs("div",{style:{minHeight:200},children:[t.jsx("button",{onClick:()=>s(!0),style:{margin:12},children:"Show Toast"}),t.jsx(e,{position:i.position,visible:n,onClose:()=>s(!1),children:t.jsxs("div",{children:[t.jsx("strong",{children:"Notification"}),t.jsx("div",{className:"text-xs",children:"Click to dismiss"})]})})]})},o=a.bind({});o.args={position:"top-right"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: any) => {
  const [show, setShow] = useState(true);
  return <div style={{
    minHeight: 200
  }}>
      <button onClick={() => setShow(true)} style={{
      margin: 12
    }}>Show Toast</button>
      <Toast position={args.position} visible={show} onClose={() => setShow(false)}>
        <div>
          <strong>Notification</strong>
          <div className="text-xs">Click to dismiss</div>
        </div>
      </Toast>
    </div>;
}`,...o.parameters?.docs?.source}}};const u=["Default"];export{o as Default,u as __namedExportsOrder,h as default};
