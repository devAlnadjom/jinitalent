import{u,m as f,o as l,c as m,w as i,a as t,l as p,D as y,g as a,E as g,k as _,e as r,h as b,F as w,t as n,f as v,b as k,L as S}from"./app.b81dfb0d.js";import{_ as V}from"./AppLayout.6d5f4b84.js";import{t as B,p as C}from"./throttle.e7d25d94.js";import{m as I}from"./mapValues.aa943530.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ResponsiveNavLink.813720a3.js";import"./_defineProperty.d6ad4430.js";import"./_baseAssignValue.1637a5ce.js";const T=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," jobs ",-1),N={class:"py-12"},A={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"flex mb-4 w-full justify-between"},F={class:"flex flex-row w-3/5"},L={class:"w-44"},U=t("option",{value:null},"STATUS",-1),$=t("option",{value:"0"},"With Trashed",-1),j=t("option",{value:"1"},"Paid",-1),E=[U,$,j],M={class:"flex w-full bg-white shadow rounded"},O={class:"overflow-x-auto w-full"},z={class:"w-full whitespace-no-wrap"},J=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 bjob-b"},[t("th",{class:"px-4 py-3"},"#"),t("th",{class:"px-4 py-3"},"Job Title"),t("th",{class:"px-4 py-3"},"Company"),t("th",{class:"px-4 py-3"},"Infos"),t("th",{class:"px-4 py-3"},"Status"),t("th",{class:"px-4 py-3"},"Action")])],-1),P={class:"bg-white divide-y"},R={class:"px-4 py-3 text-sm"},W={class:"flex flex-col"},q={class:"mb-1"},G={class:"px-4 py-3 text-sm"},H={class:"flex flex-row"},K={class:"mb-1"},Q=t("span",null,null,-1),X={class:"px-4 py-3 text-sm"},Y={class:"flex flex-row"},Z={class:"mb-1"},tt=t("span",null,null,-1),st={class:"px-4 py-3 text-sm"},et={class:"flex flex-col"},ot={class:"font-bold text-xs"},at={class:"px-4 py-3 text-sm"},lt={key:0,class:"p-1 text-xs bg-green-100 text-green-500 rounded"},nt={class:"px-4 py-3 text-sm"},it=t("span",{class:"text-orange-500 hover:text-orange-700 px-2 py-1 font-bold cursor-pointer"},"Infos",-1),ft={__name:"Index",props:{jobs:Object,filters:Object},setup(x){const e=u({search:"",trashed:null});f(e,B(function(){_.Inertia.get(route("jobs.index"),C(e),{preserveState:!0})},900));const h=()=>{e=I(e,()=>null)};return(c,o)=>(l(),m(V,{title:"jobs"},{header:i(()=>[T]),default:i(()=>[t("div",N,[t("div",A,[t("div",null,[t("div",D,[t("div",F,[t("div",L,[p(t("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).trashed=s),class:"rounded-l py-1 w-full border-r-0"},E,512),[[y,a(e).trashed]])]),t("div",M,[p(t("input",{class:"relative w-full px-4 py-1 rounded-r -focus:ring border",autocomplete:"off",type:"text",name:"search",placeholder:"Search\u2026","onUpdate:modelValue":o[1]||(o[1]=s=>a(e).search=s)},null,512),[[g,a(e).search]])]),t("button",{class:"ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500",type:"button",onClick:o[2]||(o[2]=s=>h())},"Reset")]),t("button",{class:"flex ml-auto text-white bg-orange-600 border-0 py-1 px-4 focus:outline-none hover:bg-orange-800 rounded",onClick:o[3]||(o[3]=s=>a(_.Inertia).visit(c.route("jobs.create")))},"Add New")])]),t("div",O,[t("table",z,[J,t("tbody",P,[(l(!0),r(w,null,b(x.jobs.data,s=>{var d;return l(),r("tr",{key:s.id,class:"text-gray-700"},[t("td",R,[t("span",W,[t("span",q,"# - "+n(s.id),1)])]),t("td",G,[t("span",H,[t("span",K,n(s.job_tite),1),Q])]),t("td",X,[t("span",Y,[t("span",Z,n((d=s==null?void 0:s.organization)==null?void 0:d.name),1),tt])]),t("td",st,[t("span",et,[t("span",ot," 0 / "+n(s.no_of_vacancy),1)])]),t("td",at,[s.status==1?(l(),r("span",lt,"open")):v("",!0)]),t("td",nt,[k(a(S),{href:c.route("jobs.show",s.id),active:"",class:"text-sm text-gray-700 block"},{default:i(()=>[it]),_:2},1032,["href"])])])}),128))])])])])])]),_:1}))}};export{ft as default};
