import{u as F,j as x,J as _,o as p,e as c,b as a,g as l,w as d,F as h,H as w,a as o,v as y,E as v,f as N,n as k,m as U,i as b}from"./app.010375be.js";import{J as C}from"./AuthenticationCard.93f0a020.js";import{_ as B}from"./Button.ccd0474e.js";import{_ as i,a as m}from"./InputError.f0959b51.js";import{_ as r}from"./Label.3e35649d.js";import{_ as S}from"./Textarea.f19b2c16.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $=o("div",{class:"mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center transition-all duration-500 hover:scale-[1.05]"},[o("a",{href:"/",title:"home"},[o("span",{class:"text-blue-800"},"jini"),b(),o("span",{class:"text-orange-600"},"Talent")])],-1),q=["onSubmit"],j=["name"],z=["name","id"],E=["name"],L={class:"w-full md:grid md:grid-cols-2 gap-2 mt-4"},A={class:"mt-4"},J={class:"flex items-center justify-end mt-4"},T=b(" Subscribe "),G={__name:"Uploadcv",props:{status:String,canLogin:Boolean,canRegister:Boolean,honeypot:Object},setup(n){const u=n,e=F({first_name:"",last_name:"",email:"",phone_number:"+1",summary:"",country:"",city:"",address:"",resume:null,[u.honeypot.nameFieldName]:"",[u.honeypot.validFromFieldName]:u.honeypot.encryptedValidFrom}),g=()=>{e.post(route("public.storecv"),{onFinish:()=>e.reset(),onError:f=>console.error(f)})};return x(()=>u.status==="verification-link-sent"),(f,s)=>{const V=_("BreezeLabel");return p(),c(h,null,[a(l(w),{title:"Submit your Cv for Free"}),a(C,null,{logo:d(()=>[$]),default:d(()=>[o("form",{onSubmit:U(g,["prevent"])},[n.honeypot.enabled?(p(),c("div",{key:0,name:`${n.honeypot.nameFieldName}_wrap`,style:{display:"none"}},[y(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>l(e)[n.honeypot.nameFieldName]=t),name:n.honeypot.nameFieldName,id:n.honeypot.nameFieldName},null,8,z),[[v,l(e)[n.honeypot.nameFieldName]]]),y(o("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>l(e)[n.honeypot.validFromFieldName]=t),name:n.honeypot.validFromFieldName},null,8,E),[[v,l(e)[n.honeypot.validFromFieldName]]])],8,j)):N("",!0),o("div",null,[a(r,{for:"first_name",value:"First Name"}),a(i,{id:"first_name",modelValue:l(e).first_name,"onUpdate:modelValue":s[2]||(s[2]=t=>l(e).first_name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.first_name},null,8,["message"])]),o("div",null,[a(r,{for:"last_name",value:"Last Name"}),a(i,{id:"last_name",modelValue:l(e).last_name,"onUpdate:modelValue":s[3]||(s[3]=t=>l(e).last_name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.last_name},null,8,["message"])]),o("div",null,[a(r,{for:"phone_number",value:"Phone Number"}),a(i,{id:"phone_number",modelValue:l(e).phone_number,"onUpdate:modelValue":s[4]||(s[4]=t=>l(e).phone_number=t),type:"tel",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.phone_number},null,8,["message"])]),o("div",null,[a(r,{for:"email",value:"Email"}),a(i,{id:"email",modelValue:l(e).email,"onUpdate:modelValue":s[5]||(s[5]=t=>l(e).email=t),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.email},null,8,["message"])]),o("div",L,[o("div",null,[a(r,{for:"country",value:"Country"}),a(i,{id:"country",modelValue:l(e).country,"onUpdate:modelValue":s[6]||(s[6]=t=>l(e).country=t),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.country},null,8,["message"])]),o("div",null,[a(r,{for:"city",value:"City"}),a(i,{id:"city",modelValue:l(e).city,"onUpdate:modelValue":s[7]||(s[7]=t=>l(e).city=t),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.city},null,8,["message"])])]),o("div",null,[a(r,{for:"address",value:"Full Address"}),a(i,{id:"address",modelValue:l(e).address,"onUpdate:modelValue":s[8]||(s[8]=t=>l(e).address=t),type:"tel",class:"mt-1 block w-full"},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.address},null,8,["message"])]),o("div",null,[a(r,{for:"sumary",value:"Summary"}),a(S,{id:"sumary",modelValue:l(e).summary,"onUpdate:modelValue":s[9]||(s[9]=t=>l(e).summary=t),class:"mt-1 block w-full text-sm",rows:"5",placehoder:"Any Sumamry?..."},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.summary},null,8,["message"])]),o("div",A,[a(V,{for:"afile",value:"Upoload Driver license"}),o("input",{id:"afile",type:"file",onInput:s[10]||(s[10]=t=>l(e).resume=t.target.files[0]),ref:"photo",accept:".pdf",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,544)]),o("div",J,[a(B,{class:k({"opacity-25":l(e).processing}),disabled:l(e).processing},{default:d(()=>[T]),_:1},8,["class","disabled"])])],40,q)]),_:1})],64)}}};export{G as default};
