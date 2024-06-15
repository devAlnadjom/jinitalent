import{_ as s}from"./NavLink.b08bf79b.js";import{o as d,e as m,a as e,t as l,b as o,w as r,i as n}from"./app.24b97839.js";const h={class:"flex justify-center gap-4 items-center"},p={class:"flex"},u={class:"font-semibold text-xl text-gray-800 leading-tight"},f={class:"flex-1 flex items-center justify-end"},v={class:"hidden space-x-4 p-2 sm:-my-px sm:ml-6 sm:flex hover:bg-orange-50 cursor-pointer"},x=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mr-2 inline-flex"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})],-1),_=e("span",{class:"inline-flex"},"Informations de bases",-1),g={class:"hidden space-x-4 p-2 sm:-my-px sm:ml-6 sm:flex hover:bg-orange-50 cursor-pointer"},w=n(" Education "),b={class:"hidden space-x-4 p-2 sm:-my-px sm:ml-6 sm:flex hover:bg-orange-50 cursor-pointer"},k=n(" Experiences "),y=e("span",{class:"flex-1 mr-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})])],-1),C={__name:"Submenu",props:{label:{default:"Informations de base"},btnLabel:{default:"Ajouter"}},emits:["addNew"],setup(a,{emit:c}){return(t,i)=>(d(),m("div",h,[e("div",p,[e("h2",u,l(a.label||"Informations CV"),1)]),e("div",f,[e("div",v,[o(s,{href:t.route("portal.cv.index"),active:t.route().current("portal.cv.index")},{default:r(()=>[x,_]),_:1},8,["href","active"])]),e("div",g,[o(s,{href:t.route("portal.cv.education"),active:t.route().current("portal.cv.education")},{default:r(()=>[w]),_:1},8,["href","active"])]),e("div",b,[o(s,{href:t.route("portal.cv.experience"),active:t.route().current("portal.cv.experience")},{default:r(()=>[k]),_:1},8,["href","active"])]),e("button",{onClick:i[0]||(i[0]=j=>c("addNew")),class:"hidden space-x-4 p-2 px-4 sm:-my-px sm:ml-6 sm:flex rounded border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"},[y,n(" "+l(a.btnLabel),1)])])]))}};export{C as default};
