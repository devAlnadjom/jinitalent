import{d as $,s as f,B as w,m as C,o as r,e as l,g as t,n as c,a as o,f as m,t as S,j as B,p as L,q as j,r as d,A as v,l as k,v as _,b as M,w as h,T as z,c as y,L as b}from"./app.8aabfefa.js";const D={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},E={class:"flex items-center justify-between flex-wrap"},N={class:"w-0 flex-1 flex items-center min-w-0"},V={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},A=o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),R=[A],T={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},q=o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),O=[q],P={class:"ml-3 font-medium text-sm text-white truncate"},U={class:"shrink-0 sm:ml-3"},F=o("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),G=[F],Q={__name:"Banner",setup(s){const n=$(!0),e=f(()=>{var i;return((i=w().props.value.jetstream.flash)==null?void 0:i.bannerStyle)||"success"}),a=f(()=>{var i;return((i=w().props.value.jetstream.flash)==null?void 0:i.banner)||""});return C(a,async()=>{n.value=!0}),(i,p)=>(r(),l("div",null,[n.value&&t(a)?(r(),l("div",{key:0,class:c({"bg-indigo-500":t(e)=="success","bg-red-700":t(e)=="danger"})},[o("div",D,[o("div",E,[o("div",N,[o("span",{class:c(["flex p-2 rounded-lg",{"bg-indigo-600":t(e)=="success","bg-red-600":t(e)=="danger"}])},[t(e)=="success"?(r(),l("svg",V,R)):m("",!0),t(e)=="danger"?(r(),l("svg",T,O)):m("",!0)],2),o("p",P,S(t(a)),1)]),o("div",U,[o("button",{type:"button",class:c(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":t(e)=="success","hover:bg-red-600 focus:bg-red-600":t(e)=="danger"}]),"aria-label":"Dismiss",onClick:p[0]||(p[0]=B(g=>n.value=!1,["prevent"]))},G,2)])])])],2)):m("",!0)]))}},H={class:"relative"},W={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(s){const n=s;let e=$(!1);const a=g=>{e.value&&g.key==="Escape"&&(e.value=!1)};L(()=>document.addEventListener("keydown",a)),j(()=>document.removeEventListener("keydown",a));const i=f(()=>({48:"w-48"})[n.width.toString()]),p=f(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(g,u)=>(r(),l("div",H,[o("div",{onClick:u[0]||(u[0]=x=>v(e)?e.value=!t(e):e=!t(e))},[d(g.$slots,"trigger")]),k(o("div",{class:"fixed inset-0 z-40",onClick:u[1]||(u[1]=x=>v(e)?e.value=!1:e=!1)},null,512),[[_,t(e)]]),M(z,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:h(()=>[k(o("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[t(i),t(p)]]),style:{display:"none"},onClick:u[2]||(u[2]=x=>v(e)?e.value=!1:e=!1)},[o("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",s.contentClasses])},[d(g.$slots,"content")],2)],2),[[_,t(e)]])]),_:3})]))}},I={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},J=["href"],X={__name:"DropdownLink",props:{href:String,as:String},setup(s){return(n,e)=>(r(),l("div",null,[s.as=="button"?(r(),l("button",I,[d(n.$slots,"default")])):s.as=="a"?(r(),l("a",{key:1,href:s.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[d(n.$slots,"default")],8,J)):(r(),y(t(b),{key:2,href:s.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:h(()=>[d(n.$slots,"default")]),_:3},8,["href"]))]))}},Y={__name:"NavLink",props:{href:String,active:Boolean},setup(s){const n=s,e=f(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(a,i)=>(r(),y(t(b),{href:s.href,class:c(t(e))},{default:h(()=>[d(a.$slots,"default")]),_:3},8,["href","class"]))}},Z={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(s){const n=s,e=f(()=>n.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(a,i)=>(r(),l("div",null,[s.as=="button"?(r(),l("button",{key:0,class:c([t(e),"w-full text-left"])},[d(a.$slots,"default")],2)):(r(),y(t(b),{key:1,href:s.href,class:c(t(e))},{default:h(()=>[d(a.$slots,"default")]),_:3},8,["href","class"]))]))}};export{Q as _,Y as a,X as b,W as c,Z as d};
