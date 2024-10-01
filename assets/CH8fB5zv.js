import{B,C as q,m as L,o as d,n as y,p as $,w as f,q as j,b as r,s as m,a as l,c as g,F as D,u as z,v as V,x as S,t as I,y as Z,z as W,A as K,r as b,d as Q}from"./DY14INyC.js";import{s as J,a as O,b as F}from"./CfKGKr9G.js";var X=function(e){var t=e.dt;return`
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  `.concat(t("confirmdialog.content.gap"),`;
}

.p-confirmdialog-icon {
    color: `).concat(t("confirmdialog.icon.color"),`;
    font-size: `).concat(t("confirmdialog.icon.size"),`;
    width: `).concat(t("confirmdialog.icon.size"),`;
    height: `).concat(t("confirmdialog.icon.size"),`;
}
`)},_={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},tt=B.extend({name:"confirmdialog",theme:X,classes:_}),nt={name:"BaseConfirmDialog",extends:F,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:tt,provide:function(){return{$pcConfirmDialog:this,$parentInstance:this}}},A={name:"ConfirmDialog",extends:nt,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var e=this;this.confirmListener=function(t){t&&t.group===e.group&&(e.confirmation=t,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},q.on("confirm",this.confirmListener),q.on("close",this.closeListener)},beforeUnmount:function(){q.off("confirm",this.confirmListener),q.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){if(this.confirmation){var e,t=this.confirmation;return t.acceptLabel||((e=t.acceptProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e,t=this.confirmation;return t.rejectLabel||((e=t.rejectProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!==null&&e!==void 0&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!==null&&e!==void 0&&e.rejectProps?this.confirmation.rejectProps.icon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{Dialog:J,Button:O}};function et(n,e,t,u,i,o){var x=L("Button"),w=L("Dialog");return d(),y(w,{visible:i.visible,"onUpdate:visible":[e[2]||(e[2]=function(c){return i.visible=c}),o.onHide],role:"alertdialog",class:V(n.cx("root")),modal:!0,header:o.header,blockScroll:o.blockScroll,position:o.position,breakpoints:n.breakpoints,closeOnEscape:o.closeOnEscape,draggable:n.draggable,pt:n.pt,unstyled:n.unstyled},$({default:f(function(){return[n.$slots.container?S("",!0):(d(),g(D,{key:0},[n.$slots.message?(d(),y(z(n.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(d(),g(D,{key:0},[j(n.$slots,"icon",{},function(){return[n.$slots.icon?(d(),y(z(n.$slots.icon),{key:0,class:V(n.cx("icon"))},null,8,["class"])):i.confirmation.icon?(d(),g("span",m({key:1,class:[i.confirmation.icon,n.cx("icon")]},n.ptm("icon")),null,16)):S("",!0)]}),l("span",m({class:n.cx("message")},n.ptm("message")),I(o.message),17)],64))],64))]}),_:2},[n.$slots.container?{name:"container",fn:f(function(c){return[j(n.$slots,"container",{message:i.confirmation,closeCallback:c.onclose,acceptCallback:o.accept,rejectCallback:o.reject})]}),key:"0"}:void 0,n.$slots.container?void 0:{name:"footer",fn:f(function(){var c;return[r(x,m({class:[n.cx("pcRejectButton"),i.confirmation.rejectClass],autofocus:o.autoFocusReject,unstyled:n.unstyled,text:((c=i.confirmation.rejectProps)===null||c===void 0?void 0:c.text)||!1,onClick:e[0]||(e[0]=function(p){return o.reject()})},i.confirmation.rejectProps,{label:o.rejectLabel,pt:n.ptm("pcRejectButton")}),$({_:2},[o.rejectIcon||n.$slots.rejecticon?{name:"icon",fn:f(function(p){return[j(n.$slots,"rejecticon",{},function(){return[l("span",m({class:[o.rejectIcon,p.class]},n.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","text","label","pt"]),r(x,m({label:o.acceptLabel,class:[n.cx("pcAcceptButton"),i.confirmation.acceptClass],autofocus:o.autoFocusAccept,unstyled:n.unstyled,onClick:e[1]||(e[1]=function(p){return o.accept()})},i.confirmation.acceptProps,{pt:n.ptm("pcAcceptButton")}),$({_:2},[o.acceptIcon||n.$slots.accepticon?{name:"icon",fn:f(function(p){return[j(n.$slots,"accepticon",{},function(){return[l("span",m({class:[o.acceptIcon,p.class]},n.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}A.render=et;var at=function(e){var t=e.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    left: 0.75rem;
    color: `.concat(t("floatlabel.color"),`;
    transition-duration: `).concat(t("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(textarea) label {
    top: 1rem;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: -.75rem;
    font-size: 12px;
    color: `).concat(t("floatlabel.focus.color"),`;
}

.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel > .p-invalid + label {
    color: `).concat(t("floatlabel.invalid.color"),`;
}
`)},ot={root:"p-floatlabel"},lt=B.extend({name:"floatlabel",theme:at,classes:ot}),it={name:"BaseFloatLabel",extends:F,props:{},style:lt,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},T={name:"FloatLabel",extends:it,inheritAttrs:!1};function st(n,e,t,u,i,o){return d(),g("span",m({class:n.cx("root")},n.ptmi("root")),[j(n.$slots,"default")],16)}T.render=st;var rt=function(e){var t=e.dt;return`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("inputtext.color"),`;
    background: `).concat(t("inputtext.background"),`;
    padding: `).concat(t("inputtext.padding.y")," ").concat(t("inputtext.padding.x"),`;
    border: 1px solid `).concat(t("inputtext.border.color"),`;
    transition: background `).concat(t("inputtext.transition.duration"),", color ").concat(t("inputtext.transition.duration"),", border-color ").concat(t("inputtext.transition.duration"),", outline-color ").concat(t("inputtext.transition.duration"),", box-shadow ").concat(t("inputtext.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("inputtext.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("inputtext.shadow"),`;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(t("inputtext.hover.border.color"),`;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(t("inputtext.focus.border.color"),`;
    box-shadow: `).concat(t("inputtext.focus.ring.shadow"),`;
    outline: `).concat(t("inputtext.focus.ring.width")," ").concat(t("inputtext.focus.ring.style")," ").concat(t("inputtext.focus.ring.color"),`;
    outline-offset: `).concat(t("inputtext.focus.ring.offset"),`;
}

.p-inputtext.p-invalid {
    border-color: `).concat(t("inputtext.invalid.border.color"),`;
}

.p-inputtext.p-variant-filled {
    background: `).concat(t("inputtext.filled.background"),`;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(t("inputtext.filled.focus.background"),`;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(t("inputtext.disabled.background"),`;
    color: `).concat(t("inputtext.disabled.color"),`;
}

.p-inputtext::placeholder {
    color: `).concat(t("inputtext.placeholder.color"),`;
}

.p-inputtext-sm {
    font-size: `).concat(t("inputtext.sm.font.size"),`;
    padding: `).concat(t("inputtext.sm.padding.y")," ").concat(t("inputtext.sm.padding.x"),`;
}

.p-inputtext-lg {
    font-size: `).concat(t("inputtext.lg.font.size"),`;
    padding: `).concat(t("inputtext.lg.padding.y")," ").concat(t("inputtext.lg.padding.x"),`;
}

.p-inputtext-fluid {
    width: 100%;
}
`)},ct={root:function(e){var t=e.instance,u=e.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":u.size==="small","p-inputtext-lg":u.size==="large","p-invalid":u.invalid,"p-variant-filled":u.variant?u.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-inputtext-fluid":t.hasFluid}]}},ut=B.extend({name:"inputtext",theme:rt,classes:ct}),dt={name:"BaseInputText",extends:F,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:ut,provide:function(){return{$pcInputText:this,$parentInstance:this}}},E={name:"InputText",extends:dt,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return Z(this.fluid)?!!this.$pcFluid:this.fluid}}},pt=["value","aria-invalid"];function ft(n,e,t,u,i,o){return d(),g("input",m({type:"text",class:n.cx("root"),value:n.modelValue,"aria-invalid":n.invalid||void 0,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.getPTOptions("root")),null,16,pt)}E.render=ft;const mt={class:"h-screen px-12 lg:px-32 py-32"},ht={class:"w-full h-full flex flex-col md:justify-center"},bt={class:"p-2 z-10"},gt={key:0,class:"mt-3"},vt={class:"flex justify-end gap-2"},xt={class:"flex justify-end gap-2"},wt={class:"flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded"},jt={class:"font-bold text-2xl block mb-2 mt-6"},kt={class:"mb-0"},qt={class:"flex items-center gap-2 mt-6"},Ct=W({__name:"af6d22d8",setup(n){const e=K();let t="5",u=new Date;{t=localStorage.getItem("sisaMenjawab")||"5",u=new Date(localStorage.getItem("tanggalJawab")||new Date),new Date().getDate()-u.getDate()>1&&(t="5",localStorage.setItem("sisaMenjawab","5"),localStorage.setItem("tanggalJawab",new Date().toString()));let h=localStorage.getItem("data")||"{}";if(h){const a=JSON.parse(h);a.length||(a[0]="af6d22d8",localStorage.setItem("data",JSON.stringify(a)))}}const i=b(!1),o=b(!1),x=b(!1),w=b(!1),c=b(!1),p=b(!1),C=b(""),P=()=>{i.value=!0};setTimeout(()=>{o.value=!0},5e3),setTimeout(()=>{x.value=!0},12e4);const U=()=>{e.require({group:"headless",header:"Apakah anda yakin ?",message:`Silahkan jawab pertanyaan dengan benar, sisa jawaban anda ${t} kali`,accept:()=>{M()},reject:()=>{}})},M=()=>{let h=C.value.toLowerCase();if(h=h.replace(/\s/g,""),t=="0"){p.value=!0;return}h===atob("cGVuZ2VuZGFyYW1vdG9y")?alert("Jawaban benar"):(c.value=!0,t=Number(t)-1,localStorage.setItem("sisaMenjawab",String(t)))};return(h,a)=>{const v=O,k=J,N=E,R=T,H=A;return d(),g("section",mt,[o.value?(d(),y(v,{key:0,label:"Jawab",onClick:a[0]||(a[0]=s=>w.value=!0),class:"mb-5"})):S("",!0),l("div",ht,[a[11]||(a[11]=l("h1",{class:"uppercase text-5xl xl:text-4xl mb-4 font-semibold"}," أولاً ",-1)),l("div",bt,[a[9]||(a[9]=l("p",{class:"capitalize xl:w-1/2 md:w-1/2 text-stone-500"}," Gl vhexdk shuvlpsdqjdq mdodq bdqj vlexn, wljd hqwlwdv vhgdqj vdedu phqxqjjx shujdqwldq odpsx odox olqwdv: vhexdk nhqgduddq ehudw, bdlwx wuxn, vhexdk nhqgduddq ulqjdq, bdlwx vhshgd prwru, gdq pdnkoxn klgxs ehundnl hpsdw bdqj glwxqjjdqjl, bdlwx nxgd. Sdgd vxdwx wlwln, vhfdud wlgdn glvhqjdmd, shqjhpxgl nhqgduddq ehudw phqhndq nodnvrq, phqlpexondq nhjdgxkdq bdqj fxnxs xqwxn phpexdw pdnkoxn ehundnl hpsdw whuvhexw whunhmxw gdq ehuhdnvl djuhvli ghqjdq phqjjljlw shqjhqgdud nhqgduddq ulqjdq gl vhehodkqbd. Shqjhqgdud nhqgduddq ulqjdq, bdqj whunhmxw rohk vhudqjdq phqgdgdn whuvhexw, vhfdud uhiohnv phqduln jdv nhqgduddqqbd, phplfx udqjndldq shulvwlzd bdqj ehuxmxqj sdgd nhfhodnddq. Ghqjdq nrpsohnvlwdv vlwxdvl lql, lghqwlilndvlndq vldsd bdqj phodqjjdu shudwxudq odox olqwdv. ",-1)),x.value?(d(),g("p",gt,a[8]||(a[8]=[l("a",{href:"https://www.autumnhillnursery.com/choosing-right-tree/",class:"text-blue-800"},"Clue",-1),Q(", berserah diri kepada yang "),l("b",null,"di atas",-1)]))):S("",!0)]),l("div",{class:"absolute bottom-0 right-0 overflow-hidden h-2/5 sm:h-1/2 md:h-3/5 lg:h-4/6",onClick:P},a[10]||(a[10]=[l("img",{src:"https://i.pinimg.com/736x/20/32/7c/20327cceca76303fb06aac39499f2113.jpg",alt:"img",class:"hidden md:block h-full"},null,-1)]))]),r(k,{visible:i.value,"onUpdate:visible":a[1]||(a[1]=s=>i.value=s),modal:"",header:"Jangan sentuh christyku 😡",style:{width:"25rem"}},null,8,["visible"]),r(k,{visible:c.value,"onUpdate:visible":a[3]||(a[3]=s=>c.value=s),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:f(()=>[a[12]||(a[12]=l("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, jawaban anda salah. Silahkan coba lagi ",-1)),l("div",vt,[r(v,{label:"Ok",onClick:a[2]||(a[2]=s=>c.value=!1)})])]),_:1},8,["visible"]),r(k,{visible:p.value,"onUpdate:visible":a[5]||(a[5]=s=>p.value=s),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:f(()=>[a[13]||(a[13]=l("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, anda sudah tidak bisa menjawab lagi. Silahkan coba lagi besok ",-1)),l("div",xt,[r(v,{label:"Ok",onClick:a[4]||(a[4]=s=>p.value=!1)})])]),_:1},8,["visible"]),r(k,{visible:w.value,"onUpdate:visible":a[7]||(a[7]=s=>w.value=s),modal:"",header:"Jawab",style:{width:"25rem"}},{default:f(()=>[r(R,{class:"mt-5"},{default:f(()=>[r(N,{id:"username",modelValue:C.value,"onUpdate:modelValue":a[6]||(a[6]=s=>C.value=s)},null,8,["modelValue"]),a[14]||(a[14]=l("label",{for:"username"},"Jawabnnya",-1)),r(v,{label:"Jawab",onClick:U})]),_:1})]),_:1},8,["visible"]),r(H,{group:"headless"},{container:f(({message:s,acceptCallback:G,rejectCallback:Y})=>[l("div",wt,[a[15]||(a[15]=l("div",{class:"rounded-full bg-black text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"},[l("i",{class:"pi pi-question text-5xl"})],-1)),l("span",jt,I(s.header),1),l("p",kt,I(s.message),1),l("div",qt,[r(v,{label:"Tidak yakin",onClick:Y,outlined:"",class:"w-32"},null,8,["onClick"]),r(v,{label:"Yakin",onClick:G,class:"w-32"},null,8,["onClick"])])])]),_:1})])}}});export{Ct as default};
