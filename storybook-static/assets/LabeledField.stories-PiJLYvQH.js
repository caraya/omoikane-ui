import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{r as p}from"./iframe-DeqXgmUH.js";import{L as n}from"./LabeledField-C5U8SrXG.js";import{T as d}from"./TextField-CT8mfHUG.js";import{S as u,O as i}from"./Dropdown-B3tVJYXb.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./Icon-_gxIiYjr.js";import"./WarningCircle.es-CwOGlcg4.js";import"./IconBase.es-BPXsrtLd.js";import"./Typography-C6JgP99u.js";import"./CaretDown.es-Di0rEdCy.js";const T={title:"Components/LabeledField",component:n,tags:["autodocs"],argTypes:{label:{control:"text"},description:{control:"text"},errorMessage:{control:"text"},required:{control:"boolean"}}},r={args:{label:"Email Address",description:"We'll never share your email with anyone else.",field:e.jsx("input",{className:"w-full h-10 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none",placeholder:"example@domain.com"})}},a={render:t=>e.jsx(n,{...t,label:"Username",field:e.jsx(d,{placeholder:"Enter unique username"})})},s={args:{label:"Password",required:!0,errorMessage:"Password must be at least 8 characters long.",field:e.jsx(d,{type:"password",error:"true"})}},o={render:()=>{const[t,c]=p.useState(null);return e.jsx("div",{className:"h-64",children:e.jsx(n,{label:"Select Role",description:"Choose the permission level for this user",field:e.jsxs(u,{selectedValue:t,onChange:m=>c(m),placeholder:"Select a role...",children:[e.jsx(i,{label:"Admin",value:"admin"}),e.jsx(i,{label:"Editor",value:"editor"}),e.jsx(i,{label:"Viewer",value:"viewer"})]})})})}},l={args:{label:"Bio",labelAccessory:e.jsx("span",{className:"italic text-gray-400",children:"Optional"}),footer:"Max 140 characters.",field:e.jsx("textarea",{className:"w-full border border-gray-300 rounded p-2 text-sm",rows:4})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    description: "We'll never share your email with anyone else.",
    field:
    // Using a "Raw" input to show it works with standard HTML elements
    <input className="w-full h-10 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="example@domain.com" />
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <LabeledField {...args} label="Username" field={
  // When using with our TextField, we don't pass 'label' to TextField 
  // to avoid duplication. LabeledField handles the layout.
  <TextField placeholder="Enter unique username" />} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    required: true,
    errorMessage: "Password must be at least 8 characters long.",
    field: <TextField type="password" error="true" />
    // Note: We might need to manually trigger the visual error state on the child 
    // if it doesn't infer it solely from aria-invalid.
    // But LabeledField handles the message display.
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [role, setRole] = useState<string | null>(null);
    return <div className="h-64">
                <LabeledField label="Select Role" description="Choose the permission level for this user" field={<SingleSelect selectedValue={role} onChange={val => setRole(val)} placeholder="Select a role...">
                            <OptionItem label="Admin" value="admin" />
                            <OptionItem label="Editor" value="editor" />
                            <OptionItem label="Viewer" value="viewer" />
                        </SingleSelect>} />
            </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    labelAccessory: <span className="italic text-gray-400">Optional</span>,
    footer: "Max 140 characters.",
    field: <textarea className="w-full border border-gray-300 rounded p-2 text-sm" rows={4} />
  }
}`,...l.parameters?.docs?.source}}};const W=["Basic","WithTextField","WithError","WithDropdown","ComplexAccessory"];export{r as Basic,l as ComplexAccessory,o as WithDropdown,s as WithError,a as WithTextField,W as __namedExportsOrder,T as default};
