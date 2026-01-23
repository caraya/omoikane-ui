import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{useMDXComponents as s}from"./index-CDlax2gF.js";import{M as o}from"./blocks-CukJbebj.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Explainers/CustomGrid"}),`
`,e.jsx(n.h1,{id:"customgrid-and-griditem",children:"CustomGrid and GridItem"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CustomGrid"})," is a simple, flexible wrapper around CSS Grid that favors explicit placement of children while still allowing normal auto-placement flow. Use ",e.jsx(n.code,{children:"GridItem"})," to place its child into a specific ",e.jsx(n.code,{children:"col"})," and optional ",e.jsx(n.code,{children:"row"}),". If you reference a ",e.jsx(n.code,{children:"row"})," that doesn't yet exist, the grid will expand and create that row for you."]}),`
`,e.jsxs(n.p,{children:["This component is intended for layouts where content needs to be positioned precisely (dashboards, complex layouts, kanban-like boards), or where nested grids provide independent coordinate spaces. It intentionally differs from the fixed ",e.jsx(n.code,{children:"Grid"})," primitive which is used for uniform, regular grids."]}),`
`,e.jsx(n.h2,{id:"key-concepts",children:"Key concepts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Explicit placement: pass ",e.jsx(n.code,{children:"col"}),", ",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"colSpan"}),", and ",e.jsx(n.code,{children:"rowSpan"})," to ",e.jsx(n.code,{children:"GridItem"})," to control where an element appears."]}),`
`,e.jsxs(n.li,{children:["Auto-placement: omit ",e.jsx(n.code,{children:"row"})," to let the grid auto-place items into the next available row for the given column."]}),`
`,e.jsxs(n.li,{children:["Nested grids: place a ",e.jsx(n.code,{children:"CustomGrid"})," inside a ",e.jsx(n.code,{children:"GridItem"})," to create sub-layouts. When you set ",e.jsx(n.code,{children:"subgrid={true}"}),", the component will emit ",e.jsx(n.code,{children:"grid-template-columns: subgrid"})," which relies on experimental browser support — treat as progressive enhancement."]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';
import CustomGrid, { GridItem } from '../../src/components/CustomGrid';

export default function Example() {
  return (
    <CustomGrid columns={4} gap={12} rowHeight={72}>
      <GridItem col={1} row={1}>Top-left</GridItem>
      <GridItem col={2} row={1} colSpan={2}>Wide item</GridItem>
      <GridItem col={1} row={4}>Placed in row 4 explicitly</GridItem>
      <GridItem col={4}>Auto-placed in column 4</GridItem>
    </CustomGrid>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CustomGrid"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"columns"})," (number) — how many grid columns to expose (default 4)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gap"})," (string | number) — gap between cells; numeric values treated as pixels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"rowHeight"})," (string | number) — ",e.jsx(n.code,{children:"grid-auto-rows"})," value for implicit rows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subgrid"})," (boolean) — emit ",e.jsx(n.code,{children:"subgrid"})," for ",e.jsx(n.code,{children:"grid-template-columns"})," (experimental)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"GridItem"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"col"})," (number, 1-based) — start column for the item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"row"})," (number, 1-based, optional) — start row for the item; grid will grow if row doesn't exist."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"colSpan"})," / ",e.jsx(n.code,{children:"rowSpan"})," — how many columns/rows to span."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"notes-and-tips",children:"Notes and tips"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Using explicit ",e.jsx(n.code,{children:"row"})," values can be useful for timeline or schedule UIs where rows represent time slots and you want to place items far in the future without inserting empty DOM rows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subgrid"})," is supported in a subset of browsers — it should be used as an enhancement and can be toggled with the ",e.jsx(n.code,{children:"subgrid"})," prop in stories."]}),`
`,e.jsxs(n.li,{children:["For accessibility and responsiveness, consider how items reflow on small screens; combine ",e.jsx(n.code,{children:"col"})," and ",e.jsx(n.code,{children:"colSpan"})," with media queries in your layout wrapper if needed."]}),`
`]})]})}function p(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{p as default};
