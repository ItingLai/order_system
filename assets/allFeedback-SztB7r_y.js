import{b as V,W as Y,X as ee,C as D,H as k,D as R,F as pe,u as q,c as b,d as z,o as m,a as P,h as Z,n as S,f as a,_ as U,I as ge,x as I,m as O,w as W,a7 as fe,E as ae,ar as me,a4 as ze,S as Ne,R as xe,c5 as $e,p as Ee,A as E,j as ve,O as we,i as Q,y as J,e as B,r as be,aG as Ce,a5 as te,ac as ne,bC as Ie,g as G,bv as Te,c6 as le,bw as Me,G as Be,ax as Ke,bI as j,a6 as Fe,J as Ae,bd as oe,aB as X,aS as Ve,aT as Le,k as je}from"./index-z1hJ5Cph.js";import{U as he,C as _e,E as De}from"./el-input-d0ib9Cgp.js";import{i as qe}from"./el-tag-y0BCCjTp.js";import{E as Ue,a as He}from"./el-select-hBCvyf8C.js";import"./el-scrollbar-T1eaASHH.js";import{o as ie,c as re}from"./loading-nuqzq8mj.js";import{c as ue}from"./castArray-03vanRhI.js";import"./use-form-item-vmAXCTid.js";import"./_Uint8Array-bsnH_Esz.js";import"./index-6YRnAls-.js";import"./scroll-7viUf7_N.js";import"./debounce-yb6mxPpC.js";const Pe=()=>Math.floor(Math.random()*1e4),ce=e=>typeof D(e),Oe=V({accordion:Boolean,modelValue:{type:Y([Array,String,Number]),default:()=>ee([])}}),We={[he]:ce,[_e]:ce},ye=Symbol("collapseContextKey"),Je=(e,l)=>{const t=k(ue(e.modelValue)),i=o=>{t.value=o;const c=e.accordion?t.value[0]:t.value;l(he,c),l(_e,c)},n=o=>{if(e.accordion)i([t.value[0]===o?"":o]);else{const c=[...t.value],d=c.indexOf(o);d>-1?c.splice(d,1):c.push(o),i(c)}};return R(()=>e.modelValue,()=>t.value=ue(e.modelValue),{deep:!0}),pe(ye,{activeNames:t,handleItemClick:n}),{activeNames:t,setActiveNames:i}},Re=()=>{const e=q("collapse");return{rootKls:b(()=>e.b())}},Ge=z({name:"ElCollapse"}),Xe=z({...Ge,props:Oe,emits:We,setup(e,{expose:l,emit:t}){const i=e,{activeNames:n,setActiveNames:o}=Je(i,t),{rootKls:c}=Re();return l({activeNames:n,setActiveNames:o}),(d,C)=>(m(),P("div",{class:S(a(c))},[Z(d.$slots,"default")],2))}});var Qe=U(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const Ye=V({title:{type:String,default:""},name:{type:Y([String,Number]),default:()=>Pe()},disabled:Boolean}),Ze=e=>{const l=ge(ye),t=k(!1),i=k(!1),n=k(Pe()),o=b(()=>l==null?void 0:l.activeNames.value.includes(e.name));return{focusing:t,id:n,isActive:o,handleFocus:()=>{setTimeout(()=>{i.value?i.value=!1:t.value=!0},50)},handleHeaderClick:()=>{e.disabled||(l==null||l.handleItemClick(e.name),t.value=!1,i.value=!0)},handleEnterClick:()=>{l==null||l.handleItemClick(e.name)}}},ea=(e,{focusing:l,isActive:t,id:i})=>{const n=q("collapse"),o=b(()=>[n.b("item"),n.is("active",a(t)),n.is("disabled",e.disabled)]),c=b(()=>[n.be("item","header"),n.is("active",a(t)),{focusing:a(l)&&!e.disabled}]),d=b(()=>[n.be("item","arrow"),n.is("active",a(t))]),C=b(()=>n.be("item","wrap")),f=b(()=>n.be("item","content")),h=b(()=>n.b(`content-${a(i)}`)),p=b(()=>n.b(`head-${a(i)}`));return{arrowKls:d,headKls:c,rootKls:o,itemWrapperKls:C,itemContentKls:f,scopedContentId:h,scopedHeadId:p}},aa=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],ta=["id","aria-hidden","aria-labelledby"],na=z({name:"ElCollapseItem"}),sa=z({...na,props:Ye,setup(e,{expose:l}){const t=e,{focusing:i,id:n,isActive:o,handleFocus:c,handleHeaderClick:d,handleEnterClick:C}=Ze(t),{arrowKls:f,headKls:h,rootKls:p,itemWrapperKls:v,itemContentKls:_,scopedContentId:L,scopedHeadId:T}=ea(t,{focusing:i,isActive:o,id:n});return l({isActive:o}),(K,x)=>(m(),P("div",{class:S(a(p))},[I("button",{id:a(T),class:S(a(h)),"aria-expanded":a(o),"aria-controls":a(L),"aria-describedby":a(L),tabindex:K.disabled?-1:0,type:"button",onClick:x[0]||(x[0]=(...$)=>a(d)&&a(d)(...$)),onKeydown:x[1]||(x[1]=me(ze((...$)=>a(C)&&a(C)(...$),["stop","prevent"]),["space","enter"])),onFocus:x[2]||(x[2]=(...$)=>a(c)&&a(c)(...$)),onBlur:x[3]||(x[3]=$=>i.value=!1)},[Z(K.$slots,"title",{},()=>[Ee(E(K.title),1)]),O(a(ae),{class:S(a(f))},{default:W(()=>[O(a(fe))]),_:1},8,["class"])],42,aa),O(a($e),null,{default:W(()=>[xe(I("div",{id:a(L),role:"region",class:S(a(v)),"aria-hidden":!a(o),"aria-labelledby":a(T)},[I("div",{class:S(a(_))},[Z(K.$slots,"default")],2)],10,ta),[[Ne,a(o)]])]),_:3})],2))}});var ke=U(sa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const la=ve(Qe,{CollapseItem:ke}),oa=we(ke),Se=Symbol("elPaginationKey"),ia=V({disabled:Boolean,currentPage:{type:Number,default:1},prevText:{type:String},prevIcon:{type:Q}}),ra={click:e=>e instanceof MouseEvent},ua=["disabled","aria-label","aria-disabled"],ca={key:0},da=z({name:"ElPaginationPrev"}),pa=z({...da,props:ia,emits:ra,setup(e){const l=e,{t}=J(),i=b(()=>l.disabled||l.currentPage<=1);return(n,o)=>(m(),P("button",{type:"button",class:"btn-prev",disabled:a(i),"aria-label":n.prevText||a(t)("el.pagination.prev"),"aria-disabled":a(i),onClick:o[0]||(o[0]=c=>n.$emit("click",c))},[n.prevText?(m(),P("span",ca,E(n.prevText),1)):(m(),B(a(ae),{key:1},{default:W(()=>[(m(),B(be(n.prevIcon)))]),_:1}))],8,ua))}});var ga=U(pa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);const fa=V({disabled:Boolean,currentPage:{type:Number,default:1},pageCount:{type:Number,default:50},nextText:{type:String},nextIcon:{type:Q}}),ma=["disabled","aria-label","aria-disabled"],va={key:0},ba=z({name:"ElPaginationNext"}),Ca=z({...ba,props:fa,emits:["click"],setup(e){const l=e,{t}=J(),i=b(()=>l.disabled||l.currentPage===l.pageCount||l.pageCount===0);return(n,o)=>(m(),P("button",{type:"button",class:"btn-next",disabled:a(i),"aria-label":n.nextText||a(t)("el.pagination.next"),"aria-disabled":a(i),onClick:o[0]||(o[0]=c=>n.$emit("click",c))},[n.nextText?(m(),P("span",va,E(n.nextText),1)):(m(),B(a(ae),{key:1},{default:W(()=>[(m(),B(be(n.nextIcon)))]),_:1}))],8,ma))}});var ha=U(Ca,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);const se=()=>ge(Se,{}),_a=V({pageSize:{type:Number,required:!0},pageSizes:{type:Y(Array),default:()=>ee([10,20,30,40,50,100])},popperClass:{type:String},disabled:Boolean,teleported:Boolean,size:{type:String,values:Ce}}),Pa=z({name:"ElPaginationSizes"}),ya=z({...Pa,props:_a,emits:["page-size-change"],setup(e,{emit:l}){const t=e,{t:i}=J(),n=q("pagination"),o=se(),c=k(t.pageSize);R(()=>t.pageSizes,(f,h)=>{if(!qe(f,h)&&Array.isArray(f)){const p=f.includes(t.pageSize)?t.pageSize:t.pageSizes[0];l("page-size-change",p)}}),R(()=>t.pageSize,f=>{c.value=f});const d=b(()=>t.pageSizes);function C(f){var h;f!==c.value&&(c.value=f,(h=o.handleSizeChange)==null||h.call(o,Number(f)))}return(f,h)=>(m(),P("span",{class:S(a(n).e("sizes"))},[O(a(He),{"model-value":c.value,disabled:f.disabled,"popper-class":f.popperClass,size:f.size,teleported:f.teleported,"validate-event":!1,onChange:C},{default:W(()=>[(m(!0),P(te,null,ne(a(d),p=>(m(),B(a(Ue),{key:p,value:p,label:p+a(i)("el.pagination.pagesize")},null,8,["value","label"]))),128))]),_:1},8,["model-value","disabled","popper-class","size","teleported"])],2))}});var ka=U(ya,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);const Sa=V({size:{type:String,values:Ce}}),za=["disabled"],Na=z({name:"ElPaginationJumper"}),xa=z({...Na,props:Sa,setup(e){const{t:l}=J(),t=q("pagination"),{pageCount:i,disabled:n,currentPage:o,changeEvent:c}=se(),d=k(),C=b(()=>{var p;return(p=d.value)!=null?p:o==null?void 0:o.value});function f(p){d.value=p?+p:""}function h(p){p=Math.trunc(+p),c==null||c(p),d.value=void 0}return(p,v)=>(m(),P("span",{class:S(a(t).e("jump")),disabled:a(n)},[I("span",{class:S([a(t).e("goto")])},E(a(l)("el.pagination.goto")),3),O(a(De),{size:p.size,class:S([a(t).e("editor"),a(t).is("in-pagination")]),min:1,max:a(i),disabled:a(n),"model-value":a(C),"validate-event":!1,label:a(l)("el.pagination.page"),type:"number","onUpdate:modelValue":f,onChange:h},null,8,["size","class","max","disabled","model-value","label"]),I("span",{class:S([a(t).e("classifier")])},E(a(l)("el.pagination.pageClassifier")),3)],10,za))}});var $a=U(xa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);const Ea=V({total:{type:Number,default:1e3}}),wa=["disabled"],Ia=z({name:"ElPaginationTotal"}),Ta=z({...Ia,props:Ea,setup(e){const{t:l}=J(),t=q("pagination"),{disabled:i}=se();return(n,o)=>(m(),P("span",{class:S(a(t).e("total")),disabled:a(i)},E(a(l)("el.pagination.total",{total:n.total})),11,wa))}});var Ma=U(Ta,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);const Ba=V({currentPage:{type:Number,default:1},pageCount:{type:Number,required:!0},pagerCount:{type:Number,default:7},disabled:Boolean}),Ka=["onKeyup"],Fa=["aria-current","aria-label","tabindex"],Aa=["tabindex","aria-label"],Va=["aria-current","aria-label","tabindex"],La=["tabindex","aria-label"],ja=["aria-current","aria-label","tabindex"],Da=z({name:"ElPaginationPager"}),qa=z({...Da,props:Ba,emits:["change"],setup(e,{emit:l}){const t=e,i=q("pager"),n=q("icon"),{t:o}=J(),c=k(!1),d=k(!1),C=k(!1),f=k(!1),h=k(!1),p=k(!1),v=b(()=>{const s=t.pagerCount,r=(s-1)/2,u=Number(t.currentPage),M=Number(t.pageCount);let w=!1,F=!1;M>s&&(u>s-r&&(w=!0),u<M-r&&(F=!0));const A=[];if(w&&!F){const y=M-(s-2);for(let H=y;H<M;H++)A.push(H)}else if(!w&&F)for(let y=2;y<s;y++)A.push(y);else if(w&&F){const y=Math.floor(s/2)-1;for(let H=u-y;H<=u+y;H++)A.push(H)}else for(let y=2;y<M;y++)A.push(y);return A}),_=b(()=>["more","btn-quickprev",n.b(),i.is("disabled",t.disabled)]),L=b(()=>["more","btn-quicknext",n.b(),i.is("disabled",t.disabled)]),T=b(()=>t.disabled?-1:0);Ie(()=>{const s=(t.pagerCount-1)/2;c.value=!1,d.value=!1,t.pageCount>t.pagerCount&&(t.currentPage>t.pagerCount-s&&(c.value=!0),t.currentPage<t.pageCount-s&&(d.value=!0))});function K(s=!1){t.disabled||(s?C.value=!0:f.value=!0)}function x(s=!1){s?h.value=!0:p.value=!0}function $(s){const r=s.target;if(r.tagName.toLowerCase()==="li"&&Array.from(r.classList).includes("number")){const u=Number(r.textContent);u!==t.currentPage&&l("change",u)}else r.tagName.toLowerCase()==="li"&&Array.from(r.classList).includes("more")&&g(s)}function g(s){const r=s.target;if(r.tagName.toLowerCase()==="ul"||t.disabled)return;let u=Number(r.textContent);const M=t.pageCount,w=t.currentPage,F=t.pagerCount-2;r.className.includes("more")&&(r.className.includes("quickprev")?u=w-F:r.className.includes("quicknext")&&(u=w+F)),Number.isNaN(+u)||(u<1&&(u=1),u>M&&(u=M)),u!==w&&l("change",u)}return(s,r)=>(m(),P("ul",{class:S(a(i).b()),onClick:g,onKeyup:me($,["enter"])},[s.pageCount>0?(m(),P("li",{key:0,class:S([[a(i).is("active",s.currentPage===1),a(i).is("disabled",s.disabled)],"number"]),"aria-current":s.currentPage===1,"aria-label":a(o)("el.pagination.currentPage",{pager:1}),tabindex:a(T)}," 1 ",10,Fa)):G("v-if",!0),c.value?(m(),P("li",{key:1,class:S(a(_)),tabindex:a(T),"aria-label":a(o)("el.pagination.prevPages",{pager:s.pagerCount-2}),onMouseenter:r[0]||(r[0]=u=>K(!0)),onMouseleave:r[1]||(r[1]=u=>C.value=!1),onFocus:r[2]||(r[2]=u=>x(!0)),onBlur:r[3]||(r[3]=u=>h.value=!1)},[(C.value||h.value)&&!s.disabled?(m(),B(a(Te),{key:0})):(m(),B(a(le),{key:1}))],42,Aa)):G("v-if",!0),(m(!0),P(te,null,ne(a(v),u=>(m(),P("li",{key:u,class:S([[a(i).is("active",s.currentPage===u),a(i).is("disabled",s.disabled)],"number"]),"aria-current":s.currentPage===u,"aria-label":a(o)("el.pagination.currentPage",{pager:u}),tabindex:a(T)},E(u),11,Va))),128)),d.value?(m(),P("li",{key:2,class:S(a(L)),tabindex:a(T),"aria-label":a(o)("el.pagination.nextPages",{pager:s.pagerCount-2}),onMouseenter:r[4]||(r[4]=u=>K()),onMouseleave:r[5]||(r[5]=u=>f.value=!1),onFocus:r[6]||(r[6]=u=>x()),onBlur:r[7]||(r[7]=u=>p.value=!1)},[(f.value||p.value)&&!s.disabled?(m(),B(a(Me),{key:0})):(m(),B(a(le),{key:1}))],42,La)):G("v-if",!0),s.pageCount>1?(m(),P("li",{key:3,class:S([[a(i).is("active",s.currentPage===s.pageCount),a(i).is("disabled",s.disabled)],"number"]),"aria-current":s.currentPage===s.pageCount,"aria-label":a(o)("el.pagination.currentPage",{pager:s.pageCount}),tabindex:a(T)},E(s.pageCount),11,ja)):G("v-if",!0)],42,Ka))}});var Ua=U(qa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);const N=e=>typeof e!="number",Ha=V({pageSize:Number,defaultPageSize:Number,total:Number,pageCount:Number,pagerCount:{type:Number,validator:e=>D(e)&&Math.trunc(e)===e&&e>4&&e<22&&e%2===1,default:7},currentPage:Number,defaultCurrentPage:Number,layout:{type:String,default:["prev","pager","next","jumper","->","total"].join(", ")},pageSizes:{type:Y(Array),default:()=>ee([10,20,30,40,50,100])},popperClass:{type:String,default:""},prevText:{type:String,default:""},prevIcon:{type:Q,default:()=>Fe},nextText:{type:String,default:""},nextIcon:{type:Q,default:()=>fe},teleported:{type:Boolean,default:!0},small:Boolean,background:Boolean,disabled:Boolean,hideOnSinglePage:Boolean}),Oa={"update:current-page":e=>D(e),"update:page-size":e=>D(e),"size-change":e=>D(e),"current-change":e=>D(e),"prev-click":e=>D(e),"next-click":e=>D(e)},de="ElPagination";var Wa=z({name:de,props:Ha,emits:Oa,setup(e,{emit:l,slots:t}){const{t:i}=J(),n=q("pagination"),o=Be().vnode.props||{},c="onUpdate:currentPage"in o||"onUpdate:current-page"in o||"onCurrentChange"in o,d="onUpdate:pageSize"in o||"onUpdate:page-size"in o||"onSizeChange"in o,C=b(()=>{if(N(e.total)&&N(e.pageCount)||!N(e.currentPage)&&!c)return!1;if(e.layout.includes("sizes")){if(N(e.pageCount)){if(!N(e.total)&&!N(e.pageSize)&&!d)return!1}else if(!d)return!1}return!0}),f=k(N(e.defaultPageSize)?10:e.defaultPageSize),h=k(N(e.defaultCurrentPage)?1:e.defaultCurrentPage),p=b({get(){return N(e.pageSize)?f.value:e.pageSize},set(g){N(e.pageSize)&&(f.value=g),d&&(l("update:page-size",g),l("size-change",g))}}),v=b(()=>{let g=0;return N(e.pageCount)?N(e.total)||(g=Math.max(1,Math.ceil(e.total/p.value))):g=e.pageCount,g}),_=b({get(){return N(e.currentPage)?h.value:e.currentPage},set(g){let s=g;g<1?s=1:g>v.value&&(s=v.value),N(e.currentPage)&&(h.value=s),c&&(l("update:current-page",s),l("current-change",s))}});R(v,g=>{_.value>g&&(_.value=g)});function L(g){_.value=g}function T(g){p.value=g;const s=v.value;_.value>s&&(_.value=s)}function K(){e.disabled||(_.value-=1,l("prev-click",_.value))}function x(){e.disabled||(_.value+=1,l("next-click",_.value))}function $(g,s){g&&(g.props||(g.props={}),g.props.class=[g.props.class,s].join(" "))}return pe(Se,{pageCount:v,disabled:b(()=>e.disabled),currentPage:_,changeEvent:L,handleSizeChange:T}),()=>{var g,s;if(!C.value)return Ke(de,i("el.pagination.deprecationWarning")),null;if(!e.layout||e.hideOnSinglePage&&v.value<=1)return null;const r=[],u=[],M=j("div",{class:n.e("rightwrapper")},u),w={prev:j(ga,{disabled:e.disabled,currentPage:_.value,prevText:e.prevText,prevIcon:e.prevIcon,onClick:K}),jumper:j($a,{size:e.small?"small":"default"}),pager:j(Ua,{currentPage:_.value,pageCount:v.value,pagerCount:e.pagerCount,onChange:L,disabled:e.disabled}),next:j(ha,{disabled:e.disabled,currentPage:_.value,pageCount:v.value,nextText:e.nextText,nextIcon:e.nextIcon,onClick:x}),sizes:j(ka,{pageSize:p.value,pageSizes:e.pageSizes,popperClass:e.popperClass,disabled:e.disabled,teleported:e.teleported,size:e.small?"small":"default"}),slot:(s=(g=t==null?void 0:t.default)==null?void 0:g.call(t))!=null?s:null,total:j(Ma,{total:N(e.total)?0:e.total})},F=e.layout.split(",").map(y=>y.trim());let A=!1;return F.forEach(y=>{if(y==="->"){A=!0;return}A?u.push(w[y]):r.push(w[y])}),$(r[0],n.is("first")),$(r[r.length-1],n.is("last")),A&&u.length>0&&($(u[0],n.is("first")),$(u[u.length-1],n.is("last")),r.push(M)),j("div",{class:[n.b(),n.is("background",e.background),{[n.m("small")]:e.small}]},r)}}});const Ja=ve(Wa),Ra=e=>(Ve("data-v-5cdde5a1"),e=e(),Le(),e),Ga=Ra(()=>I("h1",null,"回饋總覽",-1)),Xa={class:"text"},Qa={class:"text"},Ya={class:"text"},Za={class:"text"},et={class:"text"},at=z({__name:"allFeedback",setup(e){const l=k(1),t=k(0),i=k(1),n=k([]),o=()=>{ie("加載數據中..."),fetch("/api/manage/getFeedbackCount",{headers:{"Content-Type":"application/json"}}).then(d=>d.json()).then(d=>{d.code===200?t.value=d.data.count:X.error("回饋數據加載失敗!")}).catch(()=>{X.error("回饋數據加載失敗!")}).finally(()=>{re()})},c=()=>{ie("加載數據中..."),fetch(`/api/manage/getAllFeedback?page=${l.value}`,{headers:{"Content-Type":"application/json"}}).then(d=>d.json()).then(d=>{d.code===200?n.value=d.data:X.error("回饋數據加載失敗!")}).catch(()=>{X.error("回饋數據加載失敗!")}).finally(()=>{re()})};return Ae(()=>{o(),c()}),R(l,()=>{c()}),(d,C)=>{const f=oa,h=la,p=Ja;return m(),P("div",null,[Ga,O(h,{modelValue:a(i),"onUpdate:modelValue":C[0]||(C[0]=v=>oe(i)?i.value=v:null),accordion:""},{default:W(()=>[(m(!0),P(te,null,ne(a(n),(v,_)=>(m(),B(f,{key:_,title:v.name,name:_},{default:W(()=>[I("div",Xa,"回饋時間: "+E(v.create_at),1),I("div",Qa,"姓名: "+E(v.name),1),I("div",Ya,"電話號碼: "+E(v.telephone),1),I("div",Za,"性別:"+E(v.sex==="male"?"男":"女"),1),I("div",et,"回饋內容:"+E(v.feedback),1)]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"]),O(p,{"current-page":a(l),"onUpdate:currentPage":C[1]||(C[1]=v=>oe(l)?l.value=v:null),layout:"prev, pager, next",total:a(t)},null,8,["current-page","total"])])}}}),ft=je(at,[["__scopeId","data-v-5cdde5a1"]]);export{ft as default};
