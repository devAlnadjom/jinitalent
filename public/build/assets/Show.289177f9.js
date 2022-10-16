import{d as j,u as C,p as M,o as D,c as S,w as n,a as s,t,g as a,b as d,i as _,e as z,f as O,l as E,E as F}from"./app.8aabfefa.js";import{_ as A}from"./PortalLayout.b6d8bdc3.js";import"./_defineProperty.7bc3c9e1.js";import{Q as J,C as Q}from"./vue-select.9cea5406.js";/* empty css                         */import{a as R}from"./DialogModal.8443c2c1.js";import{_ as U}from"./Button.823119d2.js";import{_ as V}from"./InputError.852756f9.js";import{_ as q}from"./SecondaryButton.a8b220e3.js";import{d as N,r as H}from"./relativeTime.c5a9592b.js";import"./ResponsiveNavLink.699ca252.js";const P={class:"w-full flex justify-center gap-4"},Y={class:"flex-1"},G={class:"font-semibold text-xl text-gray-800 leading-tight"},I=s("div",{class:"flex"},null,-1),K={class:"py-12"},W={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},X={class:"w-full flex gap-4"},Z={class:"md:w-2/3 lg:w-3/4"},ss={class:"border rounded-md p-4 bg-white"},ts=s("h3",{class:"font-semibold text-gray-800 leading-tight"},"Details",-1),es={class:"w-full grid md:grid-cols-2 lg:grid-cols-3"},os={class:"flex gap-x-2 text-sm mt-4"},as=s("h5",{class:"text-gray-600"},"COD :",-1),ls={class:"font-semibold"},is={class:"flex gap-x-2 text-sm mt-4"},ns=s("h5",{class:"text-gray-600"},"Title :",-1),ds={class:"font-semibold"},cs={class:"flex gap-x-2 text-sm mt-4"},rs=s("h5",{class:"text-gray-600"},"Type :",-1),ms={class:"font-semibold"},_s=s("div",{class:"flex gap-x-2 text-sm mt-4"},[s("h5",{class:"text-gray-600"},"Requisition :"),s("span",{class:"font-semibold"},"0/4 ")],-1),hs={class:"flex gap-x-2 text-sm mt-4"},xs=s("h5",{class:"text-gray-600"},"Location :",-1),fs={class:"font-semibold p-1 bg-green-200 text-green-700 text-xs rounded"},us=s("div",{class:"flex gap-x-2 text-sm mt-4"},[s("h5",{class:"text-gray-600"},"Public :"),s("span",{class:"font-semibold text-green-600"},"Yes ")],-1),ps={class:"flex gap-x-2 text-sm mt-4"},gs=s("h5",{class:"text-gray-600"},"Due date :",-1),bs={class:"font-semibold"},vs={class:"flex gap-x-2 text-sm mt-4"},ws=s("h5",{class:"text-gray-600"},"Salary :",-1),ys={class:"font-semibold"},ks={class:"flex gap-x-2 text-sm mt-4"},js=s("h5",{class:"text-gray-600"},"Level :",-1),Cs={class:"font-semibold"},Ds={class:"border rounded-md p-4 mt-4 bg-white px-4 pb-8"},Vs=s("h3",{class:"font-semibold text-gray-800 leading-tight"},"Description",-1),Ns={class:"w-full mt-3 border-t text-sm pt-2"},Ts=s("template",null,[s("div",{id:"my-toolbar"})],-1),$s={class:"flex-1"},Bs={class:"border rounded-md p-4 bg-white"},Ls=s("h3",{class:"font-semibold text-gray-800 leading-tight"},"Company",-1),Ms={class:"w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row md:justify-between gap-2"},Ss=s("h5",{class:"text-gray-600"},"Name ",-1),zs={class:"font-semibold"},Os={class:"w-full mt-3 border-t text-sm pt-2 flex flex-col md:flex-row md:justify-between gap-2"},Es=s("h5",{class:"text-gray-600"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",class:"w-5 h-5"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})])],-1),Fs={class:"font-semibold"},As=s("h2",{class:"font-bold text-2xl mb-6 text-gray-800 border-b pb-2"},[s("span",{class:"inline-block"},"Link candidate to this job")],-1),Js={class:"w-full bg-white block"},Qs={class:"mb-4"},Rs=s("label",{class:"text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide"},"Liste ",-1),Us={class:"text-sm"},qs={key:0,class:"ml-8 text-orange-600"},Hs={class:"mb-12"},Ps=s("label",{class:"text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide"},"Description",-1),Ys=_(" Close "),Gs=s("span",{class:"flex-1 mr-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),Is=_(" Link "),nt={__name:"Show",props:{jobs:Object,organization:Object,candidates:Object},setup(e){var x;const m=e;N.extend(H);const h=j(null),c=j(!1);C({search:"",trashed:null});const l=C({position_id:(x=m.jobs)==null?void 0:x.id,candidate_id:null,ratings:3,source:""}),T=()=>{l.post(route("applications.store"),{onSuccess:()=>{l.candidate_id=null,c.value=!1},onError:r=>{console.log(r)}})};return M(()=>{setTimeout(()=>{var r;h.value.setHTML((r=m.jobs)==null?void 0:r.description)},100)}),(r,i)=>(D(),S(A,{title:"One Job"},{header:n(()=>[s("div",P,[s("div",Y,[s("h2",G," Jobs / "+t(e.jobs.name),1)]),I])]),default:n(()=>{var f,u,p,g,b,v,w,y,k;return[s("div",K,[s("div",W,[s("div",X,[s("div",Z,[s("div",ss,[ts,s("div",es,[s("div",os,[as,s("span",ls,t((f=e.jobs)==null?void 0:f.code),1)]),s("div",is,[ns,s("span",ds,t((u=e.jobs)==null?void 0:u.name),1)]),s("div",cs,[rs,s("span",ms,t((p=e.jobs)==null?void 0:p.style),1)]),_s,s("div",hs,[xs,s("span",fs,t((g=e.jobs)==null?void 0:g.style),1)]),us,s("div",ps,[gs,s("span",bs,t(a(N)((b=e.jobs)==null?void 0:b.date_start_job).fromNow()),1)]),s("div",vs,[ws,s("span",ys,t((v=e.jobs)==null?void 0:v.salary),1)]),s("div",ks,[js,s("span",Cs,t((w=e.jobs)==null?void 0:w.level),1)])])]),s("div",Ds,[Vs,s("div",Ns,[d(a(J),{toolbar:"#my-toolbar",theme:"bubble",ref_key:"moneditor",ref:h,"read-only":!0},null,512),Ts])])]),s("div",$s,[s("div",Bs,[Ls,s("div",Ms,[Ss,s("span",zs,t((y=e.organization)==null?void 0:y.name),1)]),s("div",Os,[Es,s("span",Fs,t((k=e.organization)==null?void 0:k.address),1)])])])])]),d(R,{show:c.value,onClose:i[3]||(i[3]=o=>c.value=!c.value)},{title:n(()=>[As]),content:n(()=>[s("div",Js,[s("div",Qs,[Rs,d(a(Q),{modelValue:a(l).candidate_id,"onUpdate:modelValue":i[0]||(i[0]=o=>a(l).candidate_id=o),options:m.candidates,reduce:o=>o.id,label:"first_name",placeholder:"Select. Candidate"},{option:n(({id:o,first_name:$,last_name:B,resume:L})=>[s("em",Us,[_(t(o)+" "+t($)+"-"+t(B)+" ",1),L?O("",!0):(D(),z("span",qs,"No Resume"))])]),_:1},8,["modelValue","options","reduce"]),d(V,{message:a(l).errors.candidate_id,class:"mt-2"},null,8,["message"])]),s("div",Hs,[Ps,E(s("textarea",{id:"description",rows:"3",type:"text","onUpdate:modelValue":i[1]||(i[1]=o=>a(l).source=o),placeholder:"Description...",class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"},null,512),[[F,a(l).source]]),d(V,{message:a(l).errors.source,class:"mt-2"},null,8,["message"])])])]),footer:n(()=>[d(q,{onClick:i[2]||(i[2]=o=>c.value=!c.value)},{default:n(()=>[Ys]),_:1}),d(U,{class:"ml-3",onClick:T},{default:n(()=>[Gs,Is]),_:1})]),_:1},8,["show"])])]}),_:1}))}};export{nt as default};
