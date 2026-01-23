import{j as a}from"./jsx-runtime-DwZrPTBh.js";import{S as l}from"./SidebarLayout-COonem4k.js";import{T as s}from"./Tabs-COiuaFRT.js";import{T as n}from"./Toolbar-DV3Kd1-d.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./CustomGrid-jAHPB5rM.js";const x={title:"Molecules/SidebarLayout",component:l},e={args:{sidebar:a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold",children:"Navigation"}),a.jsxs("ul",{className:"mt-2 space-y-2",children:[a.jsx("li",{className:"text-sm",children:"Overview"}),a.jsx("li",{className:"text-sm",children:"Reports"}),a.jsx("li",{className:"text-sm",children:"Settings"})]})]}),toolbar:a.jsx(n.Group,{children:a.jsx(n.Button,{children:"New"})}),tabs:a.jsxs(s,{defaultIndex:0,children:[a.jsxs(s.List,{className:"flex gap-2",children:[a.jsx(s.Tab,{index:0,className:"px-3 py-1 rounded bg-gray-100",children:"Tab A"}),a.jsx(s.Tab,{index:1,className:"px-3 py-1 rounded",children:"Tab B"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{index:0,children:"Panel A content"}),a.jsx(s.Panel,{index:1,children:"Panel B content"})]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: <div>
        <p className="font-semibold">Navigation</p>
        <ul className="mt-2 space-y-2">
          <li className="text-sm">Overview</li>
          <li className="text-sm">Reports</li>
          <li className="text-sm">Settings</li>
        </ul>
      </div>,
    toolbar: <Toolbar.Group>
        <Toolbar.Button>New</Toolbar.Button>
      </Toolbar.Group>,
    tabs: <Tabs defaultIndex={0}>
        <Tabs.List className="flex gap-2">
          <Tabs.Tab index={0} className="px-3 py-1 rounded bg-gray-100">Tab A</Tabs.Tab>
          <Tabs.Tab index={1} className="px-3 py-1 rounded">Tab B</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel index={0}>Panel A content</Tabs.Panel>
          <Tabs.Panel index={1}>Panel B content</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
  }
}`,...e.parameters?.docs?.source}}};const p=["Playground"];export{e as Playground,p as __namedExportsOrder,x as default};
