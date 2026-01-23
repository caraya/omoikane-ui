import{j as n}from"./jsx-runtime-DwZrPTBh.js";import{B as i}from"./ButtonGroup-UvN1Dh8M.js";import{B as r}from"./Button-DveoISW4.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const g={title:"Components/ButtonGroup",component:i,tags:["autodocs"],argTypes:{spacing:{control:"number",description:"Gap between buttons. 0 joins them."},variant:{control:"select",options:["primary","secondary","tertiary","destructive"]},size:{control:"select",options:["sm","md","lg"]}}},e={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"Left"}),n.jsx(r,{children:"Middle"}),n.jsx(r,{children:"Right"})]}),spacing:0,variant:"secondary"}},t={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"Year"}),n.jsx(r,{children:"Month"}),n.jsx(r,{children:"Week"})]}),spacing:0,variant:"primary"}},a={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"Save Changes"}),n.jsx(r,{variant:"secondary",children:"Cancel"})]}),spacing:4}},s={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"B"}),n.jsx(r,{children:"I"}),n.jsx(r,{children:"U"})]}),spacing:0,size:"sm",variant:"secondary"}},o={args:{children:n.jsxs(n.Fragment,{children:[n.jsx(r,{children:"Standard"}),n.jsx(r,{variant:"destructive",children:"Delete"})]}),spacing:0,variant:"secondary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </>,
    spacing: 0,
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
            <Button>Year</Button>
            <Button>Month</Button>
            <Button>Week</Button>
        </>,
    spacing: 0,
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
              <Button>Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
          </>,
    spacing: 4
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
            <Button>B</Button>
            <Button>I</Button>
            <Button>U</Button>
        </>,
    spacing: 0,
    size: 'sm',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
              <Button>Standard</Button>
              <Button variant="destructive">Delete</Button>
          </>,
    spacing: 0,
    variant: 'secondary' // This acts as a default
  }
}`,...o.parameters?.docs?.source}}};const h=["Joined","PrimaryJoined","Spaced","SmallJoined","MixedVariants"];export{e as Joined,o as MixedVariants,t as PrimaryJoined,s as SmallJoined,a as Spaced,h as __namedExportsOrder,g as default};
