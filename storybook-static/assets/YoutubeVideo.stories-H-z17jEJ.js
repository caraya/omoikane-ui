import{j as s}from"./jsx-runtime-DwZrPTBh.js";import{Y as o}from"./YoutubeVideo-BJf-QKQY.js";import{V as t}from"./View-DGPoV6Aa.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const u={title:"Components/Media/YoutubeVideo",component:o,tags:["autodocs"],parameters:{layout:"centered"}},e={args:{videoId:"lyFmdI8LLT4",width:560,height:315}},r={name:"Responsive (Full Width)",render:a=>s.jsx(t,{className:"w-[800px] border border-gray-200 p-4",children:s.jsx(o,{...a,className:"w-full h-auto aspect-video"})}),args:{videoId:"dQw4w9WgXcQ",width:"100%",height:"100%"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    videoId: 'lyFmdI8LLT4',
    // The ID from the user's example
    width: 560,
    height: 315
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Responsive (Full Width)',
  render: args => <View className="w-[800px] border border-gray-200 p-4">
        {/* Aspect Ratio Trick or class */}
        <YoutubeVideo {...args} className="w-full h-auto aspect-video" />
    </View>,
  args: {
    videoId: 'dQw4w9WgXcQ',
    width: '100%',
    height: '100%'
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","Responsive"];export{e as Default,r as Responsive,l as __namedExportsOrder,u as default};
