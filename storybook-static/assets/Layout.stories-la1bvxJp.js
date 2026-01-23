import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{R as a,S as d,a as u,C as c}from"./Layout-CIfYEHzz.js";import{B as r}from"./Button-DveoISW4.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const B={title:"Components/Layout",component:a,tags:["autodocs"],argTypes:{}},o={render:()=>e.jsxs(a,{className:"bg-gray-50 p-4 rounded gap-2",children:[e.jsx(r,{children:"Left"}),e.jsx(d,{}),e.jsx(r,{children:"Right"})]})},n={render:()=>e.jsxs(a,{className:"bg-gray-50 p-4 rounded",children:[e.jsx(r,{children:"First"}),e.jsx(u,{size:32}),e.jsx(r,{children:"Second"})]})},s={render:()=>e.jsxs(c,{className:"bg-gray-50 p-4 rounded gap-2 w-48",children:[e.jsx(r,{children:"Top"}),e.jsx(d,{}),e.jsx(r,{children:"Bottom"})]})},t={render:()=>e.jsxs(a,{className:"bg-gray-50 p-4 rounded gap-2",children:[e.jsxs(c,{className:"gap-2",children:[e.jsx(r,{children:"Col 1"}),e.jsx(r,{children:"Col 2"})]}),e.jsx(d,{}),e.jsxs(c,{className:"gap-2",children:[e.jsx(r,{children:"Col 3"}),e.jsx(r,{children:"Col 4"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Row className="bg-gray-50 p-4 rounded gap-2">
            <Button>Left</Button>
            <Spring />
            <Button>Right</Button>
        </Row>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Row className="bg-gray-50 p-4 rounded">
            <Button>First</Button>
            <Strut size={32} />
            <Button>Second</Button>
        </Row>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Column className="bg-gray-50 p-4 rounded gap-2 w-48">
            <Button>Top</Button>
            <Spring />
            <Button>Bottom</Button>
        </Column>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Row className="bg-gray-50 p-4 rounded gap-2">
            <Column className="gap-2">
                <Button>Col 1</Button>
                <Button>Col 2</Button>
            </Column>
            <Spring />
            <Column className="gap-2">
                <Button>Col 3</Button>
                <Button>Col 4</Button>
            </Column>
        </Row>
}`,...t.parameters?.docs?.source}}};const j=["RowExample","StrutExample","ColumnExample","NestedLayout"];export{s as ColumnExample,t as NestedLayout,o as RowExample,n as StrutExample,j as __namedExportsOrder,B as default};
