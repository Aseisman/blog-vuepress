import{C as f}from"./Common.88251970.js";import{P as k}from"./PageHeader.e4b8e230.js";import{_ as g,d as h,u as v,G as L,i as B,o as t,e as w,w as x,b as C,f as e,c as o,F as c,D as u,h as y,t as i}from"./app.a0c71b81.js";const D={class:"links-wrapper"},F={class:"link-group"},P={class:"content"},$=["href"],b=["src"],N={class:"sitename"},T={class:"desc"},V=h({__name:"Links",setup(E){const a=v(),_=L(),p=B(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),w(f,null,{page:x(()=>[C(k,{"page-info":p.value},null,8,["page-info"]),e("div",D,[(t(!0),o(c,null,u(y(_).links,(l,d)=>(t(),o("div",{key:`link-group-${d}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",F,[(t(!0),o(c,null,u(l.items,(n,m)=>(t(),o("div",{key:`link-${m}`,class:"link-item"},[e("div",P,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,b),e("span",N,i(n.sitename),1),e("div",T,i(n.desc),1)],8,$)])]))),128))])]))),128))])]),_:1}))}});var S=g(V,[["__file","Links.vue"]]);export{S as default};
