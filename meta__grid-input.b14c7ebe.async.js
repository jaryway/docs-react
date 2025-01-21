"use strict";(self.webpackChunk_jaryway_components=self.webpackChunk_jaryway_components||[]).push([[157],{84456:function(h,d,e){var _;e.r(d),e.d(d,{demos:function(){return O}});var i=e(90228),u=e.n(i),f=e(48305),I=e.n(f),x=e(87999),c=e.n(x),n=e(75271),R=e(32599),D=e(22485),O={"grid-input-demo-0":{component:n.memo(n.lazy(c()(u()().mark(function p(){var o,l,r,s,m;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=a.sent,l=o.useState,a.next=6,Promise.resolve().then(e.bind(e,22485));case 6:return r=a.sent,s=r.GridInput,m=r.GridInput2,a.abrupt("return",{default:function(){var P=l({}),g=I()(P,2),E=g[0],C=g[1],M=l({}),b=I()(M,2),y=b[0],j=b[1];return n.createElement("div",{style:{margin:"16px",width:360}},n.createElement(s,{value:E,onChange:function(v){return C(v)},parterns:[5,3,2,1,1,1,1]}),n.createElement(m,{value:y,onChange:function(v){return j(v)},style:{marginTop:8}}),n.createElement("div",{style:{marginTop:16}},n.createElement("div",null,"value1:"),n.createElement("pre",{style:{backgroundColor:"rgba(0, 0, 0, 0.04)",padding:8,borderRadius:4,margin:0}},JSON.stringify(E,null,2)),n.createElement("div",null,"value2:"),n.createElement("pre",{style:{backgroundColor:"rgba(0, 0, 0, 0.04)",padding:8,borderRadius:4,margin:0}},JSON.stringify(y,null,2))))}});case 10:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"grid-input-demo-0",refAtomIds:["grid-input"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { GridInput, GridInput2 } from '@jaryway/components';

export default () => {
  const [value1, setValue1] = useState({});
  const [value2, setValue2] = useState({});
  return (
    <div style={{ margin: '16px', width: 360 }}>
      <GridInput
        value={value1}
        onChange={(e) => setValue1(e)}
        parterns={[5, 3, 2, 1, 1, 1, 1]}
      />
      <GridInput2
        value={value2}
        onChange={(e) => setValue2(e)}
        style={{ marginTop: 8 }}
      />

      <div style={{ marginTop: 16 }}>
        <div>value1:</div>
        <pre
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            padding: 8,
            borderRadius: 4,
            margin: 0,
          }}
        >
          {JSON.stringify(value1, null, 2)}
        </pre>
        <div>value2:</div>
        <pre
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            padding: 8,
            borderRadius: 4,
            margin: 0,
          }}
        >
          {JSON.stringify(value2, null, 2)}
        </pre>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"@jaryway/components":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:_||(_=e.t(n,2)),"@jaryway/components":D},renderOpts:{compile:function(){var p=c()(u()().mark(function l(){var r,s=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(282).then(e.bind(e,67282));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,s));case 3:case"end":return t.stop()}},l)}));function o(){return p.apply(this,arguments)}return o}()}}}},71158:function(h,d,e){e.r(d),e.d(d,{texts:function(){return i}});var _=e(32599);const i=[{value:"\u683C\u5B50\u8F93\u5165\u6846\u3002",paraId:0,tocIndex:0},{value:"\u683C\u5B50\u8F93\u5165\u7EC4\u4EF6\uFF0CGridInput2 \u4F7F\u7528\u539F\u751F html \u5143\u7D20\u5B9E\u73B0\u3002\u529F\u80FD\uFF1A",paraId:1,tocIndex:0},{value:"\u7EC4\u5408\u65B9\u5F0F\u53EF\u81EA\u7531\u914D\u7F6E",paraId:2,tocIndex:0},{value:"\u652F\u6301\u4ECE\u4EFB\u610F\u4F4D\u7F6E\u8F93\u5165",paraId:2,tocIndex:0},{value:"\u652F\u6301\u4ECE\u4EFB\u610F\u4F4D\u7F6E\u7C98\u8D34",paraId:2,tocIndex:0},{value:"\u652F\u6301\u4ECE\u4EFB\u610F\u4F4D\u7F6E\u5220\u9664\uFF0C\u53EF\u5DE6\u53F3\u5220\u9664",paraId:2,tocIndex:0},{value:"\u53C2\u6570",paraId:3,tocIndex:1},{value:"\u8BF4\u660E",paraId:3,tocIndex:1},{value:"\u7C7B\u578B",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:1},{value:"\u7248\u672C",paraId:3,tocIndex:1},{value:"parterns",paraId:3,tocIndex:1},{value:"\u8F93\u5165\u683C\u5F0F",paraId:3,tocIndex:1},{value:"number[]",paraId:3,tocIndex:1},{value:"[3,1,1,1,1]",paraId:3,tocIndex:1},{value:"value",paraId:3,tocIndex:1},{value:"\u503C",paraId:3,tocIndex:1},{value:"() => void",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"size",paraId:3,tocIndex:1},{value:"\u7EC4\u4EF6\u5927\u5C0F",paraId:3,tocIndex:1},{value:"large",paraId:3,tocIndex:1},{value:" | ",paraId:3,tocIndex:1},{value:"middle",paraId:3,tocIndex:1},{value:" | ",paraId:3,tocIndex:1},{value:"small",paraId:3,tocIndex:1},{value:"middle",paraId:3,tocIndex:1},{value:"onChange",paraId:3,tocIndex:1},{value:"\u503C\u6539\u53D8\u4E8B\u4EF6",paraId:3,tocIndex:1},{value:"(value: Record<number, string>) => void",paraId:3,tocIndex:1},{value:"className",paraId:3,tocIndex:1},{value:"\u6837\u5F0F\u7C7B\u540D",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1}]}}]);
