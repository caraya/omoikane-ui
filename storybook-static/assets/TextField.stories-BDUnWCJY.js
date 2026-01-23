import{T as t}from"./TextField-CT8mfHUG.js";import"./jsx-runtime-DwZrPTBh.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./Typography-C6JgP99u.js";const c={title:"Components/TextField",component:t,tags:["autodocs"],args:{placeholder:"Enter text here...",fullWidth:!1}},e={args:{label:"Username"}},r={args:{label:"Email",type:"email",description:"We will never share your email."}},a={args:{label:"Password",type:"password",defaultValue:"123",error:"Password is too weak"}},s={args:{label:"Disabled Input",disabled:!0,defaultValue:"Cannot edit this"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    description: 'We will never share your email.'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    defaultValue: '123',
    error: 'Password is too weak'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    disabled: true,
    defaultValue: 'Cannot edit this'
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","WithDescription","WithError","Disabled"];export{e as Default,s as Disabled,r as WithDescription,a as WithError,m as __namedExportsOrder,c as default};
