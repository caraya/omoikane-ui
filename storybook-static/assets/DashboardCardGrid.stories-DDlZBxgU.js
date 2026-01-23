import{j as o}from"./jsx-runtime-DwZrPTBh.js";import{D as s}from"./DashboardCardGrid-N6H7lhDn.js";import"./iframe-DeqXgmUH.js";import"./preload-helper-PPVm8Dsz.js";import"./CustomGrid-jAHPB5rM.js";import"./cn-fNskMoFt.js";import"./Toolbar-DV3Kd1-d.js";import"./Popover-CYH3571o.js";import"./index-Bg2guSoB.js";import"./index-Bi105ZpR.js";const t=[{id:"c1",title:"Sales",subtitle:"Today",content:o.jsx("div",{children:"Revenue: $12,300"}),col:1,colSpan:2,actions:[{id:"refresh",label:"Refresh"}]},{id:"c2",title:"Active Users",subtitle:"1h",content:o.jsx("div",{children:"342"}),col:3,actions:[{id:"view",label:"View"}]},{id:"c3",title:"Errors",subtitle:"Last 24h",content:o.jsx("div",{children:"4 critical"}),col:1,row:2,colSpan:1,actions:[{id:"details",label:"Details"}]},{id:"c4",title:"Tasks",subtitle:"Backlog",content:o.jsx("div",{children:"12 items"}),col:2,row:2,colSpan:2}],g={title:"Molecules/DashboardCardGrid",component:s,argTypes:{columns:{control:{type:"number",min:1,max:12,step:1}},gap:{control:"text"},rowHeight:{control:"text"},showToolbar:{control:"boolean"},cards:{control:"object"}}},a={args:{cards:t,columns:4,gap:12,rowHeight:80,showToolbar:!0},render:r=>o.jsxs("div",{style:{padding:24},children:[o.jsx("a",{href:"#dashboard-grid",style:{position:"absolute",left:-9999},children:"Skip to dashboard"}),o.jsx("div",{id:"dashboard-grid",children:o.jsx(s,{cards:r.cards,columns:r.columns,gap:r.gap,rowHeight:r.rowHeight,showToolbar:r.showToolbar})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cards: sampleCards,
    columns: 4,
    gap: 12,
    rowHeight: 80,
    showToolbar: true
  },
  render: args => {
    return <div style={{
      padding: 24
    }}>
        <a href="#dashboard-grid" style={{
        position: 'absolute',
        left: -9999
      }}>Skip to dashboard</a>
        <div id="dashboard-grid">
          <DashboardCardGrid cards={args.cards as DashboardCard[]} columns={args.columns} gap={args.gap} rowHeight={args.rowHeight} showToolbar={args.showToolbar} />
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const u=["Playground"];export{a as Playground,u as __namedExportsOrder,g as default};
