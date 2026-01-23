import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{C as s}from"./Clickable-DW0BHfwC.js";import{o as u}from"./User.es-Dyvv3N-3.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./IconBase.es-BPXsrtLd.js";const N={title:"Components/Clickable",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={render:r=>e.jsx(s,{...r,className:"bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 active:scale-95 transition-all",children:"Click Me"})},t={render:r=>e.jsxs(s,{...r,className:"flex gap-2 items-center bg-gray-100 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-200 active:bg-gray-300 transition-all",children:[e.jsx(u,{size:20}),e.jsx("span",{children:"Profile"})]})},l={render:r=>e.jsx(s,{...r,href:"https://example.com",className:"text-blue-600 underline hover:text-blue-800",target:"_blank",children:"This is a link"})},i={render:r=>e.jsx(s,{...r,className:"p-4 border-2 rounded-lg transition-all w-64 text-center select-none",children:({hovered:b,pressed:m,focused:g})=>{let c="bg-white",a="border-gray-200",d="Interact with me";return m?(c="bg-blue-100",a="border-blue-500 scale-95",d="Pressed!"):b&&(c="bg-gray-50",a="border-gray-400",d="Hovering..."),g&&(a+=" ring-2 ring-blue-300"),e.jsxs("div",{className:`${c} ${a} h-full w-full p-2 transition-all rounded`,children:[e.jsx("p",{className:"font-bold text-gray-700",children:d}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["State: ",JSON.stringify({hovered:b,pressed:m,focused:g})]})]})}})},o={args:{disabled:!0},render:r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...r,className:"bg-blue-600 text-white px-4 py-2 rounded font-medium",children:"Disabled Button"}),e.jsx(s,{...r,href:"#",className:"text-blue-600 underline",children:"Disabled Link"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Clickable {...args} className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 active:scale-95 transition-all">
      Click Me
    </Clickable>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Clickable {...args} className="flex gap-2 items-center bg-gray-100 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-200 active:bg-gray-300 transition-all">
        <UserIcon size={20} />
        <span>Profile</span>
      </Clickable>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Clickable {...args} href="https://example.com" className="text-blue-600 underline hover:text-blue-800" target="_blank">
      This is a link
    </Clickable>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Clickable {...args} className="p-4 border-2 rounded-lg transition-all w-64 text-center select-none">
      {({
      hovered,
      pressed,
      focused
    }) => {
      let bgClass = "bg-white";
      let borderClass = "border-gray-200";
      let text = "Interact with me";
      if (pressed) {
        bgClass = "bg-blue-100";
        borderClass = "border-blue-500 scale-95";
        text = "Pressed!";
      } else if (hovered) {
        bgClass = "bg-gray-50";
        borderClass = "border-gray-400";
        text = "Hovering...";
      }
      if (focused) {
        borderClass += " ring-2 ring-blue-300";
      }
      return <div className={\`\${bgClass} \${borderClass} h-full w-full p-2 transition-all rounded\`}>
                <p className="font-bold text-gray-700">{text}</p>
                <p className="text-xs text-gray-500 mt-1">
                    State: {JSON.stringify({
            hovered,
            pressed,
            focused
          })}
                </p>
             </div>;
    }}
    </Clickable>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="flex gap-4">
        <Clickable {...args} className="bg-blue-600 text-white px-4 py-2 rounded font-medium">
            Disabled Button
        </Clickable>
        
        <Clickable {...args} href="#" className="text-blue-600 underline">
            Disabled Link
        </Clickable>
    </div>
}`,...o.parameters?.docs?.source}}};const v=["Basic","WithIcon","AsLink","StateFunctionChild","Disabled"];export{l as AsLink,n as Basic,o as Disabled,i as StateFunctionChild,t as WithIcon,v as __namedExportsOrder,N as default};
