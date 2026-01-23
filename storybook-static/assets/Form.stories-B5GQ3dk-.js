import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{F as n,a as i}from"./Form-QC9QMuN7.js";import{T as a}from"./TextField-CT8mfHUG.js";import{B as r}from"./Button-DveoISW4.js";import{B as l}from"./ButtonGroup-UvN1Dh8M.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./Typography-C6JgP99u.js";const y={title:"Components/Form",component:n,tags:["autodocs"],argTypes:{gap:{control:"number",description:"Gap between form elements"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Email",placeholder:"user@example.com",type:"email",fullWidth:!0}),e.jsx(a,{label:"Password",type:"password",fullWidth:!0}),e.jsxs(l,{children:[e.jsx(r,{type:"submit",variant:"primary",children:"Log In"}),e.jsx(r,{variant:"tertiary",children:"Forgot Password?"})]})]}),className:"max-w-sm border p-6 rounded-lg shadow-sm"}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"Personal Information",description:"Basic identification details.",children:[e.jsx(a,{label:"First Name",placeholder:"Jane",fullWidth:!0}),e.jsx(a,{label:"Last Name",placeholder:"Doe",fullWidth:!0})]}),e.jsxs(i,{title:"Account Security",description:"Keep your account safe.",children:[e.jsx(a,{label:"New Password",type:"password",fullWidth:!0}),e.jsx(a,{label:"Confirm Password",type:"password",fullWidth:!0})]}),e.jsx("div",{className:"pt-2",children:e.jsxs(l,{spacing:4,children:[e.jsx(r,{type:"submit",variant:"primary",children:"Save Changes"}),e.jsx(r,{variant:"secondary",children:"Cancel"})]})})]}),className:"max-w-md"}},o={args:{gap:2,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Search",placeholder:"Search documentation...",fullWidth:!0}),e.jsx(r,{type:"submit",variant:"primary",className:"w-full",children:"Go"})]}),className:"max-w-xs"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
            <TextField label="Email" placeholder="user@example.com" type="email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <ButtonGroup>
                <Button type="submit" variant="primary">Log In</Button>
                <Button variant="tertiary">Forgot Password?</Button>
            </ButtonGroup>
        </>,
    className: 'max-w-sm border p-6 rounded-lg shadow-sm'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
             <FormSection title="Personal Information" description="Basic identification details.">
                <TextField label="First Name" placeholder="Jane" fullWidth />
                <TextField label="Last Name" placeholder="Doe" fullWidth />
             </FormSection>

             <FormSection title="Account Security" description="Keep your account safe.">
                <TextField label="New Password" type="password" fullWidth />
                <TextField label="Confirm Password" type="password" fullWidth />
             </FormSection>

             <div className="pt-2">
                <ButtonGroup spacing={4}>
                    <Button type="submit" variant="primary">Save Changes</Button>
                    <Button variant="secondary">Cancel</Button>
                </ButtonGroup>
             </div>
        </>,
    className: 'max-w-md'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 2,
    children: <>
              <TextField label="Search" placeholder="Search documentation..." fullWidth />
              <Button type="submit" variant="primary" className="w-full">Go</Button>
          </>,
    className: 'max-w-xs'
  }
}`,...o.parameters?.docs?.source}}};const w=["BasicLogin","WithSections","CompactForm"];export{t as BasicLogin,o as CompactForm,s as WithSections,w as __namedExportsOrder,y as default};
