import{u,l as h,o as l,c as f,w as r,a as t,v as c,D as m,g as a,E as y,y as p,e as d,h as g,F as b,t as n,f as w,b as v,L as k}from"./app.6e8462a2.js";import{_ as S}from"./AppLayout.eb1cb4dd.js";import{t as C,p as V,m as B}from"./mapValues.fd3cfb2f.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./_defineProperty.0f3cf0ee.js";const N=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Organizations ",-1),T={class:"py-12"},j={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},A={class:"flex mb-4 w-full justify-between"},D={class:"flex flex-row w-3/5"},E={class:"w-44"},F=t("option",{value:null},"STATUS",-1),I=t("option",{value:"0"},"With Trashed",-1),L=t("option",{value:"1"},"Paid",-1),O=[F,I,L],U={class:"flex w-full bg-white shadow rounded"},$={class:"overflow-x-auto w-full"},z={class:"w-full whitespace-no-wrap"},M=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 borganization-b"},[t("th",{class:"px-4 py-3"},"#"),t("th",{class:"px-4 py-3"},"Company"),t("th",{class:"px-4 py-3"},"Contact"),t("th",{class:"px-4 py-3"},"Status"),t("th",{class:"px-4 py-3"},"Action")])],-1),P={class:"bg-white divide-y"},R={class:"px-4 py-3 text-sm"},W={class:"flex flex-col"},q={class:"mb-1"},G={class:"px-4 py-3 text-sm"},H={class:"flex flex-row"},J={class:"mb-1"},K=t("span",null,null,-1),Q={class:"px-4 py-3 text-sm"},X={class:"flex flex-col"},Y={class:"mb-1"},Z={class:"font-bold text-xs"},tt={class:"px-4 py-3 text-sm"},st={key:0,class:"p-1 text-xs bg-orange-100 text-orange-500 rounded"},et={class:"px-4 py-3 text-sm"},ot=t("span",{class:"text-orange-500 hover:text-orange-700 px-2 py-1 font-bold cursor-pointer"},"Edit",-1),it={__name:"Index",props:{organizations:Object,filters:Object},setup(_){const e=u({search:"",trashed:null});h(e,C(function(){p.Inertia.get(route("organizations.index"),V(e),{preserveState:!0})},900));const x=()=>{e=B(e,()=>null)};return(i,o)=>(l(),f(S,{title:"organizations"},{header:r(()=>[N]),default:r(()=>[t("div",T,[t("div",j,[t("div",null,[t("div",A,[t("div",D,[t("div",E,[c(t("select",{"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).trashed=s),class:"rounded-l py-1 w-full border-r-0"},O,512),[[m,a(e).trashed]])]),t("div",U,[c(t("input",{class:"relative w-full px-4 py-1 rounded-r -focus:ring border",autocomplete:"off",type:"text",name:"search",placeholder:"Search\u2026","onUpdate:modelValue":o[1]||(o[1]=s=>a(e).search=s)},null,512),[[y,a(e).search]])]),t("button",{class:"ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500",type:"button",onClick:o[2]||(o[2]=s=>x())},"Reset")]),t("button",{class:"flex ml-auto text-white bg-orange-600 border-0 py-1 px-4 focus:outline-none hover:bg-orange-800 rounded",onClick:o[3]||(o[3]=s=>a(p.Inertia).visit(i.route("organizations.create")))},"Add New")])]),t("div",$,[t("table",z,[M,t("tbody",P,[(l(!0),d(b,null,g(_.organizations.data,s=>(l(),d("tr",{key:s.id,class:"text-gray-700"},[t("td",R,[t("span",W,[t("span",q,"# - "+n(s.id),1)])]),t("td",G,[t("span",H,[t("span",J,n(s.name),1),K])]),t("td",Q,[t("span",X,[t("span",Y,n(s.address),1),t("span",Z,n(s.phone_number),1)])]),t("td",tt,[s.statuts==1?(l(),d("span",st,"New")):w("",!0)]),t("td",et,[v(a(k),{href:i.route("organizations.show",s.id),active:"",class:"text-sm text-gray-700 block"},{default:r(()=>[ot]),_:2},1032,["href"])])]))),128))])])])])])]),_:1}))}};export{it as default};
