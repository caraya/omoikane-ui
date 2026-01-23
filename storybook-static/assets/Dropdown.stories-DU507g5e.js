import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{S as u,O as l,A as m,a as n}from"./Dropdown-B3tVJYXb.js";import{V as i}from"./View-DGPoV6Aa.js";import{r as d}from"./iframe-DeqXgmUH.js";import"./CaretDown.es-Di0rEdCy.js";import"./IconBase.es-BPXsrtLd.js";import"./cn-fNskMoFt.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Components/Dropdown",component:u,tags:["autodocs"],parameters:{layout:"padded"}},t={render:()=>{const[s,c]=d.useState("b");return e.jsx(i,{className:"h-40 w-full max-w-xs",children:e.jsxs(u,{onChange:c,selectedValue:s,placeholder:"Choose a letter",children:[e.jsx(l,{label:"Option A",value:"a"}),e.jsx(l,{label:"Option B",value:"b"}),e.jsx(l,{label:"Option C (Disabled)",value:"c",disabled:!0}),e.jsx(l,{label:"Option D",value:"d"})]})})},name:"Single Select"},a={render:()=>{const[s,c]=d.useState(void 0);return e.jsx(i,{className:"h-40 w-full max-w-xs",children:e.jsxs(u,{onChange:c,selectedValue:s,placeholder:"Select a generic item...",children:[e.jsx(l,{label:"Hydrogen",value:"h"}),e.jsx(l,{label:"Helium",value:"he"}),e.jsx(l,{label:"Lithium",value:"li"})]})})},name:"Single Select (Placeholder)"},o={render:()=>e.jsx(i,{className:"h-40 flex justify-center",children:e.jsxs(m,{menuText:"Actions",children:[e.jsx(n,{label:"Edit File",onClick:()=>alert("Edit")}),e.jsx(n,{label:"Download PDF",onClick:()=>alert("Download")}),e.jsx(n,{label:"Delete",disabled:!0,onClick:()=>alert("Delete")}),e.jsx(n,{label:"Go to Google",href:"https://google.com"})]})}),name:"Action Menu"},r={render:()=>e.jsx(i,{className:"h-40 flex justify-end pr-10",children:e.jsxs(m,{menuText:"User Settings",align:"right",children:[e.jsx(n,{label:"Profile",onClick:()=>{}}),e.jsx(n,{label:"Account",onClick:()=>{}}),e.jsx(n,{label:"Log Out",onClick:()=>{}})]})}),name:"Action Menu (Right Aligned)"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("b");
    return <View className="h-40 w-full max-w-xs">
        <SingleSelect onChange={setValue} selectedValue={value} placeholder="Choose a letter">
          <OptionItem label="Option A" value="a" />
          <OptionItem label="Option B" value="b" />
          <OptionItem label="Option C (Disabled)" value="c" disabled />
          <OptionItem label="Option D" value="d" />
        </SingleSelect>
      </View>;
  },
  name: "Single Select"
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <View className="h-40 w-full max-w-xs">
        <SingleSelect onChange={setValue} selectedValue={value} placeholder="Select a generic item...">
          <OptionItem label="Hydrogen" value="h" />
          <OptionItem label="Helium" value="he" />
          <OptionItem label="Lithium" value="li" />
        </SingleSelect>
      </View>;
  },
  name: "Single Select (Placeholder)"
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <View className="h-40 flex justify-center">
        <ActionMenu menuText="Actions">
          <ActionItem label="Edit File" onClick={() => alert("Edit")} />
          <ActionItem label="Download PDF" onClick={() => alert("Download")} />
          <ActionItem label="Delete" disabled onClick={() => alert("Delete")} />
          <ActionItem label="Go to Google" href="https://google.com" />
        </ActionMenu>
      </View>;
  },
  name: "Action Menu"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <View className="h-40 flex justify-end pr-10">
            <ActionMenu menuText="User Settings" align="right">
                <ActionItem label="Profile" onClick={() => {}} />
                <ActionItem label="Account" onClick={() => {}} />
                <ActionItem label="Log Out" onClick={() => {}} />
            </ActionMenu>
        </View>;
  },
  name: "Action Menu (Right Aligned)"
}`,...r.parameters?.docs?.source}}};const w=["SingleSelectStory","SingleSelectEmpty","ActionMenuStory","ActionMenuRightAligned"];export{r as ActionMenuRightAligned,o as ActionMenuStory,a as SingleSelectEmpty,t as SingleSelectStory,w as __namedExportsOrder,f as default};
