"use strict";(self.webpackChunk_jaryway_components=self.webpackChunk_jaryway_components||[]).push([[428],{77428:function(fn,he,s){s.r(he),s.d(he,{FormulaEditor:function(){return rn},FormulaEditorBase:function(){return ye},GridInput:function(){return un},GridInput2:function(){return sn}});var ke=s(26068),D=s.n(ke),je=s(67825),te=s.n(je),we=s(53649),ue=s.n(we),pe=s(9281),me=s(27739),le=s(92493),H=s(66453),Ee=s(22402),oe=s(59676),e=s(75271);function Re(N){var m=function(E){var y=E.matchBefore(/[\u4e00-\u9fa5]*|\w*/);return!y||y.from===y.to&&!E.explicit?null:{from:y.from,options:N.map(function(C){return D()(D()({},C),{},{apply:function(c,a,t,l){var S=a.type==="function",P=a.type==="field",O=S?a.label+"()":P?"{".concat(a.value,"}"):a.label;c.dispatch({changes:{from:t,to:l,insert:O},selection:{anchor:t+O.length-(S?1:0)}}),c.focus()}})})}};return m}var Ne=s(25298),ie=s.n(Ne),De=s(17069),se=s.n(De),ze=s(62657),Be=s.n(ze),Ie=s(21742),Le=s.n(Ie),Ae=s(83136),Ke=s.n(Ae),Me=s(82092),X=s.n(Me),Pe=function(m){var b=function(y){Le()(x,y);var C=Ke()(x);function x(c){var a;return ie()(this,x),a=C.call(this),X()(Be()(a),"id",""),a.id=c,a}return se()(x,[{key:"eq",value:function(a){return this.id===a.id}},{key:"toDOM",value:function(){var a=document.createElement("span");if(!this.id)return a;var t=(m||{})[this.id],l={textColor:"#2f7deb",backgroudColor:"#eaf2fd",borderColor:"#91caff"},S=l.backgroudColor,P=l.borderColor,O=l.textColor;return a.style.cssText=`
      // border: 1px solid `.concat(P,`;
      border-radius: 4px;
      // line-height: 20px;
      background: `).concat(S,`;
      color: `).concat(t?O:"#d44",`;
      font-size: 12px;
      padding: 4px 6px;
      margin:1px;
      user-select: none;
      `),a.textContent=t||"\u5931\u6548\u5B57\u6BB5",a}},{key:"ignoreEvent",value:function(){return!0}}]),x}(H.l9),E=new H.Y1({regexp:/\{([A-Za-z_0-9.]+)\}/g,decoration:function(C){return H.p.replace({widget:new b(C[1])})}});return H.lg.fromClass(function(){function y(C){ie()(this,y),X()(this,"fields",void 0),this.fields=E.createDeco(C)}return se()(y,[{key:"update",value:function(x){this.fields=E.updateDeco(x,this.fields)}}]),y}(),{decorations:function(C){return C.fields},provide:function(C){return H.tk.atomicRanges.of(function(x){var c;return((c=x.plugin(C))===null||c===void 0?void 0:c.fields)||H.p.none})}})},Oe=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"red",E=arguments.length>2?arguments[2]:void 0;if(!m||!m.length)throw new Error("keywords \u6570\u7EC4\u4E0D\u80FD\u4E3A\u7A7A");var y=new RegExp(m.join("|"),"g"),C=new H.Y1({regexp:y,decoration:function(c,a,t){var l="";return b&&(l="color: ".concat(b,";")),H.p.mark({attributes:{style:l},class:E})}});return H.lg.fromClass(function(){function x(c){ie()(this,x),X()(this,"keywords",void 0),this.keywords=C.createDeco(c)}return se()(x,[{key:"update",value:function(a){this.keywords=C.updateDeco(a,this.keywords)}}]),x}(),{decorations:function(c){return c.keywords}})},n=s(52676),Te=["value","onChange","onBlur","onFocus","keywords","fields","completions"],ge,We=[pe.vQ(),Ee.w9,me.n$(),me.nY(),H.tk.lineWrapping,H.tk.theme({"&.cm-focused":{outline:"none"},"&.cm-focused .cm-content":{border:"0 none"},".cm-completionIcon-field":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),(0,H.W$)("\u8BF7\u8F93\u5165")],Ze=(0,oe.styled)("div",e.forwardRef)(ge||(ge=ue()([`
  padding: 16px;
  border: 1px solid rgb(204, 204, 204);
`]))),Ue=(0,e.forwardRef)(function(N,m){var b=N.value,E=b===void 0?"":b,y=N.onChange,C=N.onBlur,x=N.onFocus,c=N.keywords,a=N.fields,t=N.completions,l=te()(N,Te),S=(0,e.useRef)(null),P=(0,e.useRef)(E),O=(0,e.useRef)(y),k=(0,e.useRef)(C),T=(0,e.useRef)(x),W=(0,e.useRef)(null),$=(0,e.useRef)(new le.F6),L=(0,e.useRef)(new le.F6),F=(0,e.useRef)(new le.F6);return P.current=E,O.current=y,T.current=x,(0,e.useEffect)(function(){if(S.current){var j=P.current,p=O.current,Z=k.current,M=T.current,o=new H.tk({doc:j,parent:S.current,extensions:[].concat(We,[$.current.of([]),L.current.of([]),F.current.of([]),H.tk.updateListener.of(function(g){var I=g.state;p&&p(I.doc.toString())}),H.tk.domEventHandlers({blur:function(I){Z&&Z(o.state.doc.toString(),I)},focus:function(I){M&&M(o.state.doc.toString(),I)}})]).filter(Boolean),selection:{anchor:j.length}});return W.current=o,function(){o.destroy(),W.current=null}}},[]),(0,e.useEffect)(function(){var j=W.current;if(j){var p=[];if((c||[]).length){var Z=c.sort(function(o,g){return g.length-o.length});p.push(Oe(Z,"#c643e0","cm-keywords"))}var M=$.current.reconfigure(p);j.dispatch({effects:M})}},[c]),(0,e.useEffect)(function(){var j=W.current;if(j){var p=L.current.reconfigure(Pe(a||{}));j.dispatch({effects:p})}},[a]),(0,e.useEffect)(function(){var j=W.current;if(j){var p=pe.ys({override:[Re(t)]}),Z=F.current.reconfigure(p);j.dispatch({effects:Z})}},[t]),(0,e.useImperativeHandle)(m,function(){return{element:S.current,insert:function(p,Z){var M=W.current;if(M){var o=M.state.selection.main,g=o.from,I=o.to;M.dispatch({changes:{from:g,to:I,insert:p},selection:{anchor:g+p.length-(Z?1:0)}}),M.focus()}}}},[]),(0,n.jsx)(Ze,D()({ref:S},l))}),ye=Ue,Ge=s(15558),ne=s.n(Ge),He=s(48305),Q=s.n(He),Ce=s(65815),Ve=s(77855),$e=s(60795),ce=s(10120),Ye=s(82187),_=s.n(Ye),xe=s(18486),be,Se=(0,oe.styled)("ul")(be||(be=ue()([`
  color: #525967;
  margin-top: 8px !important;

  & > li {
    word-wrap: break-word;
    margin-bottom: 4px;
    word-break: break-word;

    .formula-name {
      color: #c643e0;
    }
    .formula-field {
      background: #e6f7fa;
      border-radius: 3px;
      color: #00aed1;
      padding: 2px 4px;
    }
  }
`]))),Qe=function(m){var b=m.item;if(!b)return(0,n.jsxs)(Se,{className:"intro-wrapper default",children:[(0,n.jsx)("li",{children:"\u4ECE\u5DE6\u4FA7\u9762\u677F\u9009\u62E9\u5B57\u6BB5\u540D\u548C\u51FD\u6570\uFF0C\u6216\u8F93\u5165\u51FD\u6570"}),(0,n.jsxs)("li",{children:["\u516C\u5F0F\u7F16\u8F91\u4E3E\u4F8B\uFF1A",(0,n.jsx)("span",{className:"formula-name",children:" AVERAGE"}),"\uFF08",(0,n.jsx)("span",{className:"formula-field",children:"\u8BED\u6587\u6210\u7EE9"}),"\uFF0C",(0,n.jsx)("span",{className:"formula-field",children:"\u6570\u5B66\u6210\u7EE9"}),"\uFF09"]})]});var E=function(){return b.usage.split(new RegExp("(".concat(b.name,")"),"g")).map(function(C,x){return C===b.name?(0,n.jsx)("span",{className:"formula-name",children:C},x):C})};return(0,n.jsxs)(Se,{className:"intro-wrapper",children:[(0,n.jsx)("li",{className:"intro",children:b.intro}),(0,n.jsxs)("li",{className:"usage",children:["\u7528\u6CD5\uFF1A",E()]}),(0,n.jsxs)("li",{className:"example",children:["\u793A\u4F8B\uFF1A",b.example]})]})},Je=Qe,Xe=["value","onChange","onBlur","onFocus","fields","funcs"],Fe,qe=(0,oe.styled)("div")(Fe||(Fe=ue()([`
  /*margin-top: -1px;*/
  display: flex;
  flex: 1 1 auto;
  font-size: 14px;
  border: 1px solid #d7d9dc;
  border-top: 0 none;

  & > * {
    box-sizing: border-box;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    style: none;
    list-style: none;
  }

  .column {
    /*border: solid 1px #ccc;*/
    box-sizing: border-box;
    flex: 1 1 auto;

    &:not(:last-child) {
      border-right: 1px solid #ccc;
    }

    display: flex;
    /*border: 1px solid rgb(204, 204, 204);*/
    flex-direction: column;

    &.fields {
      width: 35%;
    }
    &.funcs {
      width: 25%;
    }
    &.funs-intro {
      width: 40%;
    }
  }

  .header {
    padding: 4px;
    border-bottom: 1px solid #d7d9dc;
    box-sizing: border-box;
    height: 31px;
    display: flex;
    align-items: center;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    height: 0px;
    padding: 4px 8px;
  }

  .search-empty {
    color: #838892;
    margin-top: 20px;
    text-align: center;
  }

  .field-item {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 32px;
    line-height: 32px;

    &:hover {
      background: #f0f1f4;
    }

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .type {
      background: rgba(252, 167, 93, 0.2);
      border-radius: 8px;
      padding: 2px 8px;
      /*font-size: 0.8em;*/
      line-height: 1;
      &.array {
        background: rgba(217, 65, 192, 0.2);
        color: #d941c0;
      }
      &.text {
        background: rgba(47, 125, 235, 0.2);
        color: #2f7deb;
      }
      &.datetime {
        background: rgba(126, 71, 235, 0.2);
        color: #7e47eb;
      }
      &.number {
        background: rgba(240, 168, 0, 0.2);
        color: #f0a800;
      }
      &.user {
        background: rgba(252, 167, 93, 0.2);
        color: #fca75d;
      }
    }
  }

  .formula-category {
    .title {
      cursor: pointer;
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      user-select: none;

      .icon {
        padding: 0 4px;
      }
    }
    & > ul {
      display: none;
    }
    &.expand {
      & > ul {
        display: block;
      }
    }
  }

  .formula-item {
    cursor: pointer;
    display: flex;

    color: #525967;
    flex-direction: column;
    height: 50px;
    justify-content: space-between;
    padding: 6px 4px 6px 22px;

    &.selected,
    &:hover {
      background: #f0f1f4;
    }

    .name {
      color: #525967;
      line-height: 20px;
    }

    .subname {
      color: #b5b8be;
      font-size: 12px;
      line-height: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`]))),_e=function(m){var b=m.fieldCompletions,E=m.onClick,y=(0,e.useState)(!1),C=Q()(y,2),x=C[0],c=C[1],a=(0,e.useState)([]),t=Q()(a,2),l=t[0],S=t[1],P=(0,e.useRef)((0,xe.Z)(function(k){if(!k){c(!1),S([]);return}c(!0);var T=b.filter(function(W){return W.label.toUpperCase().includes(k.toUpperCase())});S(T)},500)),O=(0,e.useCallback)(function(k){var T=k.target.value;P.current(T)},[]);return(0,n.jsxs)("div",{className:"fields column",children:[(0,n.jsx)("div",{className:"header",children:(0,n.jsx)(ce.Z,{variant:"borderless",prefix:(0,n.jsx)(Ce.Z,{}),size:"small",onChange:O})}),(0,n.jsx)("ul",{className:"body",children:x?l.length>0?l.map(function(k){return(0,n.jsxs)("li",{className:"field-item",onClick:function(){return E(k.value)},children:[(0,n.jsx)("div",{className:"name",title:k.label,children:k.label}),(0,n.jsx)("div",{className:_()("type",k.detail),children:k.detail})]},k.value)}):(0,n.jsx)("li",{className:"search-empty",children:"\u65E0\u641C\u7D22\u7ED3\u679C"}):(0,n.jsx)(n.Fragment,{children:b.map(function(k){return(0,n.jsxs)("li",{className:"field-item",onClick:function(){return E(k.value)},children:[(0,n.jsx)("div",{className:"name",title:k.label,children:k.label}),(0,n.jsx)("div",{className:_()("type",k.detail),children:k.detail})]},k.value)})})})]})},en=function(m){var b=m.funcs,E=m.uniqueFuncs,y=m.expandKeys,C=m.selectedKey,x=m.onExpand,c=m.onClick,a=m.onMouseOver,t=(0,e.useState)(!1),l=Q()(t,2),S=l[0],P=l[1],O=(0,e.useState)([]),k=Q()(O,2),T=k[0],W=k[1],$=(0,e.useRef)((0,xe.Z)(function(F){if(!F){P(!1),W([]);return}P(!0);var j=E.filter(function(p){return p.name.toUpperCase().includes(F.toUpperCase())});W(j),console.log("searchFunc",{uniqueFuncs:E,matched:j})},500)),L=(0,e.useCallback)(function(F){var j=F.target.value;$.current(j)},[]);return(0,n.jsxs)("div",{className:"funcs column",children:[(0,n.jsx)("div",{className:"header",children:(0,n.jsx)(ce.Z,{variant:"borderless",prefix:(0,n.jsx)(Ce.Z,{}),size:"small",onChange:L})}),(0,n.jsx)("ul",{className:"body",children:S?T.length>0?T.map(function(F){var j=C===F.name;return(0,n.jsxs)("li",{className:_()("formula-item",{selected:j}),onClick:function(){return c(F)},onMouseOver:function(){return a(F)},children:[(0,n.jsx)("div",{className:"name",title:F.name,children:F.name}),(0,n.jsx)("div",{className:_()("subname",F.subName),children:F.subName})]},F.name)}):(0,n.jsx)("li",{className:"search-empty",children:"\u6CA1\u6709\u5BF9\u5E94\u7684\u51FD\u6570"}):(0,n.jsx)(n.Fragment,{children:b.map(function(F){var j=y.includes(F.category);return(0,n.jsxs)("li",{className:_()("formula-category",{expand:j}),children:[(0,n.jsxs)("div",{onClick:function(){return x(F.category)},className:"title",children:[j?(0,n.jsx)(Ve.Z,{className:"icon",style:{fontSize:"0.8em"}}):(0,n.jsx)($e.Z,{className:"icon",style:{fontSize:"0.8em"}}),F.category]}),(0,n.jsx)("ul",{children:F.contains.map(function(p){var Z=C===p.name;return(0,n.jsxs)("li",{className:_()("formula-item",{selected:Z}),onClick:function(){return c(p)},onMouseOver:function(){return a(p)},children:[(0,n.jsx)("div",{className:"name",title:p.name,children:p.name}),(0,n.jsx)("div",{className:_()("subname",p.subName),children:p.subName})]},p.name)})})]},F.category)})})})]})},nn=function(m){var b=m.value,E=b===void 0?"":b,y=m.onChange,C=m.onBlur,x=m.onFocus,c=m.fields,a=m.funcs,t=te()(m,Xe),l=(0,e.useRef)(null),S=(0,e.useState)([]),P=Q()(S,2),O=P[0],k=P[1],T=(0,e.useState)(),W=Q()(T,2),$=W[0],L=W[1],F=(0,e.useState)(),j=Q()(F,2),p=j[0],Z=j[1],M=(0,e.useMemo)(function(){var i=a.reduce(function(v,r){var f=r.contains.reduce(function(z,B){return D()(D()({},z),{},X()({},B.name,B))},{});return D()(D()({},v),f)},{});return Object.values(i)},[a]),o=(0,e.useMemo)(function(){var i=(c||[]).reduce(function(B,h){if(h.items){var R=h.items.map(function(G){return{label:[h.label,G.label].join("."),detail:h.type,value:[h.id,G.id].join("."),section:"\u5F53\u524D\u8868\u5355\u5B57\u6BB5",type:"field"}});return[].concat(ne()(B),ne()(R))}var K={label:h.label,detail:h.type,value:h.id,section:"\u5F53\u524D\u8868\u5355\u5B57\u6BB5",type:"field"};return[].concat(ne()(B),[K])},[]),v=M.reduce(function(B,h){var R={label:h.name,detail:h.subName,type:"function"};return[].concat(ne()(B),[R])},[]),r=[].concat(ne()(v),ne()(i)),f=r.map(function(B){return B.label}),z=i.reduce(function(B,h){return D()(D()({},B),{},X()({},h.value,h.label))},{});return{completions:r,fields:z,keywords:f,fieldCompletions:i}},[c,M]),g=o.completions,I=o.fields,J=o.keywords,U=o.fieldCompletions,d=(0,e.useCallback)(function(i){k(function(v){return v.includes(i)?v.filter(function(r){return r!==i}):[i]})},[]),u=(0,e.useCallback)(function(i){var v;(v=l.current)===null||v===void 0||v.insert("{".concat(i,"}"),!1)},[]),w=(0,e.useCallback)(function(i){var v;L(i.name),(v=l.current)===null||v===void 0||v.insert("".concat(i.name,"()"),!0)},[]),A=(0,e.useCallback)(function(i){Z(i)},[]);return(0,n.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,n.jsx)(ye,D()({ref:l,style:{flex:"0 0 200px",overflow:"auto"},value:E,onChange:y,keywords:J,fields:I,completions:g},t)),(0,n.jsxs)(qe,{className:"editor-extend",children:[(0,n.jsx)(_e,{fieldCompletions:U,onClick:u}),(0,n.jsx)(en,{selectedKey:$,expandKeys:O,funcs:a,uniqueFuncs:M,onClick:w,onMouseOver:A,onExpand:d}),(0,n.jsxs)("div",{className:"funs-intro column",children:[(0,n.jsx)("div",{className:"header",children:p==null?void 0:p.name}),(0,n.jsx)("div",{className:"body",children:(0,n.jsx)(Je,{item:p})})]})]})]})},rn=nn,tn=["value","onChange","parterns","size"],an=(0,e.forwardRef)(function(N,m){var b=N.value,E=N.onChange,y=N.parterns,C=N.size,x=te()(N,tn),c=(0,e.useRef)(!1),a=(0,e.useRef)(null),t=(0,e.useRef)(0),l=(0,e.useRef)([]),S=(0,e.useRef)(y||[3,1,1,1,1]),P=(0,e.useState)(14),O=Q()(P,2),k=O[0],T=O[1],W=(0,e.useState)({}),$=Q()(W,2),L=$[0],F=$[1],j=(0,e.useState)(S.current||[]),p=Q()(j,2),Z=p[0],M=p[1],o=(0,e.useCallback)(function(d){return function(u){u.preventDefault(),t.current=d}},[]),g=(0,e.useCallback)(function(d){return function(u){u&&(l.current[d]=u)}},[]),I=(0,e.useCallback)(function(d,u){return function(w){var A=w.target;if(w.preventDefault(),A.value.trim().length>=u&&d<S.current.length-1){var i,v,r=d+1,f=S.current[r];(i=l.current[r])===null||i===void 0||i.focus(),(v=l.current[r])===null||v===void 0||v.setSelectionRange(0,f)}}},[]),J=(0,e.useCallback)(function(d){return function(u){var w=u.target;u.preventDefault(),F(function(A){var i=D()(D()({},A),{},X()({},d,w.value.trim()));return E&&E(i),i})}},[E]),U=(0,e.useCallback)(function(d){if(c.current){var u=t.current,w=l.current[u].input,A=w.value,i=w.selectionStart,v=A.slice(0,i||0),r=v+d,f=0,z=function(h,R){clearTimeout(f),f=window.setTimeout(function(){var K,G;(K=l.current[h])===null||K===void 0||K.focus(),(G=l.current[h])===null||G===void 0||G.setSelectionRange(R,R)},0)};F(function(B){for(var h=u,R=0,K=0;h<S.current.length&&K<r.length;){var G=r.slice(K,K+S.current[h]);K<r.length&&(R=h),B=D()(D()({},B),{},X()({},h,G)),K+=S.current[h],h++}var re=B[R].length;return z(R,re),B})}},[]);return(0,e.useEffect)(function(){return c.current=!0,function(){c.current=!1}},[]),(0,e.useEffect)(function(){var d=a.current;if(d){var u=window.getComputedStyle(d);T(parseFloat(u.fontSize||"14"));var w=function(r){if(r.preventDefault(),r.stopPropagation(),r.key!=="Delete"){if(r.key==="Backspace"){var f=t.current,z=l.current[f].input,B=z.value,h=z.selectionStart;if((B.length===0||h===0)&&f>0){var R=l.current[f-1].input;R==null||R.focus(),R==null||R.setSelectionRange(R.value.length,R.value.length)}return}if(r.key==="ArrowLeft"&&t.current>0){var K=t.current,G=l.current[K].input,re=G.selectionStart;if(re===0){var V=l.current[K-1].input;V==null||V.focus(),V==null||V.setSelectionRange(V.value.length,V.value.length)}return}if(r.key==="ArrowRight"&&t.current<S.current.length-1){var q=t.current,de=l.current[q].input,ve=de.selectionStart,fe=S.current[q];if(ve===fe){var Y=l.current[q+1].input;Y==null||Y.focus(),Y==null||Y.setSelectionRange(0,0)}return}var ae=t.current,cn=l.current[ae].input,dn=S.current[ae],vn=cn.selectionStart;if(vn===dn&&ae<l.current.length-1){var ee=l.current[ae+1].input;ee==null||ee.focus(),ee==null||ee.setSelectionRange(0,ee.value.length)}}},A=function(r){if(c.current&&r.key==="Delete"){var f=t.current,z=l.current[f].input,B=z.value,h=z.selectionStart;(h===B.length||B.length===0)&&f<S.current.length-1&&F(function(R){for(var K=f+1;K<l.current.length;){var G=R[K];if(console.log("Delete-1",G),G.length>0){R=D()(D()({},R),{},X()({},K,G.slice(1)));break}K++}return R});return}},i=function(r){var f;r.preventDefault(),r.stopPropagation();var z=(f=r.clipboardData)===null||f===void 0?void 0:f.getData("text");z&&U(z)};return d.addEventListener("paste",i),d.addEventListener("keyup",w),d.addEventListener("keydown",A),function(){d.removeEventListener("paste",i),d.removeEventListener("keyup",w),d.removeEventListener("keydown",A),l.current=[]}}},[U]),(0,e.useEffect)(function(){b&&F(b)},[b]),(0,e.useEffect)(function(){if(c){var d=y||[3,1,3,1,1];S.current=d,M(d)}},[y]),(0,e.useImperativeHandle)(m,function(){return l.current}),(0,n.jsx)("div",D()(D()({ref:a},x),{},{children:Z.map(function(d,u){return(0,n.jsx)(ce.Z,{size:C||"small",maxLength:d,style:{width:(d>1?k:30)*d||100},ref:g(u),onFocus:o(u),onInput:I(u,d),value:L[u]||"",onChange:J(u)},u)})}))}),un=an,ln=["value","onChange","parterns"],on=(0,e.forwardRef)(function(N,m){var b=N.value,E=N.onChange,y=N.parterns,C=te()(N,ln),x=(0,e.useRef)(!1),c=(0,e.useRef)(null),a=(0,e.useRef)(0),t=(0,e.useRef)([]),l=(0,e.useState)(14),S=Q()(l,2),P=S[0],O=S[1],k=(0,e.useState)({}),T=Q()(k,2),W=T[0],$=T[1],L=(0,e.useMemo)(function(){return y||[3,1,3,1,1]},[y]),F=(0,e.useCallback)(function(o){return function(g){g.preventDefault(),a.current=o}},[]),j=(0,e.useCallback)(function(o){return function(g){g&&(t.current[o]=g)}},[]),p=(0,e.useCallback)(function(o,g){return function(I){var J=I.target;if(I.preventDefault(),J.value.trim().length>=g&&o<L.length-1){var U,d,u=o+1,w=L[u];(U=t.current[u])===null||U===void 0||U.focus(),(d=t.current[u])===null||d===void 0||d.setSelectionRange(0,w)}}},[L]),Z=(0,e.useCallback)(function(o){return function(g){var I=g.target;g.preventDefault(),$(function(J){var U=D()(D()({},J),{},X()({},o,I.value.trim()));return E&&E(U),U})}},[E]),M=(0,e.useCallback)(function(o){if(x.current){var g=a.current,I=t.current[g];if(I){var J=I.value,U=I.selectionStart,d=J.slice(0,U||0),u=d+o,w=0,A=function(v,r){clearTimeout(w),w=window.setTimeout(function(){var f,z;(f=t.current[v])===null||f===void 0||f.focus(),(z=t.current[v])===null||z===void 0||z.setSelectionRange(r,r)},0)};$(function(i){for(var v=g,r=0,f=0;v<L.length&&f<u.length;){var z=u.slice(f,f+L[v]);f<u.length&&(r=v),i=D()(D()({},i),{},X()({},v,z)),f+=L[v],v++}var B=i[r].length;return A(r,B),i})}}},[L]);return(0,e.useEffect)(function(){var o=c.current;if(o){var g=window.getComputedStyle(o);O(parseFloat(g.fontSize||"14"));var I=function(u){if(u.preventDefault(),u.stopPropagation(),u.key!=="Delete"){if(u.key==="Backspace"){var w=a.current,A=t.current[w];if(!A)return;var i=A.value,v=A.selectionStart;if((i.length===0||v===0)&&w>0){var r=t.current[w-1];r==null||r.focus(),r==null||r.setSelectionRange(r.value.length,r.value.length)}return}if(u.key==="ArrowLeft"&&a.current>0){var f=a.current,z=t.current[f],B=z.selectionStart;if(B===0){var h=t.current[f-1];h==null||h.focus(),h==null||h.setSelectionRange(h.value.length,h.value.length)}return}if(u.key==="ArrowRight"&&a.current<L.length-1){var R=a.current,K=t.current[R],G=K.selectionStart,re=L[R];if(G===re){var V=t.current[R+1];V==null||V.focus(),V==null||V.setSelectionRange(0,0)}return}var q=a.current,de=t.current[q],ve=L[q],fe=de.selectionStart;if(fe===ve&&q<t.current.length-1){var Y=t.current[q+1];Y==null||Y.focus(),Y==null||Y.setSelectionRange(0,Y.value.length)}}},J=function(u){if(x.current&&u.key==="Delete"){var w=a.current,A=t.current[w],i=A.value,v=A.selectionStart;(v===i.length||i.length===0)&&w<L.length-1&&(console.log("Delete",v,i.length),$(function(r){for(var f=w+1;f<t.current.length;){var z=r[f];if(console.log("Delete-1",z),z.length>0){r=D()(D()({},r),{},X()({},f,z.slice(1)));break}f++}return r}));return}},U=function(u){var w;u.preventDefault(),u.stopPropagation();var A=(w=u.clipboardData)===null||w===void 0?void 0:w.getData("text");A&&M(A)};return o.addEventListener("paste",U),o.addEventListener("keyup",I),o.addEventListener("keydown",J),function(){o.removeEventListener("paste",U),o.removeEventListener("keyup",I),o.removeEventListener("keydown",J),t.current=[]}}},[L,M]),(0,e.useEffect)(function(){b&&$(b)},[b]),(0,e.useEffect)(function(){return x.current=!0,function(){x.current=!1}},[]),(0,e.useImperativeHandle)(m,function(){return t.current}),(0,n.jsx)("div",D()(D()({ref:c},C),{},{className:"grid-input "+(C.className||""),children:L.map(function(o,g){return(0,n.jsx)("input",{maxLength:o,style:{width:(o>1?P:30)*o||100},ref:j(g),onFocus:F(g),onInput:p(g,o),value:W[g]||"",onChange:Z(g)},g)})}))}),sn=on}}]);
