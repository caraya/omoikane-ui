import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{useMDXComponents as r}from"./index-CDlax2gF.js";import{M as t}from"./blocks-CukJbebj.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Explainers/Clickable vs Button"}),`
`,e.jsx(n.h1,{id:"clickable-vs-button",children:"Clickable vs Button"}),`
`,e.jsxs(n.p,{children:["In the Omoikane Design System, both ",e.jsx(n.code,{children:"Clickable"})," and ",e.jsx(n.code,{children:"Button"})," allow users to trigger actions, but they serve different architectural and semantic purposes. Understanding when to use which is key to building consistent UI."]}),`
`,e.jsx(n.h2,{id:"at-a-glance",children:"At a Glance"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Button"}),`: A standard, styled UI element for primary actions. | You need a standard "call to action" (e.g., Submit, Cancel, Save) that matches the system's look and feel.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Clickable"}),": A primitive wrapper that makes ",e.jsx(n.em,{children:"anything"})," interactive. | You need to make a custom element (like a card, a row, or an icon) interactive, or you need full control over the ",e.jsx(n.code,{children:"hover/press"})," visual states."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Button"})," component is a high-level component that comes pre-packaged with specific styles (Primary, Secondary, Tertiary, Destructive). It enforces the design system's visual language."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Characteristics:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pre-defined padding, colors, and typography."}),`
`,e.jsx(n.li,{children:"Standard variants (Solid, Outline, Ghost)."}),`
`,e.jsx(n.li,{children:"Limited customization (by design) to ensure consistency."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Button intent="primary">Save Changes</Button>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"clickable",children:"Clickable"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Clickable"})," component is a low-level primitive. It handles the ",e.jsx(n.em,{children:"behavior"})," of being interactive (roles, keyboard support, focus management, hover states) without enforcing a specific ",e.jsx(n.em,{children:"look"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Characteristics:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`No visual styles by default (it's "headless" regarding UI).`}),`
`,e.jsxs(n.li,{children:["Renders as either ",e.jsx(n.code,{children:"<button>"})," or ",e.jsx(n.code,{children:"<a>"})," depending on ",e.jsx(n.code,{children:"href"}),"."]}),`
`,e.jsxs(n.li,{children:["Supports the ",e.jsx(n.strong,{children:"Render Prop"})," pattern to allow children to react to state changes (",e.jsx(n.code,{children:"hovered"}),", ",e.jsx(n.code,{children:"focused"}),", ",e.jsx(n.code,{children:"pressed"}),")."]}),`
`,e.jsx(n.li,{children:"Ideal for building new interactive components."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Clickable onClick={() => alert('Clicked!')}>
  {({ hovered, pressed }) => (
    <div className={hovered ? "bg-gray-100" : "bg-white"}>
      Custom Interactive Card
    </div>
  )}
</Clickable>
`})}),`
`,e.jsx(n.h2,{id:"decision-tree",children:"Decision Tree"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:'Do you need a standard "Submit" or "Cancel" button?'}),`
👉 Use `,e.jsx(n.code,{children:"Button"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Are you building a custom UI element (like a clickable user avatar or a complex list item)?"}),`
👉 Use `,e.jsx(n.code,{children:"Clickable"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Do you need a link that looks like a button?"}),`
👉 Use `,e.jsx(n.code,{children:"Button"})," with ",e.jsx(n.code,{children:"link={true}"})," or ",e.jsx(n.code,{children:"href"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Do you need a custom area of the screen to be valid for keyboard navigation and screen readers?"}),`
👉 Use `,e.jsx(n.code,{children:"Clickable"}),"."]}),`
`]}),`
`]})]})}function j(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{j as default};
