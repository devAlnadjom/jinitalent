import{d as l,p as c,o,e as r,v as i,x as d,a as m,t as p}from"./app.6e8462a2.js";const f=["value"],v={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(t,{expose:s}){const e=l(null);return c(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(u,a)=>(o(),r("input",{ref_key:"input",ref:e,class:"text-gray-900 border-gray-300 focus:border-orange-200 focus:ring focus:ring-orange-100 focus:ring-opacity-50 rounded-md shadow-sm",value:t.modelValue,onInput:a[0]||(a[0]=n=>u.$emit("update:modelValue",n.target.value))},null,40,f))}},g={class:"text-sm text-red-600"},h={__name:"InputError",props:{message:String},setup(t){return(s,e)=>i((o(),r("div",null,[m("p",g,p(t.message),1)],512)),[[d,t.message]])}};export{v as _,h as a};