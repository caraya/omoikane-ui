const t=globalThis.document?.currentScript;if(t){const i=new URL("./index.js",t.src);import(i.toString()).then((({default:t})=>globalThis.Prism=t))}
