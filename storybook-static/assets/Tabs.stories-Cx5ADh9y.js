import{j as a}from"./jsx-runtime-DwZrPTBh.js";import{r as d}from"./iframe-DeqXgmUH.js";import{T as e}from"./Tabs-COiuaFRT.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/Tabs",component:e},s=()=>a.jsxs(e,{defaultIndex:0,children:[a.jsxs(e.List,{className:"flex gap-2 border-b",children:[a.jsx(e.Tab,{index:0,className:"px-4 py-2",children:"First"}),a.jsx(e.Tab,{index:1,className:"px-4 py-2",children:"Second"}),a.jsx(e.Tab,{index:2,className:"px-4 py-2",children:"Third"})]}),a.jsxs(e.Panels,{children:[a.jsx(e.Panel,{index:0,className:"p-4",children:"Content for first tab."}),a.jsx(e.Panel,{index:1,className:"p-4",children:"Content for second tab."}),a.jsx(e.Panel,{index:2,className:"p-4",children:"Content for third tab."})]})]}),n=r=>{const[l,t]=d.useState(r.initial??0);return a.jsxs(e,{value:l,onChange:t,children:[a.jsxs(e.List,{className:"flex gap-2 border-b",children:[a.jsx(e.Tab,{index:0,className:"px-4 py-2",children:"First"}),a.jsx(e.Tab,{index:1,className:"px-4 py-2",children:"Second"}),a.jsx(e.Tab,{index:2,className:"px-4 py-2",children:"Third"})]}),a.jsxs(e.Panels,{children:[a.jsxs(e.Panel,{index:0,className:"p-4",children:["Controlled content A (index ",l,")"]}),a.jsxs(e.Panel,{index:1,className:"p-4",children:["Controlled content B (index ",l,")"]}),a.jsxs(e.Panel,{index:2,className:"p-4",children:["Controlled content C (index ",l,")"]})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Controlled",props:{initial:{required:!1,tsType:{name:"number"},description:""}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Tabs defaultIndex={0}>
    <Tabs.List className="flex gap-2 border-b">
      <Tabs.Tab index={0} className="px-4 py-2">First</Tabs.Tab>
      <Tabs.Tab index={1} className="px-4 py-2">Second</Tabs.Tab>
      <Tabs.Tab index={2} className="px-4 py-2">Third</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panels>
      <Tabs.Panel index={0} className="p-4">Content for first tab.</Tabs.Panel>
      <Tabs.Panel index={1} className="p-4">Content for second tab.</Tabs.Panel>
      <Tabs.Panel index={2} className="p-4">Content for third tab.</Tabs.Panel>
    </Tabs.Panels>
  </Tabs>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: {
  initial?: number;
}) => {
  const [index, setIndex] = useState<number>(args.initial ?? 0);
  return <Tabs value={index} onChange={setIndex}>
      <Tabs.List className="flex gap-2 border-b">
        <Tabs.Tab index={0} className="px-4 py-2">First</Tabs.Tab>
        <Tabs.Tab index={1} className="px-4 py-2">Second</Tabs.Tab>
        <Tabs.Tab index={2} className="px-4 py-2">Third</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel index={0} className="p-4">Controlled content A (index {index})</Tabs.Panel>
        <Tabs.Panel index={1} className="p-4">Controlled content B (index {index})</Tabs.Panel>
        <Tabs.Panel index={2} className="p-4">Controlled content C (index {index})</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>;
}`,...n.parameters?.docs?.source}}};const p=["Default","Controlled"];export{n as Controlled,s as Default,p as __namedExportsOrder,b as default};
