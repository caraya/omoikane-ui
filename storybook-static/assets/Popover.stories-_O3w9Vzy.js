import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{R as c}from"./iframe-DeqXgmUH.js";import{P as l}from"./Popover-CYH3571o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";import"./cn-fNskMoFt.js";const v={title:"Components/Popover",component:l,args:{placement:"bottom",align:"center",offset:8,showArrow:!0},argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right"]},align:{control:{type:"select"},options:["start","center","end"]},offset:{control:{type:"number",min:0,max:64,step:1}},showArrow:{control:"boolean"}}},r={render:o=>{const t=c.createRef(),[s,n]=c.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx("button",{ref:t,className:"px-3 py-2 bg-gray-200 rounded",onClick:()=>n(p=>!p),children:"Toggle Popover"}),e.jsx(l,{isOpen:s,anchorRef:t,onClose:()=>n(!1),placement:o.placement,align:o.align,offset:o.offset,showArrow:o.showArrow,children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"text-sm",children:"This is a popover."}),e.jsx("button",{className:"px-2 py-1 bg-blue-500 text-white rounded",onClick:()=>alert("clicked"),children:"Action"})]})})]})}},a={render:()=>{const o=c.createRef(),[t,s]=c.useState(!1);return e.jsxs("div",{className:"p-8 flex gap-4 items-start",children:[e.jsx("button",{ref:o,className:"px-3 py-2 bg-gray-200 rounded",onClick:()=>s(n=>!n),children:"Toggle Popover"}),e.jsx(l,{isOpen:t,anchorRef:o,onClose:()=>s(!1),placement:"bottom",align:"start",children:e.jsx("div",{className:"p-2",children:"Bottom / start"})}),e.jsx(l,{isOpen:t,anchorRef:o,onClose:()=>s(!1),placement:"bottom",align:"center",children:e.jsx("div",{className:"p-2",children:"Bottom / center"})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const ref = React.createRef<HTMLButtonElement>();
    const [open, setOpen] = React.useState(false);
    return <div className="p-8">
        <button ref={ref} className="px-3 py-2 bg-gray-200 rounded" onClick={() => setOpen(s => !s)}>
          Toggle Popover
        </button>

        <Popover isOpen={open} anchorRef={ref} onClose={() => setOpen(false)} placement={args.placement} align={args.align} offset={args.offset} showArrow={args.showArrow}>
          <div className="flex flex-col gap-2">
            <div className="text-sm">This is a popover.</div>
            <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => alert('clicked')}>Action</button>
          </div>
        </Popover>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = React.createRef<HTMLButtonElement>();
    const [open, setOpen] = React.useState(false);
    return <div className="p-8 flex gap-4 items-start">
        <button ref={ref} className="px-3 py-2 bg-gray-200 rounded" onClick={() => setOpen(s => !s)}>
          Toggle Popover
        </button>

        <Popover isOpen={open} anchorRef={ref} onClose={() => setOpen(false)} placement="bottom" align="start">
          <div className="p-2">Bottom / start</div>
        </Popover>

        <Popover isOpen={open} anchorRef={ref} onClose={() => setOpen(false)} placement="bottom" align="center">
          <div className="p-2">Bottom / center</div>
        </Popover>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const h=["Playground","Variants"];export{r as Playground,a as Variants,h as __namedExportsOrder,v as default};
