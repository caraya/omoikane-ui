import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{C as p}from"./DashboardCardGrid-N6H7lhDn.js";import{B as c}from"./Button-DveoISW4.js";import"./ButtonGroup-UvN1Dh8M.js";import"./Form-QC9QMuN7.js";import{L as l,C as u,T as x,B as h}from"./Typography-C6JgP99u.js";import"./ColorPicker-CTRFYTG7.js";import"./ColorScale-BM2SO91I.js";import"./ColorSwatch-BS1DPlQJ.js";import"./TextField-CT8mfHUG.js";import"./View-DGPoV6Aa.js";import{r as b,R as f}from"./iframe-DeqXgmUH.js";import{c as g}from"./cn-fNskMoFt.js";import"./index-Bg2guSoB.js";import"./Accordion-Bjkv4oxT.js";import"./Banner-CoxLo0gO.js";import"./DatePicker-D4tWIw4z.js";import"./DateSelect-CV8rjeTi.js";import"./Breadcrumbs-WAu1_Eye.js";import"./Cell-CKDM8_4M.js";import"./Clickable-DW0BHfwC.js";import"./ClientOnly-DjUXWs0c.js";import"./Dropdown-B3tVJYXb.js";import"./Image-BI73kxk2.js";import"./YoutubeVideo-BJf-QKQY.js";import"./Grid-CAWtd5As.js";import"./CustomGrid-jAHPB5rM.js";import"./Icon-_gxIiYjr.js";import"./IconButton-T6UNDwhn.js";import"./LabeledField-C5U8SrXG.js";import"./Layout-CIfYEHzz.js";import"./Link-B19ee1Pd.js";import"./Pill-BK8eSsm0.js";import"./ProgressSpinner-CtS0cGri.js";import"./SearchField-DTIY_D1C.js";import"./Styles-Dh4mBOAK.js";import"./Switch-Lw2qq-Vp.js";import"./Tabs-COiuaFRT.js";import"./Toolbar-DV3Kd1-d.js";import"./Toast-xbmG3XKg.js";import"./SidebarLayout-COonem4k.js";import"./DataTable-BwM0xDhT.js";import"./FormWizard-CxfS7GBH.js";import"./Popover-CYH3571o.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi105ZpR.js";import"./Info.es-Cya3ISZK.js";import"./IconBase.es-BPXsrtLd.js";import"./WarningCircle.es-CwOGlcg4.js";import"./X.es-CDFmT84K.js";import"./CaretRight.es-CP-fpp5F.js";import"./CaretDown.es-Di0rEdCy.js";const y=b.forwardRef(({className:r,label:t,error:s,id:m,...d},n)=>{const a=m||f.useId();return e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("input",{type:"checkbox",id:a,ref:n,className:g("h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500","mt-1",s&&"border-red-500",r),...d}),t&&e.jsx(l,{htmlFor:a,className:"cursor-pointer select-none",children:t})]}),s&&e.jsx(u,{className:"text-red-600 mt-1",children:s})]})});y.displayName="Checkbox";y.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const N=b.forwardRef(({className:r,label:t,error:s,id:m,...d},n)=>{const a=m||f.useId();return e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",id:a,ref:n,className:g("h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500",s&&"border-red-500",r),...d}),t&&e.jsx(l,{htmlFor:a,className:"cursor-pointer select-none",children:t})]}),s&&e.jsx(u,{className:"text-red-600 mt-1",children:s})]})});N.displayName="Radio";N.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ye={title:"Components/Card",component:p,tags:["autodocs"],args:{className:"max-w-sm p-6"}},o={render:r=>e.jsxs(p,{...r,children:[e.jsx(x,{className:"mb-2",children:"Card Title"}),e.jsx(h,{className:"mb-4",children:"This is a basic card component. It can contain any content you like including text, images, and buttons."}),e.jsx(c,{children:"Action"})]}),args:{bordered:!0,shadow:!1}},i={render:r=>e.jsxs(p,{...r,children:[e.jsx(x,{className:"mb-2",children:"Shadow Card"}),e.jsx(h,{className:"mb-4",children:"This card has a drop shadow enabled for extra elevation."}),e.jsxs("div",{className:"flex justify-end bg-gray-50 -m-6 mt-4 p-4 border-t border-gray-100",children:[e.jsx(c,{variant:"secondary",size:"sm",children:"Cancel"}),e.jsx(c,{size:"sm",className:"ml-2",children:"Save"})]})]}),args:{bordered:!0,shadow:!0,className:"max-w-sm p-6"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Title className="mb-2">Card Title</Title>
      <Body className="mb-4">
        This is a basic card component. It can contain any content you like including text, images, and buttons.
      </Body>
      <Button>Action</Button>
    </Card>,
  args: {
    bordered: true,
    shadow: false
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <Title className="mb-2">Shadow Card</Title>
      <Body className="mb-4">
        This card has a drop shadow enabled for extra elevation.
      </Body>
      <div className="flex justify-end bg-gray-50 -m-6 mt-4 p-4 border-t border-gray-100">
         <Button variant="secondary" size="sm">Cancel</Button>
         <Button size="sm" className="ml-2">Save</Button>
      </div>
    </Card>,
  args: {
    bordered: true,
    shadow: true,
    className: 'max-w-sm p-6'
  }
}`,...i.parameters?.docs?.source}}};const Ne=["Default","WithShadow"];export{o as Default,i as WithShadow,Ne as __namedExportsOrder,ye as default};
