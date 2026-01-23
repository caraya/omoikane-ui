import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{useMDXComponents as r}from"./index-CDlax2gF.js";import{M as l}from"./blocks-CukJbebj.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Explainers/Cell vs Card"}),`
`,e.jsx(n.h1,{id:"cell-vs-card",children:"Cell vs Card"}),`
`,e.jsxs(n.p,{children:["Deciding between using a ",e.jsx(n.strong,{children:"Cell"})," or a ",e.jsx(n.strong,{children:"Card"})," depends largely on the density of the information and the relationship of the item to its siblings."]}),`
`,e.jsx(n.h2,{id:"at-a-glance",children:"At a Glance"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Primary Use Cases"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cell:"})," Navigation lists, settings menus, contacts, data rows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Dashboards, feed items, object summaries, media display."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Layout"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cell:"})," Horizontal, single-line or double-line. Highly constrained."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Stacked, flexible height. Box model layout."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Density"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cell:"})," High density. Designed to be stacked tightly."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Medium to Low density. Requires padding and margins."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Interactivity"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cell:"})," Usually the entire area is clickable (navigation)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Can have multiple interactive elements (buttons, links) inside."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Structure"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cell:"})," Leading (Icon) + Content (Title/Sub) + Trailing (Action/Info)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Card:"})," Header, Body, Media, Footer, Actions."]}),`
`]}),`
`,e.jsx(n.h2,{id:"detailed-guidelines",children:"Detailed Guidelines"}),`
`,e.jsx(n.h3,{id:"when-to-use-a-cell",children:"When to use a Cell"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"Cell"})," component when you are presenting a homogeneous list of items where the user scans for a specific entry. Cells are optimized for vertical scanning efficiency."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Navigation"}),": Drill-down menus or navigation drawers."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Settings"}),": Toggles, value selection, or sub-pages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Lists"}),": Lists of users, files, or logs where the metadata is minimal."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Characteristics:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fixed structural regions (Left, Center, Right)."}),`
`,e.jsx(n.li,{children:"Typically full-width or filling a narrow column."}),`
`,e.jsx(n.li,{children:"Separators are common between cells."}),`
`]}),`
`,e.jsx(n.h3,{id:"when-to-use-a-card",children:"When to use a Card"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"Card"})," component when the items are heterogeneous or contain rich content that requires more structure than a simple title/subtitle pair. Cards standout as individual objects."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dashboards"}),": KPIs, charts, or summary widgets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Feeds"}),": Posts, news items, or activity logs with preview images."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Object Details"}),": A profile summary, a product card, or a document preview."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Characteristics:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Visually separated by borders or shadows (elevation)."}),`
`,e.jsx(n.li,{children:"Can contain complex internal layouts (columns, grids)."}),`
`,e.jsx(n.li,{children:"Often arranged in grids (masonry or flexible rows)."}),`
`]}),`
`,e.jsx(n.h2,{id:"key-differences",children:"Key Differences"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Complexity"}),": If you need to put a chart, a large image, or multiple distinct buttons inside the item, use a ",e.jsx(n.strong,{children:"Card"}),". If it's just an icon plus text, use a ",e.jsx(n.strong,{children:"Cell"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grouping"}),": ",e.jsx(n.strong,{children:"Cells"})," almost always appear in groups (lists/sections). ",e.jsx(n.strong,{children:"Cards"})," can appear significantly alone."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Action Area"}),": ",e.jsx(n.strong,{children:"Cells"})," favor a single primary action (tap/click the row). ",e.jsx(n.strong,{children:"Cards"})," often contain multiple discrete actions (Like, Share, Read More)."]}),`
`]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
