import{j as t}from"./jsx-runtime-DwZrPTBh.js";import{c as a}from"./cn-fNskMoFt.js";const u={small:16,medium:24,large:48,xlarge:96},d=({icon:e,color:r="currentColor",backgroundColor:i,size:c="small",className:o,style:m,...l})=>{const n=u[c],s={display:"inline-flex",alignItems:"center",justifyContent:"center",width:n,height:n,backgroundColor:i,color:r,...m};if(typeof e=="function"||typeof e=="object"){const p=e;return t.jsx("span",{className:a("inline-flex items-center justify-center shrink-0",o),style:s,...l,children:t.jsx(p,{size:n,color:r,weight:"regular",style:{display:"block"}})})}return typeof e=="string"?t.jsx("span",{className:a("inline-flex items-center justify-center shrink-0",o),style:s,...l,children:t.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:e,fill:r==="currentColor"?"currentColor":r})})}):null};d.__docgenInfo={description:`An Icon component modeled after wonder-blocks-icon.
Supports Phosphor Icons (passed as components) or raw SVG paths.
Allows customizing color and background color.`,methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"union",raw:"ComponentType<any> | string",elements:[{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},{name:"string"}]},description:`The icon to render. Can be:
1. A generic React Component (like @phosphor-icons/react icons)
2. An SVG path string`},color:{required:!1,tsType:{name:"string"},description:`The color of the icon.
Defaults to 'currentColor'.`,defaultValue:{value:"'currentColor'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:`The background color of the icon container.
Defaults to 'transparent'.`},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:`The size of the icon.
- small: 16px
- medium: 24px
- large: 48px
- xlarge: 96px`,defaultValue:{value:"'small'",computed:!1}}}};export{d as I};
