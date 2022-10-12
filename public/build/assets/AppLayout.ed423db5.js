import{o,e as a,a as e,d as M,j as x,k as L,l as N,g as i,n as f,f as p,t as y,m as k,p as D,q as E,r as m,s as j,v as B,x as z,b as l,w as r,T as O,c as _,L as C,H as I,i as c,F as $,h as A,y as P}from"./app.77cd0226.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const H={},J={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),q=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[R,q];function G(d,n){return o(),a("svg",J,U)}const K=V(H,[["render",G]]),Q={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},W={class:"flex items-center justify-between flex-wrap"},X={class:"w-0 flex-1 flex items-center min-w-0"},Y={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Z],te={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},se=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),oe=[se],re={class:"ml-3 font-medium text-sm text-white truncate"},ne={class:"shrink-0 sm:ml-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ie=[ae],le={__name:"Banner",setup(d){const n=M(!0),s=x(()=>{var t;return((t=L().props.value.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=L().props.value.jetstream.flash)==null?void 0:t.banner)||""});return N(h,async()=>{n.value=!0}),(t,v)=>(o(),a("div",null,[n.value&&i(h)?(o(),a("div",{key:0,class:f({"bg-indigo-500":i(s)=="success","bg-red-700":i(s)=="danger"})},[e("div",Q,[e("div",W,[e("div",X,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(s)=="success","bg-red-600":i(s)=="danger"}])},[i(s)=="success"?(o(),a("svg",Y,ee)):p("",!0),i(s)=="danger"?(o(),a("svg",te,oe)):p("",!0)],2),e("p",re,y(i(h)),1)]),e("div",ne,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(s)=="success","hover:bg-red-600 focus:bg-red-600":i(s)=="danger"}]),"aria-label":"Dismiss",onClick:v[0]||(v[0]=k(u=>n.value=!1,["prevent"]))},ie,2)])])])],2)):p("",!0)]))}},de={class:"relative"},F={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(d){const n=d;let s=M(!1);const h=u=>{s.value&&u.key==="Escape"&&(s.value=!1)};D(()=>document.addEventListener("keydown",h)),E(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[n.width.toString()]),v=x(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(u,g)=>(o(),a("div",de,[e("div",{onClick:g[0]||(g[0]=T=>j(s)?s.value=!i(s):s=!i(s))},[m(u.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:g[1]||(g[1]=T=>j(s)?s.value=!1:s=!1)},null,512),[[z,i(s)]]),l(O,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[B(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(t),i(v)]]),style:{display:"none"},onClick:g[2]||(g[2]=T=>j(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[m(u.$slots,"content")],2)],2),[[z,i(s)]])]),_:3})]))}},ce={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ue=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(d){return(n,s)=>(o(),a("div",null,[d.as=="button"?(o(),a("button",ce,[m(n.$slots,"default")])):d.as=="a"?(o(),a("a",{key:1,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[m(n.$slots,"default")],8,ue)):(o(),_(i(C),{key:2,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[m(n.$slots,"default")]),_:3},8,["href"]))]))}},S={__name:"NavLink",props:{href:String,active:Boolean},setup(d){const n=d,s=x(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,t)=>(o(),_(i(C),{href:d.href,class:f(i(s))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(d){const n=d,s=x(()=>n.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,t)=>(o(),a("div",null,[d.as=="button"?(o(),a("button",{key:0,class:f([i(s),"w-full text-left"])},[m(h.$slots,"default")],2)):(o(),_(i(C),{key:1,href:d.href,class:f(i(s))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},me={class:"flex justify-between h-16"},ge={class:"flex"},_e={class:"shrink-0 flex items-center"},ve={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be=c(" Dashboard "),ye={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},we=c(" Candidates "),xe={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},ke=c(" Jobs "),$e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Se=c(" Organizations "),Ce={class:"hidden sm:flex sm:items-center sm:ml-6"},je={class:"ml-3 relative"},Me={class:"inline-flex rounded-md"},Te={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},Le=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Be={class:"w-60"},ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Ae=c(" Team Settings "),Pe=c(" Create New Team "),Fe=e("div",{class:"border-t border-gray-100"},null,-1),Ne=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),De=["onSubmit"],Ee={class:"flex items-center"},Oe={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Ie=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ve=[Ie],He={class:"ml-3 relative"},Je={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Re=["src","alt"],qe={key:1,class:"inline-flex rounded-md"},Ue={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Ge=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Qe=c(" Profile "),We=c(" API Tokens "),Xe=e("div",{class:"border-t border-gray-100"},null,-1),Ye=["onSubmit"],Ze=c(" Log Out "),et={class:"-mr-2 flex items-center sm:hidden"},tt={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},st={class:"pt-2 pb-3 space-y-1"},ot=c(" Dashboard "),rt={class:"pt-4 pb-1 border-t border-gray-200"},nt={class:"flex items-center px-4"},at={key:0,class:"shrink-0 mr-3"},it=["src","alt"],lt={class:"font-medium text-base text-gray-800"},dt={class:"font-medium text-sm text-gray-500"},ct={class:"mt-3 space-y-1"},ut=c(" Profile "),ht=c(" API Tokens "),pt=["onSubmit"],ft=c(" Log Out "),mt=e("div",{class:"border-t border-gray-200"},null,-1),gt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),_t=c(" Team Settings "),vt=c(" Create New Team "),bt=e("div",{class:"border-t border-gray-200"},null,-1),yt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),wt=["onSubmit"],xt={class:"flex items-center"},kt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},$t=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),St=[$t],Ct={key:0,class:"bg-white shadow"},jt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Lt={__name:"AppLayout",props:{title:String},setup(d){const n=M(!1),s=t=>{P.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{P.Inertia.post(route("logout"))};return(t,v)=>(o(),a("div",null,[l(i(I),{title:d.title},null,8,["title"]),l(le),e("div",he,[e("nav",pe,[e("div",fe,[e("div",me,[e("div",ge,[e("div",_e,[l(i(C),{href:t.route("dashboard")},{default:r(()=>[l(K,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ve,[l(S,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[be]),_:1},8,["href","active"])]),e("div",ye,[l(S,{href:t.route("candidates.index"),active:t.route().current("candidates")},{default:r(()=>[we]),_:1},8,["href","active"])]),e("div",xe,[l(S,{href:t.route("jobs.index"),active:t.route().current("candidates")},{default:r(()=>[ke]),_:1},8,["href","active"])]),e("div",$e,[l(S,{href:t.route("organizations.index"),active:t.route().current("candidates")},{default:r(()=>[Se]),_:1},8,["href","active"])])]),e("div",Ce,[e("div",je,[t.$page.props.jetstream.hasTeamFeatures?(o(),_(F,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",Me,[e("button",Te,[c(y(t.$page.props.user.current_team.name)+" ",1),Le])])]),content:r(()=>[e("div",Be,[t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:0},[ze,l(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:r(()=>[Ae]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),_(w,{key:0,href:t.route("teams.create")},{default:r(()=>[Pe]),_:1},8,["href"])):p("",!0),Fe,Ne,(o(!0),a($,null,A(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(g=>s(u),["prevent"])},[l(w,{as:"button"},{default:r(()=>[e("div",Ee,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",Oe,Ve)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,De))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",He,[l(F,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),a("button",Je,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Re)])):(o(),a("span",qe,[e("button",Ue,[c(y(t.$page.props.user.name)+" ",1),Ge])]))]),content:r(()=>[Ke,l(w,{href:t.route("profile.show")},{default:r(()=>[Qe]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(w,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[We]),_:1},8,["href"])):p("",!0),Xe,e("form",{onSubmit:k(h,["prevent"])},[l(w,{as:"button"},{default:r(()=>[Ze]),_:1})],40,Ye)]),_:1})])]),e("div",et,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:v[0]||(v[0]=u=>n.value=!n.value)},[(o(),a("svg",tt,[e("path",{class:f({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",st,[l(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[ot]),_:1},8,["href","active"])]),e("div",rt,[e("div",nt,[t.$page.props.jetstream.managesProfilePhotos?(o(),a("div",at,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,it)])):p("",!0),e("div",null,[e("div",lt,y(t.$page.props.user.name),1),e("div",dt,y(t.$page.props.user.email),1)])]),e("div",ct,[l(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[ut]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[ht]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:k(h,["prevent"])},[l(b,{as:"button"},{default:r(()=>[ft]),_:1})],40,pt),t.$page.props.jetstream.hasTeamFeatures?(o(),a($,{key:1},[mt,gt,l(b,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[_t]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),_(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[vt]),_:1},8,["href","active"])):p("",!0),bt,yt,(o(!0),a($,null,A(t.$page.props.user.all_teams,u=>(o(),a("form",{key:u.id,onSubmit:k(g=>s(u),["prevent"])},[l(b,{as:"button"},{default:r(()=>[e("div",xt,[u.id==t.$page.props.user.current_team_id?(o(),a("svg",kt,St)):p("",!0),e("div",null,y(u.name),1)])]),_:2},1024)],40,wt))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),a("header",Ct,[e("div",jt,[m(t.$slots,"header")])])):p("",!0),e("main",null,[m(t.$slots,"default")])])]))}};export{Lt as _,S as a,F as b};