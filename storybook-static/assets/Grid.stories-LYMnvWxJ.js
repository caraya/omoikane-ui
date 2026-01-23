import{j as e}from"./jsx-runtime-DwZrPTBh.js";import{G as a,C as l}from"./Grid-CAWtd5As.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-fNskMoFt.js";const x={title:"Layout/Grid",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A responsive grid system. \n\n**Allowed Children:** The direct children of `<Grid>` should usually be `<Cell>` components to explicitly control column spanning across breakpoints. Any other HTML element used as a direct child will default to auto-placement (spanning 1 column) unless styled otherwise."}}}},s=({text:d,height:m="h-24"})=>e.jsx("div",{className:`w-full ${m} bg-blue-100 border border-blue-300 text-blue-800 flex items-center justify-center font-bold rounded`,children:d}),n={render:()=>e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 space-y-2",children:[e.jsx("div",{className:"font-bold text-gray-500",children:"Resize the window to see breakpoints change"}),e.jsx("div",{className:"text-sm text-gray-400",children:"Note: Direct children of Grid should be Cell components."})]}),e.jsxs(a,{className:"bg-gray-50 p-2",children:[e.jsx(l,{small:4,medium:8,large:12,children:e.jsx(s,{text:"Header (full width)"})}),e.jsx(l,{small:4,medium:4,large:6,children:e.jsx(s,{text:"Main 1 (Half on standard)"})}),e.jsx(l,{small:4,medium:4,large:6,children:e.jsx(s,{text:"Main 2 (Half on standard)"})}),e.jsx(l,{small:2,medium:2,large:3,children:e.jsx(s,{text:"1/4 (Sm: 1/2)"})}),e.jsx(l,{small:2,medium:2,large:3,children:e.jsx(s,{text:"1/4 (Sm: 1/2)"})}),e.jsx(l,{small:2,medium:2,large:3,children:e.jsx(s,{text:"1/4 (Sm: 1/2)"})}),e.jsx(l,{small:2,medium:2,large:3,children:e.jsx(s,{text:"1/4 (Sm: 1/2)"})})]})]})},r={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs(a,{children:[e.jsx(l,{small:4,medium:8,large:12,children:e.jsx("div",{className:"p-2 text-center text-sm font-mono text-white bg-slate-800 rounded mb-4",children:"Current Breakpoint Visualization"})}),e.jsx(l,{small:4,medium:2,large:3,children:e.jsx(s,{height:"h-64",text:"Sidebar"})}),e.jsx(l,{small:4,medium:6,large:9,children:e.jsx(s,{height:"h-64",text:"Main Content"})})]})})},t={render:()=>e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 text-sm text-gray-500",children:[e.jsx("strong",{children:"Standard Nesting:"})," A Grid inside a Cell creates a new independent grid context (e.g. 12 columns inside the cell)."]}),e.jsxs(a,{className:"bg-gray-50 p-2 gap-y-4",children:[e.jsx(l,{small:4,medium:8,large:6,children:e.jsxs("div",{className:"bg-white border border-gray-200 p-4 rounded h-full",children:[e.jsx("div",{className:"mb-2 font-bold",children:"Parent Cell (6 cols)"}),e.jsxs(a,{className:"bg-blue-50 border border-blue-100",children:[e.jsx(l,{small:2,medium:4,large:6,children:e.jsx(s,{text:"Nested 6/12",height:"h-12"})}),e.jsx(l,{small:2,medium:4,large:6,children:e.jsx(s,{text:"Nested 6/12",height:"h-12"})})]})]})}),e.jsx(l,{small:4,medium:8,large:6,children:e.jsx(s,{text:"Sibling Cell",height:"h-full"})})]})]})},i={render:()=>e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"mb-4 text-sm text-gray-500",children:[e.jsx("strong",{children:"Subgrid (Advanced):"})," Using `asSubgrid`, the inner grid tracks force alignment with the parent grid.",e.jsx("br",{}),"Note: The inner Grid must itself be positioned on the parent grid (via `col-span-X` or wrapping Cell with `display: contents` behavior, though Cell currently adds a div).",e.jsx("br",{}),"Here we apply the `col-span` classes directly to the inner Grid for it to work as subgrid."]}),e.jsxs(a,{className:"bg-gray-50 p-2 gap-y-8",style:{gridTemplateRows:"auto auto"},children:[e.jsx(l,{small:4,medium:4,large:4,children:e.jsx(s,{text:"1"})}),e.jsx(l,{small:4,medium:4,large:4,children:e.jsx(s,{text:"2"})}),e.jsx(l,{small:4,medium:4,large:4,children:e.jsx(s,{text:"3"})}),e.jsxs(a,{asSubgrid:!0,className:"col-span-4 md:col-span-8 lg:col-span-8 bg-blue-50/50 outline outline-1 outline-blue-200",children:[e.jsx("div",{className:"col-span-4 lg:col-span-4",children:e.jsx(s,{text:"Subgrid Item A (aligns)",height:"h-16"})}),e.jsx("div",{className:"col-span-4 lg:col-span-4",children:e.jsx(s,{text:"Subgrid Item B (aligns)",height:"h-16"})})]}),e.jsx(l,{small:4,medium:4,large:4,children:e.jsx(s,{text:"4 (Sibling)"})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
        <div className="mb-4 space-y-2">
            <div className="font-bold text-gray-500">Resize the window to see breakpoints change</div>
            <div className="text-sm text-gray-400">
                Note: Direct children of Grid should be Cell components.
            </div>
        </div>
        <Grid className="bg-gray-50 p-2">
            <Cell small={4} medium={8} large={12}>
                <Placeholder text="Header (full width)" />
            </Cell>

            <Cell small={4} medium={4} large={6}>
                <Placeholder text="Main 1 (Half on standard)" />
            </Cell>

            <Cell small={4} medium={4} large={6}>
                <Placeholder text="Main 2 (Half on standard)" />
            </Cell>

            <Cell small={2} medium={2} large={3}>
                <Placeholder text="1/4 (Sm: 1/2)" />
            </Cell>
            <Cell small={2} medium={2} large={3}>
                <Placeholder text="1/4 (Sm: 1/2)" />
            </Cell>
            <Cell small={2} medium={2} large={3}>
                <Placeholder text="1/4 (Sm: 1/2)" />
            </Cell>
            <Cell small={2} medium={2} large={3}>
                <Placeholder text="1/4 (Sm: 1/2)" />
            </Cell>
        </Grid>
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
        <Grid>
            <Cell small={4} medium={8} large={12}>
                <div className="p-2 text-center text-sm font-mono text-white bg-slate-800 rounded mb-4">
                    Current Breakpoint Visualization
                </div>
            </Cell>
            
            {/* Example of typical layout: Sidebar + Content */}
            <Cell small={4} medium={2} large={3}>
                 <Placeholder height="h-64" text="Sidebar" />
            </Cell>
            <Cell small={4} medium={6} large={9}>
                 <Placeholder height="h-64" text="Main Content" />
            </Cell>
        </Grid>
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
        <div className="mb-4 text-sm text-gray-500">
           <strong>Standard Nesting:</strong> A Grid inside a Cell creates a new independent grid context (e.g. 12 columns inside the cell).
        </div>
        <Grid className="bg-gray-50 p-2 gap-y-4">
            <Cell small={4} medium={8} large={6}>
                <div className="bg-white border border-gray-200 p-4 rounded h-full">
                    <div className="mb-2 font-bold">Parent Cell (6 cols)</div>
                    <Grid className="bg-blue-50 border border-blue-100">
                        <Cell small={2} medium={4} large={6}>
                            <Placeholder text="Nested 6/12" height="h-12" />
                        </Cell>
                        <Cell small={2} medium={4} large={6}>
                           <Placeholder text="Nested 6/12" height="h-12" />
                        </Cell>
                    </Grid>
                </div>
            </Cell>
            <Cell small={4} medium={8} large={6}>
               <Placeholder text="Sibling Cell" height="h-full" />
            </Cell>
        </Grid>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
         <div className="mb-4 text-sm text-gray-500">
            <strong>Subgrid (Advanced):</strong> Using \`asSubgrid\`, the inner grid tracks force alignment with the parent grid.
            <br />
            Note: The inner Grid must itself be positioned on the parent grid (via \`col-span-X\` or wrapping Cell with \`display: contents\` behavior, though Cell currently adds a div). 
            <br />
            Here we apply the \`col-span\` classes directly to the inner Grid for it to work as subgrid.
         </div>
         
         <Grid className="bg-gray-50 p-2 gap-y-8" style={{
      gridTemplateRows: 'auto auto'
    }}>
            {/* Row 1: Regular Items */}
            <Cell small={4} medium={4} large={4}><Placeholder text="1" /></Cell>
            <Cell small={4} medium={4} large={4}><Placeholder text="2" /></Cell>
            <Cell small={4} medium={4} large={4}><Placeholder text="3" /></Cell>

            {/* Row 2: Subgrid spanning 8 columns */}
            {/* Note: We use the Grid as the item here directly, bypassing Cell or making it act as Cell */}
            <Grid asSubgrid className="col-span-4 md:col-span-8 lg:col-span-8 bg-blue-50/50 outline outline-1 outline-blue-200">
                {/* These cells align perfectly with parent columns 1 and 2/3 above */}
                <div className="col-span-4 lg:col-span-4">
                    <Placeholder text="Subgrid Item A (aligns)" height="h-16" />
                </div>
                <div className="col-span-4 lg:col-span-4">
                    <Placeholder text="Subgrid Item B (aligns)" height="h-16" />
                </div>
            </Grid>
            
            <Cell small={4} medium={4} large={4}><Placeholder text="4 (Sibling)" /></Cell>
         </Grid>
     </div>
}`,...i.parameters?.docs?.source}}};const p=["Basic","ResponsiveBehavior","NestedGrid","SubgridBehavior"];export{n as Basic,t as NestedGrid,r as ResponsiveBehavior,i as SubgridBehavior,p as __namedExportsOrder,x as default};
