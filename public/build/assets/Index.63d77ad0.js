import{u as h,l as u,o as n,c as m,w as d,a as t,v as i,D as f,g as a,E as y,y as p,e as r,h as b,F as g,t as l,f as w,b as v,L as k}from"./app.0f7396ed.js";import{_ as C}from"./AppLayout.dd40d383.js";import{t as S,p as N}from"./throttle.6703c8e6.js";import{m as V}from"./mapValues.9fabf0e0.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Candidates ",-1),F={class:"py-12"},L={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:"flex mb-4 w-full justify-between"},j={class:"flex flex-row w-3/5"},A={class:"w-44"},D=t("option",{value:null},"STATUS",-1),E=t("option",{value:"0"},"With Trashed",-1),I=t("option",{value:"1"},"Paid",-1),U=[D,E,I],$={class:"flex w-full bg-white shadow rounded"},M={class:"overflow-x-auto w-full"},O={class:"w-full whitespace-no-wrap"},P=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 bcandidate-b"},[t("th",{class:"px-4 py-3"},"#"),t("th",{class:"px-4 py-3"},"First name"),t("th",{class:"px-4 py-3"},"Last Name"),t("th",{class:"px-4 py-3"},"Contact"),t("th",{class:"px-4 py-3"},"Status"),t("th",{class:"px-4 py-3"},"Action")])],-1),R={class:"bg-white divide-y"},W={class:"px-4 py-3 text-sm"},q={class:"flex flex-col"},z={class:"mb-1"},G={class:"px-4 py-3 text-sm"},H={class:"flex flex-row"},J={class:"mb-1"},K=t("span",null,null,-1),Q={class:"px-4 py-3 text-sm"},X={class:"flex flex-row"},Y={class:"mb-1"},Z=t("span",null,null,-1),tt={class:"px-4 py-3 text-sm"},st={class:"flex flex-col"},et={class:"mb-1"},ot={class:"font-bold text-xs"},at={class:"px-4 py-3 text-sm"},lt={key:0,class:"p-1 text-xs bg-orange-100 text-orange-500 rounded"},nt={class:"px-4 py-3 text-sm"},dt=t("span",{class:"text-orange-500 hover:text-orange-700 px-2 py-1 font-bold cursor-pointer"},"Edit",-1),xt={__name:"Index",props:{candidates:Object,filters:Object},setup(_){const e=h({search:"",trashed:null});u(e,S(function(){p.Inertia.get(route("candidates.index"),N(e),{preserveState:!0})},900));const x=()=>{e=V(e,()=>null)};return(c,o)=>(n(),m(C,{title:"Candidates"},{header:d(()=>[B]),default:d(()=>[t("div",F,[t("div",L,[t("div",null,[t("div",T,[t("div",j,[t("div",A,[i(t("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).trashed=s),class:"rounded-l py-1 w-full border-r-0"},U,512),[[f,a(e).trashed]])]),t("div",$,[i(t("input",{class:"relative w-full px-4 py-1 rounded-r -focus:ring border",autocomplete:"off",type:"text",name:"search",placeholder:"Search\u2026","onUpdate:modelValue":o[1]||(o[1]=s=>a(e).search=s)},null,512),[[y,a(e).search]])]),t("button",{class:"ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500",type:"button",onClick:o[2]||(o[2]=s=>x())},"Reset")]),t("button",{class:"flex ml-auto text-white bg-orange-600 border-0 py-1 px-4 focus:outline-none hover:bg-orange-800 rounded",onClick:o[3]||(o[3]=s=>a(p.Inertia).visit(c.route("candidates.create")))},"Add New")])]),t("div",M,[t("table",O,[P,t("tbody",R,[(n(!0),r(g,null,b(_.candidates.data,s=>(n(),r("tr",{key:s.id,class:"text-gray-700"},[t("td",W,[t("span",q,[t("span",z,"# - "+l(s.id),1)])]),t("td",G,[t("span",H,[t("span",J,l(s.first_name),1),K])]),t("td",Q,[t("span",X,[t("span",Y,l(s.last_name),1),Z])]),t("td",tt,[t("span",st,[t("span",et,l(s.address),1),t("span",ot,l(s.phone_number),1)])]),t("td",at,[s.statuts==1?(n(),r("span",lt,"New")):w("",!0)]),t("td",nt,[v(a(k),{href:c.route("candidates.show",s.id),active:"",class:"text-sm text-gray-700 block"},{default:d(()=>[dt]),_:2},1032,["href"])])]))),128))])])])])])]),_:1}))}};export{xt as default};
