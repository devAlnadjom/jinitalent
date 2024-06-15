import{u as _,o as c,e as f,b as e,g as o,w as l,F as w,H as g,a as t,f as h,L as v,n as y,j as V,i as u}from"./app.9a0ee57d.js";import{J as k}from"./AuthenticationCard.4beba9ef.js";import{_ as b}from"./AuthenticationCardLogo.7aa16e5d.js";import{_ as x}from"./Button.35733636.js";import{_ as d}from"./Input.4153cbf4.js";import{_ as m}from"./InputError.4f4e6aba.js";import{_ as $}from"./Checkbox.73c33d2a.js";import{_ as i}from"./Label.f2ffe401.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C=["onSubmit"],P={class:"mt-4"},q={class:"mt-4"},F={class:"mt-4"},N={key:0,class:"mt-4"},U={class:"flex items-center"},j={class:"ml-2"},A=u(" I agree to the "),B=["href"],S=u(" and "),T=["href"],E={class:"flex items-center justify-end mt-4"},H=u(" Already registered? "),J=u(" Register "),W={__name:"Register",setup(L){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(n,a)=>(c(),f(w,null,[e(o(g),{title:"Cr\xE9er un compte"}),e(k,null,{logo:l(()=>[e(b)]),default:l(()=>[t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(d,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),t("div",P,[e(i,{for:"email",value:"Email"}),e(d,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",q,[e(i,{for:"password",value:"Password"}),e(d,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",F,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",N,[e(i,{for:"terms"},{default:l(()=>[t("div",U,[e($,{id:"terms",checked:o(s).terms,"onUpdate:checked":a[4]||(a[4]=r=>o(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",j,[A,t("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,B),S,t("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,T)])]),e(m,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",E,[e(o(v),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[H]),_:1},8,["href"]),e(x,{class:y(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[J]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{W as default};