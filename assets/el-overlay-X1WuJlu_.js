import{J as X,bC as D,K as I,B as E,bd as z,aw as N,u as L,bD as U,U as $,bs as C,D as A,br as F,bE as K,bF as j,bG as G,b6 as f,b as J,W as x,d as V,m as q,bH as v,h as k,bI as Q}from"./index-z1hJ5Cph.js";import{a as Z}from"./scroll-7viUf7_N.js";const ae=(e,o,n)=>{let s={offsetX:0,offsetY:0};const a=l=>{const u=l.clientX,r=l.clientY,{offsetX:d,offsetY:m}=s,i=e.value.getBoundingClientRect(),p=i.left,b=i.top,S=i.width,T=i.height,Y=document.documentElement.clientWidth,O=document.documentElement.clientHeight,B=-p+d,H=-b+m,P=Y-p-S+d,W=O-b-T+m,y=g=>{const w=Math.min(Math.max(d+g.clientX-u,B),P),M=Math.min(Math.max(m+g.clientY-r,H),W);s={offsetX:w,offsetY:M},e.value&&(e.value.style.transform=`translate(${E(w)}, ${E(M)})`)},h=()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",h)};document.addEventListener("mousemove",y),document.addEventListener("mouseup",h)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",a)},t=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",a)};X(()=>{D(()=>{n.value?c():t()})}),I(()=>{t()})},ce=(e,o={})=>{z(e)||N("[useLockscreen]","You need to pass a ref param to this function");const n=o.ns||L("popup"),s=U(()=>n.bm("parent","hidden"));if(!$||C(document.body,s.value))return;let a=0,c=!1,t="0";const l=()=>{setTimeout(()=>{G(document==null?void 0:document.body,s.value),c&&document&&(document.body.style.width=t)},200)};A(e,u=>{if(!u){l();return}c=!C(document.body,s.value),c&&(t=document.body.style.width),a=Z(n.namespace.value);const r=document.documentElement.clientHeight<document.body.scrollHeight,d=F(document.body,"overflowY");a>0&&(r||d==="scroll")&&c&&(document.body.style.width=`calc(100% - ${a}px)`),K(document.body,s.value)}),j(()=>l())},_=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},R=J({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:x([String,Array,Object])},zIndex:{type:x([String,Number])}}),ee={click:e=>e instanceof MouseEvent},te="overlay";var oe=V({name:"ElOverlay",props:R,emits:ee,setup(e,{slots:o,emit:n}){const s=L(te),a=u=>{n("click",u)},{onClick:c,onMousedown:t,onMouseup:l}=_(e.customMaskEvent?void 0:a);return()=>e.mask?q("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:t,onMouseup:l},[k(o,"default")],v.STYLE|v.CLASS|v.PROPS,["onClick","onMouseup","onMousedown"]):Q("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[k(o,"default")])}});const le=oe;export{le as E,ce as a,_ as b,ae as u};
