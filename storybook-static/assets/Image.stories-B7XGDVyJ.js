import{j as n}from"./jsx-runtime-DwZrPTBh.js";import{I as i}from"./Image-BI73kxk2.js";import{V as m}from"./View-DGPoV6Aa.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";import"./Typography-C6JgP99u.js";const w={title:"Components/Media/Image",component:i,tags:["autodocs"],parameters:{layout:"centered"}},e="https://media.cntraveler.com/photos/654eba2546f22477d424e27e/16:9/w_2580%2Cc_limit/Kylemore-Abbey-Alex%2520Grodkiewicz-hLqJHN01XMU-unsplash.jpg",a={args:{src:e,alt:"Image from Ireland",width:400}},r={args:{src:e,alt:"Image from Ireland",useFigure:!0,width:400}},s={args:{src:e,alt:"Image from Ireland",caption:"Image of Kylemore Abbey in Ireland, photo by Alex Grodkiewicz on Unsplash",width:400}},o={args:{src:e,alt:"Building",width:400,caption:n.jsxs("span",{children:[n.jsx("a",{href:"https://media.cntraveler.com/photos/654eba2546f22477d424e27e/16:9/w_2580%2Cc_limit/Kylemore-Abbey-Alex%2520Grodkiewicz-hLqJHN01XMU-unsplash.jpg",className:"text-blue-600 underline",children:"Original"})," on Unsplash"]})}},t={render:l=>n.jsx(m,{className:"w-[600px] border border-gray-200 p-4",children:n.jsx(i,{...l})}),args:{src:e,alt:"Full width example",caption:"This image scales to fit its container",className:"w-full"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Image from Ireland",
    width: 400
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Image from Ireland",
    useFigure: true,
    width: 400
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Image from Ireland",
    caption: "Image of Kylemore Abbey in Ireland, photo by Alex Grodkiewicz on Unsplash",
    width: 400
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Building",
    width: 400,
    caption: <span>
             <a href="https://media.cntraveler.com/photos/654eba2546f22477d424e27e/16:9/w_2580%2Cc_limit/Kylemore-Abbey-Alex%2520Grodkiewicz-hLqJHN01XMU-unsplash.jpg" className="text-blue-600 underline">Original</a> on Unsplash
          </span>
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <View className="w-[600px] border border-gray-200 p-4"> 
            <Image {...args} />
        </View>,
  args: {
    src: sampleImage,
    alt: "Full width example",
    caption: "This image scales to fit its container",
    className: "w-full"
  }
}`,...t.parameters?.docs?.source}}};const b=["Standalone","Figure","WithCaption","WithComplexCaption","FullWidth"];export{r as Figure,t as FullWidth,a as Standalone,s as WithCaption,o as WithComplexCaption,b as __namedExportsOrder,w as default};
