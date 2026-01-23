import{j as n}from"./jsx-runtime-DwZrPTBh.js";import{r as e}from"./iframe-DeqXgmUH.js";const o=e.createContext(!1),l=({children:r,fallback:s=null})=>{const t=e.useContext(o),[a,i]=e.useState(t);return e.useEffect(()=>{t||i(!0)},[t]),a?n.jsx(o.Provider,{value:!0,children:r}):n.jsx(n.Fragment,{children:s})};l.__docgenInfo={description:`A component that only renders its children on the client-side (after hydration).
Useful for avoiding hydration mismatches for components that rely on window/document
or local storage.

Includes an optimization for nested ClientOnly components to avoid waterfall rendering effects.`,methods:[],displayName:"ClientOnly",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}}}};export{l as C};
