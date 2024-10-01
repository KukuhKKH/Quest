import{B as z,C,s as J,p as O,o as f,q as B,v as L,w as m,x as S,b as u,y as b,a as i,c as w,F as V,z as T,A,n as F,t as D,D as _,E as nn,G as tn,r as v,u as x,d as en,H as q,I as an}from"./CQbAkIWJ.js";import{s as M,a as N,d as E,e as I}from"./Hj-C5GSr.js";var on=function(e){var t=e.dt;return`
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
`)},ln={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},sn=z.extend({name:"confirmdialog",theme:on,classes:ln}),rn={name:"BaseConfirmDialog",extends:J,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:sn,provide:function(){return{$pcConfirmDialog:this,$parentInstance:this}}},P={name:"ConfirmDialog",extends:rn,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var e=this;this.confirmListener=function(t){t&&t.group===e.group&&(e.confirmation=t,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},C.on("confirm",this.confirmListener),C.on("close",this.closeListener)},beforeUnmount:function(){C.off("confirm",this.confirmListener),C.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){if(this.confirmation){var e,t=this.confirmation;return t.acceptLabel||((e=t.acceptProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e,t=this.confirmation;return t.rejectLabel||((e=t.rejectProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!==null&&e!==void 0&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!==null&&e!==void 0&&e.rejectProps?this.confirmation.rejectProps.icon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{Dialog:M,Button:N}};function cn(n,e,t,s,l,o){var j=O("Button"),$=O("Dialog");return f(),B($,{visible:l.visible,"onUpdate:visible":[e[2]||(e[2]=function(d){return l.visible=d}),o.onHide],role:"alertdialog",class:A(n.cx("root")),modal:!0,header:o.header,blockScroll:o.blockScroll,position:o.position,breakpoints:n.breakpoints,closeOnEscape:o.closeOnEscape,draggable:n.draggable,pt:n.pt,unstyled:n.unstyled},L({default:m(function(){return[n.$slots.container?F("",!0):(f(),w(V,{key:0},[n.$slots.message?(f(),B(T(n.$slots.message),{key:1,message:l.confirmation},null,8,["message"])):(f(),w(V,{key:0},[S(n.$slots,"icon",{},function(){return[n.$slots.icon?(f(),B(T(n.$slots.icon),{key:0,class:A(n.cx("icon"))},null,8,["class"])):l.confirmation.icon?(f(),w("span",b({key:1,class:[l.confirmation.icon,n.cx("icon")]},n.ptm("icon")),null,16)):F("",!0)]}),i("span",b({class:n.cx("message")},n.ptm("message")),D(o.message),17)],64))],64))]}),_:2},[n.$slots.container?{name:"container",fn:m(function(d){return[S(n.$slots,"container",{message:l.confirmation,closeCallback:d.onclose,acceptCallback:o.accept,rejectCallback:o.reject})]}),key:"0"}:void 0,n.$slots.container?void 0:{name:"footer",fn:m(function(){var d;return[u(j,b({class:[n.cx("pcRejectButton"),l.confirmation.rejectClass],autofocus:o.autoFocusReject,unstyled:n.unstyled,text:((d=l.confirmation.rejectProps)===null||d===void 0?void 0:d.text)||!1,onClick:e[0]||(e[0]=function(p){return o.reject()})},l.confirmation.rejectProps,{label:o.rejectLabel,pt:n.ptm("pcRejectButton")}),L({_:2},[o.rejectIcon||n.$slots.rejecticon?{name:"icon",fn:m(function(p){return[S(n.$slots,"rejecticon",{},function(){return[i("span",b({class:[o.rejectIcon,p.class]},n.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","text","label","pt"]),u(j,b({label:o.acceptLabel,class:[n.cx("pcAcceptButton"),l.confirmation.acceptClass],autofocus:o.autoFocusAccept,unstyled:n.unstyled,onClick:e[1]||(e[1]=function(p){return o.accept()})},l.confirmation.acceptProps,{pt:n.ptm("pcAcceptButton")}),L({_:2},[o.acceptIcon||n.$slots.accepticon?{name:"icon",fn:m(function(p){return[S(n.$slots,"accepticon",{},function(){return[i("span",b({class:[o.acceptIcon,p.class]},n.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}P.render=cn;var un=function(e){var t=e.dt;return`
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
`)},dn={root:"p-floatlabel"},pn=z.extend({name:"floatlabel",theme:un,classes:dn}),fn={name:"BaseFloatLabel",extends:J,props:{},style:pn,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},U={name:"FloatLabel",extends:fn,inheritAttrs:!1};function mn(n,e,t,s,l,o){return f(),w("span",b({class:n.cx("root")},n.ptmi("root")),[S(n.$slots,"default")],16)}U.render=mn;var bn=function(e){var t=e.dt;return`
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
`)},hn={root:function(e){var t=e.instance,s=e.props;return["p-inputtext p-component",{"p-filled":t.filled,"p-inputtext-sm":s.size==="small","p-inputtext-lg":s.size==="large","p-invalid":s.invalid,"p-variant-filled":s.variant?s.variant==="filled":t.$primevue.config.inputStyle==="filled"||t.$primevue.config.inputVariant==="filled","p-inputtext-fluid":t.hasFluid}]}},gn=z.extend({name:"inputtext",theme:bn,classes:hn}),vn={name:"BaseInputText",extends:J,props:{modelValue:null,size:{type:String,default:null},invalid:{type:Boolean,default:!1},variant:{type:String,default:null},fluid:{type:Boolean,default:null}},style:gn,provide:function(){return{$pcInputText:this,$parentInstance:this}}},R={name:"InputText",extends:vn,inheritAttrs:!1,emits:["update:modelValue"],inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},hasFluid:function(){return _(this.fluid)?!!this.$pcFluid:this.fluid}}},xn=["value","aria-invalid"];function wn(n,e,t,s,l,o){return f(),w("input",b({type:"text",class:n.cx("root"),value:n.modelValue,"aria-invalid":n.invalid||void 0,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.getPTOptions("root")),null,16,xn)}R.render=wn;const jn={class:"h-screen px-12 lg:px-32 py-32"},kn={class:"w-full h-full flex flex-col md:justify-center"},yn={class:"p-2 z-10"},qn={key:0,class:"mt-3"},Sn={class:"flex justify-end gap-2"},$n={class:"flex justify-end gap-2"},Cn={class:"flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded"},In={class:"font-bold text-2xl block mb-2 mt-6"},Bn={class:"mb-0"},Fn={class:"flex items-center gap-2 mt-6"},zn={__name:"af6d22d8",setup(n){const e=nn(),t=tn();let s=5,l=new Date;{const h="data",a="af6d22d8";let r=JSON.parse(E(localStorage.getItem(h)||I("{}")));r[a]||(r[a]={sisaMenjawab:5,tanggalJawab:new Date},localStorage.setItem(h,I(JSON.stringify(r)))),s=r[a].sisaMenjawab,l=new Date(r[a].tanggalJawab),new Date().getDate()-l.getDate()>1&&(s=5,l=new Date,r[a].sisaMenjawab=s,r[a].tanggalJawab=l)}const o=v(!1),j=v(!1),$=v(!1),d=v(!1),p=v(!1),k=v(!1),y=v(""),H=()=>{o.value=!0};setTimeout(()=>{j.value=!0},5e3),setTimeout(()=>{$.value=!0},12e4);const G=()=>{if(!y.value){alert("Jawaban tidak boleh kosong");return}e.require({group:"headless",header:"Apakah anda yakin ?",message:`Silahkan jawab pertanyaan dengan benar, sisa jawaban anda ${s} kali`,accept:()=>{K()},reject:()=>{}})},K=()=>{let h=y.value.toLowerCase();if(h=h.replace(/\s/g,""),s=="0"){k.value=!0;return}if(h===atob("cGVuZ2VuZGFyYW1vdG9y"))t.add({severity:"success",summary:"Selamat",detail:"Jawaban anda benar",life:3e3}),an("/8boh7hfbj");else{p.value=!0,s=Number(s)-1;{const a="data",r="af6d22d8";let g=JSON.parse(E(localStorage.getItem(a)||I("{}")));g[r].sisaMenjawab=s,localStorage.setItem(a,I(JSON.stringify(g)))}}};return(h,a)=>{const r=N,g=M,Y=R,Z=U,W=P;return f(),w("section",jn,[x(j)?(f(),B(r,{key:0,label:"Jawab",onClick:a[0]||(a[0]=c=>d.value=!0),class:"mb-5"})):F("",!0),i("div",kn,[a[11]||(a[11]=i("h1",{class:"uppercase text-5xl xl:text-4xl mb-4 font-semibold"}," أولاً ",-1)),i("div",yn,[a[9]||(a[9]=i("p",{class:"capitalize xl:w-1/2 md:w-1/2 text-stone-500"}," Gl vhexdk shuvlpsdqjdq mdodq bdqj vlexn, wljd hqwlwdv vhgdqj vdedu phqxqjjx shujdqwldq odpsx odox olqwdv: vhexdk nhqgduddq ehudw, bdlwx wuxn, vhexdk nhqgduddq ulqjdq, bdlwx vhshgd prwru, gdq pdnkoxn klgxs ehundnl hpsdw bdqj glwxqjjdqjl, bdlwx nxgd. Sdgd vxdwx wlwln, vhfdud wlgdn glvhqjdmd, shqjhpxgl nhqgduddq ehudw phqhndq nodnvrq, phqlpexondq nhjdgxkdq bdqj fxnxs xqwxn phpexdw pdnkoxn ehundnl hpsdw whuvhexw whunhmxw gdq ehuhdnvl djuhvli ghqjdq phqjjljlw shqjhqgdud nhqgduddq ulqjdq gl vhehodkqbd. Shqjhqgdud nhqgduddq ulqjdq, bdqj whunhmxw rohk vhudqjdq phqgdgdn whuvhexw, vhfdud uhiohnv phqduln jdv nhqgduddqqbd, phplfx udqjndldq shulvwlzd bdqj ehuxmxqj sdgd nhfhodnddq. Ghqjdq nrpsohnvlwdv vlwxdvl lql, lghqwlilndvlndq vldsd bdqj phodqjjdu shudwxudq odox olqwdv. ",-1)),x($)?(f(),w("p",qn,a[8]||(a[8]=[i("a",{href:"https://www.autumnhillnursery.com/choosing-right-tree/",class:"text-blue-800"},"Clue",-1),en(", berserah diri kepada yang "),i("b",null,"di atas",-1)]))):F("",!0)]),i("div",{class:"absolute bottom-0 right-0 overflow-hidden h-2/5 sm:h-1/2 md:h-3/5 lg:h-4/6",onClick:H},a[10]||(a[10]=[i("img",{src:"https://i.pinimg.com/736x/20/32/7c/20327cceca76303fb06aac39499f2113.jpg",alt:"img",class:"hidden md:block h-full"},null,-1)]))]),u(g,{visible:x(o),"onUpdate:visible":a[1]||(a[1]=c=>q(o)?o.value=c:null),modal:"",header:"Jangan sentuh christyku 😡",style:{width:"25rem"}},null,8,["visible"]),u(g,{visible:x(p),"onUpdate:visible":a[3]||(a[3]=c=>q(p)?p.value=c:null),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:m(()=>[a[12]||(a[12]=i("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, jawaban anda salah. Silahkan coba lagi ",-1)),i("div",Sn,[u(r,{label:"Ok",onClick:a[2]||(a[2]=c=>p.value=!1)})])]),_:1},8,["visible"]),u(g,{visible:x(k),"onUpdate:visible":a[5]||(a[5]=c=>q(k)?k.value=c:null),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:m(()=>[a[13]||(a[13]=i("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, anda sudah tidak bisa menjawab lagi. Silahkan coba lagi besok ",-1)),i("div",$n,[u(r,{label:"Ok",onClick:a[4]||(a[4]=c=>k.value=!1)})])]),_:1},8,["visible"]),u(g,{visible:x(d),"onUpdate:visible":a[7]||(a[7]=c=>q(d)?d.value=c:null),modal:"",header:"Jawab",style:{width:"25rem"}},{default:m(()=>[u(Z,{class:"mt-5"},{default:m(()=>[u(Y,{id:"username",modelValue:x(y),"onUpdate:modelValue":a[6]||(a[6]=c=>q(y)?y.value=c:null)},null,8,["modelValue"]),a[14]||(a[14]=i("label",{for:"username"},"Jawabnnya",-1)),u(r,{label:"Jawab",onClick:G})]),_:1})]),_:1},8,["visible"]),u(W,{group:"headless"},{container:m(({message:c,acceptCallback:Q,rejectCallback:X})=>[i("div",Cn,[a[15]||(a[15]=i("div",{class:"rounded-full bg-black text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"},[i("i",{class:"pi pi-question text-5xl"})],-1)),i("span",In,D(c.header),1),i("p",Bn,D(c.message),1),i("div",Fn,[u(r,{label:"Tidak yakin",onClick:X,outlined:"",class:"w-32"},null,8,["onClick"]),u(r,{label:"Yakin",onClick:Q,class:"w-32"},null,8,["onClick"])])])]),_:1})])}}};export{zn as default};
