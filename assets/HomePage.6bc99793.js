import{C as T}from"./Common.86ece975.js";import{P as z}from"./Pager.16ff8baf.js";import{d as L,r as C,o as r,c as u,f as t,h,S as N,t as b,b as _,w as B,s as w,_ as S,H as A,u as D,i as y,U as F,F as R,D as V,e as I,A as P,n as q,q as H}from"./app.a6f4447d.js";import{f as E}from"./resolveTime.960c5d27.js";const j={class:"post-item"},O=["src"],U={class:"else"},G={class:"post-item__date"},J={key:0},K=["innerHTML"],Q=L({__name:"PostListItem",props:{item:{type:Object,required:!0}},setup(a){const c=e=>e.replace(/<RouterLink to/g,"<a href").replace(/<\/RouterLink>/g,"</a>");return(e,i)=>{const d=C("RouterLink");return r(),u("div",j,[t("div",{class:"post-item__img",onClick:i[0]||(i[0]=f=>e.$router.push(a.item.path))},[t("img",{src:h(N)(a.item.info.headerImage)},null,8,O)]),t("div",U,[t("p",G,b(a.item.info.date?h(E)(a.item.info.date):""),1),_(d,{to:a.item.path,class:"post-item__title"},{default:B(()=>[t("h2",null,b(a.item.info.title),1),a.item.info.subtitle?(r(),u("h3",J,b(a.item.info.subtitle),1)):w("",!0)]),_:1},8,["to"]),t("div",{class:"post-item__content",innerHTML:c(a.item.info.excerpt||"")},null,8,K)])])}}});var W=S(Q,[["__file","PostListItem.vue"]]);const X={class:"postlist-wrapper"},Y=L({__name:"PostList",setup(a){const c=A(),e=D(),i=y(()=>{const o=decodeURI(c.currentRoute.value.path.replace(/\/page/g,"").replace(/\//g,""));return o===""?1:Number(o)}),{slicedPosts:d,postListPager:f}=F(i),m=y(()=>{const o=f.value,n=o&&o.next?{text:e.value.homeNext,link:o.next}:null,l=o&&o.prev?{text:e.value.homePrev,link:o.prev}:null;return{next:n,prev:l}});return(o,n)=>(r(),u("div",X,[(r(!0),u(R,null,V(h(d),l=>(r(),I(W,{key:l.path,item:l},null,8,["item"]))),128)),m.value.next||m.value.prev?(r(),I(z,{key:0,data:m.value},null,8,["data"])):w("",!0)]))}});var Z=S(Y,[["__file","PostList.vue"]]);const ee={class:"sns-wrapper"},te=["href"],oe=L({__name:"SNS",props:{large:{type:Boolean,default:!0}},setup(a){var o;const c={github:{icon:"fa-github-alt",preLink:"https://github.com/"},linkedin:{icon:"fa-linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"fa-facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"fa-twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"ri-zhihu-line",preLink:"https://www.zhihu.com/people/"},weibo:{icon:"ri-weibo-fill",preLink:"http://weibo.com/u/"},email:{icon:"fa-envelope",preLink:"mailto:"},rss:{icon:"ri-rss-fill",preLink:"",iconScale:.9}},i=(o=D().value.personalInfo)==null?void 0:o.sns,d=(n,l)=>typeof n=="string"?c[l].preLink+n:n.link,f=(n,l)=>typeof n=="string"?c[l].icon:n.icon,m=(n,l)=>(typeof n=="string"?c[l].iconScale:n.iconScale)||1;return(n,l)=>{const g=C("VIcon");return r(),u("div",ee,[(r(!0),u(R,null,V(h(i),(k,v)=>(r(),u("a",{key:`${v}-${k}`,href:d(k,v),target:"_blank",rel:"noopener noreferrer"},[_(g,{class:"icon-stack"},{default:B(()=>[a.large?(r(),I(g,{key:0,name:"fa-circle",scale:"2.3",class:"icon-circle"})):w("",!0),_(g,{name:f(k,v),scale:m(k,v),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,te))),128))])}}});var ne=S(oe,[["__file","SNS.vue"]]);const se={class:"home-blog"},ae=["src"],ie={key:0,class:"hero-bubble"},re={class:"hero-bubble__body"},le=t("div",{class:"hero-bubble__tile"},null,-1),ce={class:"hero-info"},ue={class:"description"},me=L({__name:"Home",setup(a){const c=D(),e=c.value.homeHeaderImages,i=P(-1),d=P(1),f=()=>{window.scrollTo({top:document.querySelector(".hero").clientHeight,behavior:"smooth"})},m=c.value.hitokoto,o=P("\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...");let n=!1;const l=()=>{if(!m||n)return;n=!0;let p=m;p=typeof p=="string"?p:"https://v1.hitokoto.cn",fetch(p).then(s=>s.json()).then(s=>o.value=s.hitokoto).catch(s=>{console.log(`Get ${p} error: `,s)})};q(()=>{e&&e.length>0&&(i.value=Math.floor(Math.random()*e.length))});const g=p=>{if(!(e&&e.length>0))return;const s=e.length;i.value=(i.value+p+s)%s},k=y(()=>e&&e.length>0&&i.value!==-1?`url(${N(e[i.value].path)})`:"none"),v=y(()=>e&&e.length>0&&i.value!==-1?e[i.value].mask:null),$=c.value.personalInfo;return(p,s)=>{const x=C("VIcon");return r(),u("main",se,[t("div",{class:"hero",style:H({"background-image":k.value})},[v.value?(r(),u("div",{key:0,class:"hero-mask",style:H({background:v.value})},null,4)):w("",!0),t("div",{class:"hero-content",style:H({opacity:d.value})},[t("img",{class:"hero-avatar hide-on-mobile",src:h(N)(h($).avatar),alt:"hero",onMouseover:l},null,40,ae),h(m)?(r(),u("div",ie,[t("div",re,[t("p",null,b(o.value),1)]),le])):w("",!0),t("div",ce,[t("h1",null,b(h($).name),1),t("p",ue,b(h($).description),1)]),_(ne,{class:"hide-on-mobile",large:""}),t("button",{class:"hero-img-prev hide-on-mobile",onClick:s[0]||(s[0]=M=>g(-1))},[_(x,{name:"fa-chevron-left"})]),t("button",{class:"hero-img-next hide-on-mobile",onClick:s[1]||(s[1]=M=>g(1))},[_(x,{name:"fa-chevron-right"})]),t("span",{class:"hero-arrow-down hide-on-mobile",onClick:s[2]||(s[2]=M=>f())},[_(x,{name:"fa-chevron-down",animation:"float"})])],4)],4),_(Z)])}}});var he=S(me,[["__file","Home.vue"]]);const _e=L({__name:"HomePage",setup(a){return(c,e)=>(r(),I(T,null,{page:B(()=>[_(he)]),_:1}))}});var ge=S(_e,[["__file","HomePage.vue"]]);export{ge as default};
