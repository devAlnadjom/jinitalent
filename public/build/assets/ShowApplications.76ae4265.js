import{d as g,u as v,p as M,o as _,c as N,w as o,a as s,t as n,b as l,l as f,D as w,g as a,E as A,e as u,h as E,F as T,i as p,f as y,L as B}from"./app.24b97839.js";import{_ as O}from"./AppLayout.5f36f78f.js";import{_ as k}from"./NavLink.b08bf79b.js";import"./_defineProperty.eed32737.js";import{m as z}from"./mapValues.a2331af2.js";import"./vue-quill.esm-bundler.1ac67136.js";/* empty css                         */import{a as D}from"./DialogModal.4902bb2a.js";import{C as F}from"./vue-select.143d247b.js";import{_ as I}from"./Button.2b58432f.js";import{_ as C}from"./InputError.29bceae9.js";import{_ as R}from"./SecondaryButton.d981be35.js";import{b as U}from"./ResponsiveNavLink.4a81335a.js";import{d as j,r as J}from"./relativeTime.cf3dea33.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./_baseAssignValue.c1c739ba.js";const P={class:"w-full flex justify-center gap-4"},H={class:"flex-1"},K={class:"font-semibold text-xl text-gray-800 leading-tight"},W={class:"flex"},q={class:"hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50"},G=p(" Jobs detils "),Q=s("div",{class:"hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex bg-orange-50"}," Applications ",-1),X={class:"hidden space-x-8 p-2 sm:-my-px sm:ml-10 sm:flex hover:bg-orange-50"},Y=p(" Logs "),Z=s("span",{class:"flex-1 mr-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})])],-1),ss=p(" Link Candidate "),ts=[Z,ss],es={class:"py-12"},os={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},as={class:"flex mb-4 w-full justify-between"},ns={class:"flex flex-row w-3/5"},ls={class:"w-44"},is=s("option",{value:null},"STATUS",-1),ds=s("option",{value:"0"},"With Trashed",-1),rs=s("option",{value:"1"},"Paid",-1),cs=[is,ds,rs],ps={class:"flex w-full bg-white shadow rounded"},_s={class:"overflow-x-auto w-full pb-60"},us={class:"w-full whitespace-no-wrap"},ms=s("thead",null,[s("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 bjob-b"},[s("th",{class:"px-4 py-3"},"#"),s("th",{class:"px-4 py-3"},"Candidate"),s("th",{class:"px-4 py-3"},"infos"),s("th",{class:"px-4 py-3"},"Status"),s("th",{class:"px-4 py-3"},"source"),s("th",{class:"px-4 py-3"},"Action")])],-1),hs={class:"bg-white divide-y"},xs={class:"px-4 py-3 text-sm"},fs={class:"flex flex-col"},bs={class:"mb-1"},gs={class:"px-4 py-3 text-sm"},vs={class:"flex flex-row"},ws={class:"mb-1"},ys={class:"px-4 py-3 text-sm"},ks={class:"flex flex-row"},Cs={class:"mb-1"},js=s("span",null,null,-1),$s={class:"px-4 py-3 text-sm"},Ls={class:"flex flex-col"},Ss={key:0,class:"p-1 text-sm bg-green-50 text-green-700 rounded animate-pulse"},Vs={class:"font-bold text-xs"},Ms={class:"px-4 py-3 text-sm"},Ns={class:"text-xs mr-2"},As={class:"px-4 py-3 text-sm"},Es={class:"flex items-end justify-end"},Ts={class:"text-xs mr-8"},Bs=s("button",null,[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})])],-1),Os=s("span",{class:""},"Infos",-1),zs=s("h2",{class:"font-bold text-2xl mb-6 text-gray-800 border-b pb-2"},[s("span",{class:"inline-block"},"Link candidate to this job")],-1),Ds={class:"w-full bg-white block"},Fs={class:"mb-4"},Is=s("label",{class:"text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide"},"Liste ",-1),Rs={class:"text-sm"},Us={key:0,class:"ml-8 text-orange-600"},Js={class:"mb-12"},Ps=s("label",{class:"text-gray-800 block mb-1 font-bold text-sm uppercase tracking-wide"},"Source",-1),Hs=s("option",{value:"null"},"Selec. Source",-1),Ks=s("option",{value:"PORTAL"},"Portal",-1),Ws=s("option",{value:"CRM"},"Crm",-1),qs=s("option",{value:"LINKEDIN"},"Linkedin",-1),Gs=s("option",{value:"INDEED"},"Indeed",-1),Qs=s("option",{value:"OTHER"},"Other",-1),Xs=[Hs,Ks,Ws,qs,Gs,Qs],Ys=p(" Close "),Zs=s("span",{class:"flex-1 mr-2"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),st=p(" Link "),ft={__name:"ShowApplications",props:{jobs:Object,organization:Object,candidates:Object},setup(m){var b;const h=m;j.extend(J),g(null);const i=g(!1),c=v({search:"",trashed:null}),d=v({position_id:(b=h.jobs)==null?void 0:b.id,candidate_id:null,ratings:3,source:""}),$=()=>{d.post(route("applications.store"),{onSuccess:()=>{d.candidate_id=null,i.value=!1},onError:r=>{console.log(r)}})};M(()=>{});const L=()=>{c=z(c,()=>null)};return(r,e)=>(_(),N(O,{title:"One Job"},{header:o(()=>{var t;return[s("div",P,[s("div",H,[s("h2",K," Jobs / "+n(m.jobs.name),1)]),s("div",W,[s("div",q,[l(k,{href:r.route("jobs.show",(t=h.jobs)==null?void 0:t.id),active:r.route().current("dashboard")},{default:o(()=>[G]),_:1},8,["href","active"])]),Q,s("div",X,[l(k,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:o(()=>[Y]),_:1},8,["href","active"])]),s("button",{onClick:e[0]||(e[0]=x=>i.value=!0),class:"hidden space-x-8 p-2 px-4 sm:-my-px sm:ml-10 sm:flex rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"},ts)])])]}),default:o(()=>[s("div",es,[s("div",os,[s("div",null,[s("div",as,[s("div",ns,[s("div",ls,[f(s("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>a(c).trashed=t),class:"rounded-l py-1 w-full border-r-0"},cs,512),[[w,a(c).trashed]])]),s("div",ps,[f(s("input",{class:"relative w-full px-4 py-1 rounded-r -focus:ring border",autocomplete:"off",type:"text",name:"search",placeholder:"Search\u2026","onUpdate:modelValue":e[2]||(e[2]=t=>a(c).search=t)},null,512),[[A,a(c).search]])]),s("button",{class:"ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500",type:"button",onClick:e[3]||(e[3]=t=>L())},"Reset")]),s("button",{class:"flex ml-auto text-white bg-orange-600 border-0 py-1 px-4 focus:outline-none hover:bg-orange-800 rounded",onClick:e[4]||(e[4]=t=>i.value=!0)},"Link Candidate")])]),s("div",_s,[s("table",us,[ms,s("tbody",hs,[(_(!0),u(T,null,E(m.jobs.applications,t=>(_(),u("tr",{key:t.id,class:"text-gray-700"},[s("td",xs,[s("span",fs,[s("span",bs,"# - "+n(t.id),1)])]),s("td",gs,[s("span",vs,[s("span",ws,n(t.candidate.first_name)+" "+n(t.candidate.last_name),1)])]),s("td",ys,[s("span",ks,[s("span",Cs,n(t==null?void 0:t.ratings)+"/5",1),js])]),s("td",$s,[s("span",Ls,[t.status_text=="New"?(_(),u("span",Ss,[s("span",Vs,n(t.status_text),1)])):y("",!0)])]),s("td",Ms,[s("span",Ns,n(t.source),1)]),s("td",As,[s("div",Es,[s("span",Ts,n(a(j)(t.created_at).fromNow()),1),l(U,null,{trigger:o(()=>[Bs]),content:o(()=>[s("button",{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:e[5]||(e[5]=x=>r.editing=!0)}," Edit "),l(a(B),{href:r.route("jobs.show",t.id),active:"",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[Os]),_:2},1032,["href"])]),_:2},1024)])])]))),128))])])])]),l(D,{show:i.value,onClose:e[9]||(e[9]=t=>i.value=!i.value)},{title:o(()=>[zs]),content:o(()=>[s("div",Ds,[s("div",Fs,[Is,l(a(F),{modelValue:a(d).candidate_id,"onUpdate:modelValue":e[6]||(e[6]=t=>a(d).candidate_id=t),options:h.candidates,reduce:t=>t.id,label:"first_name",placeholder:"Select. Candidate"},{option:o(({id:t,first_name:x,last_name:S,resume:V})=>[s("em",Rs,[p(n(t)+" "+n(x)+"-"+n(S)+" ",1),V?y("",!0):(_(),u("span",Us,"No Resume"))])]),_:1},8,["modelValue","options","reduce"]),l(C,{message:a(d).errors.candidate_id,class:"mt-2"},null,8,["message"])]),s("div",Js,[Ps,f(s("select",{class:"p-2 w-full rounded","onUpdate:modelValue":e[7]||(e[7]=t=>a(d).source=t)},Xs,512),[[w,a(d).source]]),l(C,{message:a(d).errors.source,class:"mt-2"},null,8,["message"])])])]),footer:o(()=>[l(R,{onClick:e[8]||(e[8]=t=>i.value=!i.value)},{default:o(()=>[Ys]),_:1}),l(I,{class:"ml-3",onClick:$},{default:o(()=>[Zs,st]),_:1})]),_:1},8,["show"])])]),_:1}))}};export{ft as default};