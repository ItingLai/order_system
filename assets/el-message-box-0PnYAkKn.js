import{be as Q,a3 as $,ag as be,_ as ye,d as Ce,bf as he,E as Ee,bg as Be,bh as we,c as w,H as M,L as Me,bi as x,v as _,D as ee,J as ke,K as Se,bj as Te,l as k,o as f,e as v,w as m,n as r,z as ne,a4 as z,r as P,g as S,A as R,x as p,ar as D,m as C,a as U,p as K,h as Ie,S as N,R as j,ad as Ae,U as Re,al as le,t as re,bk as ie,bl as se,Y as $e,ap as Oe,b0 as oe,ak as te}from"./index-z1hJ5Cph.js";import{E as Ve}from"./el-button-O8kHkmLi.js";import{E as Le}from"./el-input-d0ib9Cgp.js";import{E as ze,u as Pe,a as De,b as Fe}from"./el-overlay-X1WuJlu_.js";import{i as He}from"./index-6YRnAls-.js";const q="_trap-focus-children",h=[],ae=e=>{if(h.length===0)return;const n=h[h.length-1][q];if(n.length>0&&e.code===be.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,i=e.target===n[0],l=e.target===n[n.length-1];i&&a&&(e.preventDefault(),n[n.length-1].focus()),l&&!a&&(e.preventDefault(),n[0].focus())}},Ue={beforeMount(e){e[q]=Q(e),h.push(e),h.length<=1&&document.addEventListener("keydown",ae)},updated(e){$(()=>{e[q]=Q(e)})},unmounted(){h.shift(),h.length===0&&document.removeEventListener("keydown",ae)}},Ke=Ce({name:"ElMessageBox",directives:{TrapFocus:Ue},components:{ElButton:Ve,ElFocusTrap:he,ElInput:Le,ElOverlay:ze,ElIcon:Ee,...Be},inheritAttrs:!1,props:{buttonSize:{type:String,validator:He},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:a,zIndex:i,ns:l,size:o}=we("message-box",w(()=>e.buttonSize)),{t:d}=a,{nextZIndex:c}=i,y=M(!1),s=Me({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:c()}),F=w(()=>{const t=s.type;return{[l.bm("icon",t)]:t&&x[t]}}),H=_(),u=_(),ue=w(()=>s.icon||x[s.type]||""),de=w(()=>!!s.message),E=M(),G=M(),I=M(),V=M(),X=M(),fe=w(()=>s.confirmButtonClass);ee(()=>s.inputValue,async t=>{await $(),e.boxType==="prompt"&&t!==null&&W()},{immediate:!0}),ee(()=>y.value,t=>{var g,B;t&&(e.boxType!=="prompt"&&(s.autofocus?I.value=(B=(g=X.value)==null?void 0:g.$el)!=null?B:E.value:I.value=E.value),s.zIndex=c()),e.boxType==="prompt"&&(t?$().then(()=>{var Z;V.value&&V.value.$el&&(s.autofocus?I.value=(Z=ge())!=null?Z:E.value:I.value=E.value)}):(s.editorErrorMessage="",s.validateError=!1))});const ce=w(()=>e.draggable);Pe(E,G,ce),ke(async()=>{await $(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),Se(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){y.value&&(y.value=!1,$(()=>{s.action&&n("action",s.action)}))}const J=()=>{e.closeOnClickModal&&L(s.distinguishCancelAndClose?"close":"cancel")},me=Fe(J),pe=t=>{if(s.inputType!=="textarea")return t.preventDefault(),L("confirm")},L=t=>{var g;e.boxType==="prompt"&&t==="confirm"&&!W()||(s.action=t,s.beforeClose?(g=s.beforeClose)==null||g.call(s,t,s,A):A())},W=()=>{if(e.boxType==="prompt"){const t=s.inputPattern;if(t&&!t.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;const g=s.inputValidator;if(typeof g=="function"){const B=g(s.inputValue);if(B===!1)return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;if(typeof B=="string")return s.editorErrorMessage=B,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},ge=()=>{const t=V.value.$refs;return t.input||t.textarea},Y=()=>{L("close")},ve=()=>{e.closeOnPressEscape&&Y()};return e.lockScroll&&De(y),{...Te(s),ns:l,overlayEvent:me,visible:y,hasMessage:de,typeClass:F,contentId:H,inputId:u,btnSize:o,iconComponent:ue,confirmButtonClasses:fe,rootRef:E,focusStartRef:I,headerRef:G,inputRef:V,confirmRef:X,doClose:A,handleClose:Y,onCloseRequested:ve,handleWrapperClick:J,handleInputEnter:pe,handleAction:L,t:d}}}),Ne=["aria-label","aria-describedby"],je=["aria-label"],qe=["id"];function Ge(e,n,a,i,l,o){const d=k("el-icon"),c=k("close"),y=k("el-input"),s=k("el-button"),F=k("el-focus-trap"),H=k("el-overlay");return f(),v(Ae,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[j(C(H,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[C(F,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ne(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=z(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(f(),U("div",{key:0,ref:"headerRef",class:r(e.ns.e("header"))},[p("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(f(),v(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),v(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),p("span",null,R(e.title),1)],2),e.showClose?(f(),U("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=D(z(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[C(d,{class:r(e.ns.e("close"))},{default:m(()=>[C(c)]),_:1},8,["class"])],42,je)):S("v-if",!0)],2)):S("v-if",!0),p("div",{id:e.contentId,class:r(e.ns.e("content"))},[p("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(f(),v(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(f(),v(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),e.hasMessage?(f(),U("div",{key:1,class:r(e.ns.e("message"))},[Ie(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(f(),v(P(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(f(),v(P(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[K(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):S("v-if",!0)],2),j(p("div",{class:r(e.ns.e("input"))},[C(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:D(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:r(e.ns.e("errormsg")),style:ne({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[N,e.showInput]])],10,qe),p("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(f(),v(s,{key:0,loading:e.cancelButtonLoading,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=D(z(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[K(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):S("v-if",!0),j(C(s,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=D(z(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[K(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[N,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,Ne)]),_:3},8,["z-index","overlay-class","mask"]),[[N,e.visible]])]),_:3})}var Xe=ye(Ke,[["render",Ge],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const O=new Map,Je=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),te(e.appendTo)&&(n=e.appendTo),te(n)||(n=document.body)),n},We=(e,n,a=null)=>{const i=C(Xe,e,oe(e.message)||re(e.message)?{default:oe(e.message)?e.message:()=>e.message}:null);return i.appContext=a,ie(i,n),Je(e).appendChild(n.firstElementChild),i.component},Ye=()=>document.createElement("div"),Ze=(e,n)=>{const a=Ye();e.onVanish=()=>{ie(null,a),O.delete(l)},e.onAction=o=>{const d=O.get(l);let c;e.showInput?c={value:l.inputValue,action:o}:c=o,e.callback?e.callback(c,i.proxy):o==="cancel"||o==="close"?e.distinguishCancelAndClose&&o!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(c)};const i=We(e,a,n),l=i.proxy;for(const o in e)se(e,o)&&!se(l.$props,o)&&(l[o]=e[o]);return l.visible=!0,l};function T(e,n=null){if(!Re)return Promise.reject();let a;return le(e)||re(e)?e={message:e}:a=e.callback,new Promise((i,l)=>{const o=Ze(e,n??T._context);O.set(o,{options:e,callback:a,resolve:i,reject:l})})}const Qe=["alert","confirm","prompt"],xe={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Qe.forEach(e=>{T[e]=_e(e)});function _e(e){return(n,a,i,l)=>{let o="";return $e(a)?(i=a,o=""):Oe(a)?o="":o=a,T(Object.assign({title:o,message:n,type:"",...xe[e]},i,{boxType:e}),l)}}T.close=()=>{O.forEach((e,n)=>{n.doClose()}),O.clear()};T._context=null;const b=T;b.install=e=>{b._context=e._context,e.config.globalProperties.$msgbox=b,e.config.globalProperties.$messageBox=b,e.config.globalProperties.$alert=b.alert,e.config.globalProperties.$confirm=b.confirm,e.config.globalProperties.$prompt=b.prompt};const an=b;export{an as E};