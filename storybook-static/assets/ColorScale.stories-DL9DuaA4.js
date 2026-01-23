import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{C as s}from"./ColorScale-BM2SO91I.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Color.js/ColorScale",component:s,tags:["autodocs"],argTypes:{space:{control:"select",options:["srgb","srgb-linear","display-p3","a98-rgb","prophoto-rgb","rec2020","xyz","xyz-d50","xyz-d65","lab","lch","oklab","oklch","hsl","hwb","hsv","hsi"]},steps:{control:{type:"range",min:0,max:20}}}},c=({children:r,...n})=>e.jsxs("div",{style:{padding:20},children:[e.jsxs("div",{className:"mb-4 text-sm text-gray-500 bg-yellow-50 p-2 rounded border border-yellow-200 inline-block",children:["⚠️ Note: This component loads external web components from ",e.jsx("code",{children:"elements.colorjs.io"}),"."]}),e.jsx("div",{className:"mt-4",children:r||e.jsx(s,{...n})})]}),o={render:r=>e.jsx(c,{...r}),args:{colors:["red","blue"],steps:5,space:"oklch"}},a={render:r=>e.jsxs(c,{children:[e.jsxs("div",{className:"mb-4 text-sm text-gray-600",children:["Note: The ",e.jsx("code",{children:"steps"})," prop (",r.steps,") defines the number of intermediate steps generated ",e.jsx("em",{children:"between"})," each provided color keyframe."]}),e.jsx(s,{...r})]}),args:{colors:{Start:"white",Mid:"purple",End:"black"},space:"srgb",steps:3}},t={render:r=>e.jsx(c,{...r}),args:{colors:["red","orange","yellow","green","blue","indigo","violet"],space:"hsl",steps:0}},l={render:()=>e.jsx(c,{children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold mb-2",children:"sRGB Interpolation"}),e.jsx(s,{colors:["red","green"],space:"srgb",steps:10})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold mb-2",children:"OKLCH Interpolation (Perceptually Uniform)"}),e.jsx(s,{colors:["red","green"],space:"oklch",steps:10})]})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ColorScaleWrapper {...args} />,
  args: {
    colors: ['red', 'blue'],
    steps: 5,
    space: 'oklch'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ColorScaleWrapper>
             <div className="mb-4 text-sm text-gray-600">
                Note: The <code>steps</code> prop ({args.steps}) defines the number of intermediate steps generated <em>between</em> each provided color keyframe.
             </div>
             <ColorScale {...args} />
        </ColorScaleWrapper>,
  args: {
    colors: {
      'Start': 'white',
      'Mid': 'purple',
      'End': 'black'
    },
    space: 'srgb',
    steps: 3
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <ColorScaleWrapper {...args} />,
  args: {
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    space: 'hsl',
    steps: 0
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ColorScaleWrapper>
             <div className="space-y-8">
                 <div>
                     <h3 className="font-bold mb-2">sRGB Interpolation</h3>
                     <ColorScale colors={['red', 'green']} space="srgb" steps={10} />
                 </div>
                 <div>
                     <h3 className="font-bold mb-2">OKLCH Interpolation (Perceptually Uniform)</h3>
                     <ColorScale colors={['red', 'green']} space="oklch" steps={10} />
                 </div>
             </div>
        </ColorScaleWrapper>
}`,...l.parameters?.docs?.source}}};const h=["BasicGradient","NamedPoints","Rainbow","InterpolationComparison"];export{o as BasicGradient,l as InterpolationComparison,a as NamedPoints,t as Rainbow,h as __namedExportsOrder,g as default};
