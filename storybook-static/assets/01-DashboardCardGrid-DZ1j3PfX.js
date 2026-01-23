import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{useMDXComponents as s}from"./index-CDlax2gF.js";import{M as i}from"./blocks-CukJbebj.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";function n(o){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Molecules/DashboardCardGrid"}),`
`,e.jsx(r.h1,{id:"dashboardcardgrid",children:"DashboardCardGrid"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"DashboardCardGrid"})," is a medium-level molecule composed from smaller primitives: ",e.jsx(r.code,{children:"CustomGrid"}),", ",e.jsx(r.code,{children:"Card"}),", ",e.jsx(r.code,{children:"Toolbar"}),", and ",e.jsx(r.code,{children:"Popover"}),"."]}),`
`,e.jsx(r.p,{children:"It demonstrates composition patterns for dashboards or admin consoles where tiles have actions, can be placed precisely using grid coordinates, and may expose secondary UI (popovers) for details or actions."}),`
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Precise placement via ",e.jsx(r.code,{children:"col"}),", ",e.jsx(r.code,{children:"row"}),", ",e.jsx(r.code,{children:"colSpan"}),", ",e.jsx(r.code,{children:"rowSpan"})," on card descriptors."]}),`
`,e.jsxs(r.li,{children:["Responsive column behavior: collapses to 1 column on narrow viewports, 2 columns on medium screens, and honors the ",e.jsx(r.code,{children:"columns"})," prop on larger viewports."]}),`
`,e.jsxs(r.li,{children:["Accessible interactions:",`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"A skip link is provided to jump to the dashboard area."}),`
`,e.jsxs(r.li,{children:["Action buttons announce they open a dialog via ",e.jsx(r.code,{children:'aria-haspopup="dialog"'})," and are linked with ",e.jsx(r.code,{children:"aria-controls"}),"."]}),`
`,e.jsxs(r.li,{children:["The molecule uses the ",e.jsx(r.code,{children:"Popover"})," primitive which focuses the popover panel when opened and handles ",e.jsx(r.code,{children:"Escape"})," to close."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"composition-pattern",children:"Composition Pattern"}),`
`,e.jsxs(r.p,{children:["Use ",e.jsx(r.code,{children:"DashboardCardGrid"})," when you want a plug-and-play dashboard surface where cards may be rearranged by data (server-driven placement) or where certain cards need explicit placement without creating empty DOM rows."]}),`
`,e.jsxs(r.p,{children:["Basic usage is covered in the story ",e.jsx(r.code,{children:"Molecules/DashboardCardGrid/Playground"})," which provides interactive knobs for columns, gap, and cards."]}),`
`,e.jsx(r.hr,{})]})}function m(o={}){const{wrapper:r}={...s(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{m as default};
