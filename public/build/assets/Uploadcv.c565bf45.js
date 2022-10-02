import{d as x,o as c,e as f,u as _,j as F,J as h,b as a,g as l,w as p,F as w,H as N,a as o,v as g,E as v,f as k,n as U,m as C,i as b}from"./app.6e8462a2.js";import{J as S}from"./AuthenticationCard.8ea90641.js";import{_ as $}from"./Button.7a79d192.js";import{_ as u,a as m}from"./InputError.3567aafa.js";import{_ as r}from"./Label.18ca9cea.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B=["value"],q={__name:"Textarea",props:{modelValue:String},emits:["update:modelValue"],setup(n){return x(null),(i,e)=>(c(),f("textarea",{class:"text-gray-900 border-gray-300 focus:border-orange-200 focus:ring focus:ring-orange-100 focus:ring-opacity-50 rounded-md shadow-sm",value:n.modelValue,onInput:e[0]||(e[0]=d=>i.$emit("update:modelValue",d.target.value))},`
    `,40,B))}},j=o("div",{class:"mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center transition-all duration-500 hover:scale-[1.05]"},[o("a",{href:"/",title:"home"},[o("span",{class:"text-blue-800"},"jini"),b(),o("span",{class:"text-orange-600"},"Talent")])],-1),z=["onSubmit"],E=["name"],L=["name","id"],T=["name"],A={class:"w-full md:grid md:grid-cols-2 gap-2 mt-4"},J={class:"mt-4"},D={class:"flex items-center justify-end mt-4"},H=b(" Subscribe "),K={__name:"Uploadcv",props:{status:String,canLogin:Boolean,canRegister:Boolean,honeypot:Object},setup(n){const i=n,e=_({first_name:"",last_name:"",email:"",phone_number:"+1",summary:"",country:"",city:"",address:"",resume:null,[i.honeypot.nameFieldName]:"",[i.honeypot.validFromFieldName]:i.honeypot.encryptedValidFrom}),d=()=>{e.post(route("public.storecv"),{onFinish:()=>e.reset(),onError:y=>console.error(y)})};return F(()=>i.status==="verification-link-sent"),(y,s)=>{const V=h("BreezeLabel");return c(),f(w,null,[a(l(N),{title:"Submit your Cv for Free"}),a(S,null,{logo:p(()=>[j]),default:p(()=>[o("form",{onSubmit:C(d,["prevent"])},[n.honeypot.enabled?(c(),f("div",{key:0,name:`${n.honeypot.nameFieldName}_wrap`,style:{display:"none"}},[g(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>l(e)[n.honeypot.nameFieldName]=t),name:n.honeypot.nameFieldName,id:n.honeypot.nameFieldName},null,8,L),[[v,l(e)[n.honeypot.nameFieldName]]]),g(o("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>l(e)[n.honeypot.validFromFieldName]=t),name:n.honeypot.validFromFieldName},null,8,T),[[v,l(e)[n.honeypot.validFromFieldName]]])],8,E)):k("",!0),o("div",null,[a(r,{for:"first_name",value:"First Name"}),a(u,{id:"first_name",modelValue:l(e).first_name,"onUpdate:modelValue":s[2]||(s[2]=t=>l(e).first_name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.first_name},null,8,["message"])]),o("div",null,[a(r,{for:"last_name",value:"Last Name"}),a(u,{id:"last_name",modelValue:l(e).last_name,"onUpdate:modelValue":s[3]||(s[3]=t=>l(e).last_name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.last_name},null,8,["message"])]),o("div",null,[a(r,{for:"phone_number",value:"Phone Number"}),a(u,{id:"phone_number",modelValue:l(e).phone_number,"onUpdate:modelValue":s[4]||(s[4]=t=>l(e).phone_number=t),type:"tel",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.phone_number},null,8,["message"])]),o("div",null,[a(r,{for:"email",value:"Email"}),a(u,{id:"email",modelValue:l(e).email,"onUpdate:modelValue":s[5]||(s[5]=t=>l(e).email=t),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.email},null,8,["message"])]),o("div",A,[o("div",null,[a(r,{for:"country",value:"Country"}),a(u,{id:"country",modelValue:l(e).country,"onUpdate:modelValue":s[6]||(s[6]=t=>l(e).country=t),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.country},null,8,["message"])]),o("div",null,[a(r,{for:"city",value:"City"}),a(u,{id:"city",modelValue:l(e).city,"onUpdate:modelValue":s[7]||(s[7]=t=>l(e).city=t),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.city},null,8,["message"])])]),o("div",null,[a(r,{for:"address",value:"Full Address"}),a(u,{id:"address",modelValue:l(e).address,"onUpdate:modelValue":s[8]||(s[8]=t=>l(e).address=t),type:"tel",class:"mt-1 block w-full"},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.address},null,8,["message"])]),o("div",null,[a(r,{for:"sumary",value:"Summary"}),a(q,{id:"sumary",modelValue:l(e).summary,"onUpdate:modelValue":s[9]||(s[9]=t=>l(e).summary=t),class:"mt-1 block w-full text-sm",rows:"5",placehoder:"Any Sumamry?..."},null,8,["modelValue"]),a(m,{class:"mt-2",message:l(e).errors.summary},null,8,["message"])]),o("div",J,[a(V,{for:"afile",value:"Upoload Driver license"}),o("input",{id:"afile",type:"file",onInput:s[10]||(s[10]=t=>l(e).resume=t.target.files[0]),ref:"photo",accept:".pdf",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,544)]),o("div",D,[a($,{class:U({"opacity-25":l(e).processing}),disabled:l(e).processing},{default:p(()=>[H]),_:1},8,["class","disabled"])])],40,z)]),_:1})],64)}}};export{K as default};