import{u as _,j as f,o as h,e as x,b as r,g as b,w as m,F as y,H as p,a as t,t as s,i as a}from"./app.010375be.js";import{J as v}from"./AuthenticationCard.93f0a020.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g=t("div",{class:"mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center transition-all duration-500 hover:scale-[1.05]"},[t("a",{href:"/",title:"home"},[t("span",{class:"text-blue-800"},"jini"),a(),t("span",{class:"text-orange-600"},"Talent")])],-1),j={class:"text-xl"},w=a("Dear "),k={class:"font-semibold hover:font-bold duration-500"},C=a("."),N={class:"my-4"},A=a(" We have received your informations. "),B={class:"flex justify-between mt-4 border-b text-gray-600 px-2"},F=t("span",null,"Name",-1),J={class:"text-orange-600 font-semibold"},T={class:"flex justify-between mt-4 border-b text-gray-600 px-2"},V=t("span",null,"Contact",-1),D={class:"text-orange-600"},H={class:"flex justify-between mt-4 border-b text-gray-600 px-2"},O=t("span",null,"Address",-1),W={class:"text-orange-600"},z=t("div",{class:"mt-4 text-gray-600 px-2 text-sm"},[a(" Our system will find the best job for you. You'll receive an email sonner. "),t("br"),a(" An agent can also call you. "),t("br"),a(" If you want to be informed for any update about job, you can just click on the link on your mail. "),t("br"),t("div",{class:"place-items-end mt-4"},[t("span",{class:"font-semibold text-orange-800"}," JiniTalent.")])],-1),G={__name:"ConfirmCv",props:{candidate:Object},setup(e){const u=e;return _({first_name:""}),f(()=>u.status==="verification-link-sent"),(E,I)=>(h(),x(y,null,[r(b(p),{title:"We have received your information."}),r(v,null,{logo:m(()=>[g]),default:m(()=>{var n,o,i,l,c,d;return[t("div",null,[t("h3",j,[w,t("span",k,s((n=e.candidate)==null?void 0:n.first_name)+" "+s((o=e.candidate)==null?void 0:o.last_name),1),C]),t("div",N,[A,t("div",B,[F,t("span",J,s((i=e.candidate)==null?void 0:i.first_name)+" "+s((l=e.candidate)==null?void 0:l.last_name),1)]),t("div",T,[V,t("span",D,s((c=e.candidate)==null?void 0:c.phone_number),1)]),t("div",H,[O,t("span",W,s((d=e.candidate)==null?void 0:d.email),1)]),z])])]}),_:1})],64))}};export{G as default};
