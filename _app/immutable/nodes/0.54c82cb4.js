import{s as I,c as B,o as F,d as N,u as P,g as G,e as J,f as R,n as K}from"../chunks/scheduler.35f0b4e5.js";import{S as Q,i as W,g,s as L,x as X,h as y,f as d,c as C,j as T,k as v,l as m,y as S,a as D,t as b,b as M,d as p,z as V,A as q,B as Y,C as Z,p as U}from"../chunks/index.57cd87e4.js";import{a as x,b as E,d as A,c as O,g as $,s as ee,e as te}from"../chunks/authStore.83e3c9ce.js";import{f as w}from"../chunks/index.50a917e9.js";function ae({url:c}){return{url:c.pathname}}const se=!0,ce=Object.freeze(Object.defineProperty({__proto__:null,load:ae,prerender:se},Symbol.toStringTag,{value:"Module"}));function j(c){let a,r,i,l;const f=c[6].default,s=N(f,c,c[5],null);return{c(){a=g("div"),s&&s.c()},l(e){a=y(e,"DIV",{});var o=T(a);s&&s.l(o),o.forEach(d)},m(e,o){D(e,a,o),s&&s.m(a,null),l=!0},p(e,o){s&&s.p&&(!l||o&32)&&P(s,f,e,e[5],l?J(f,e[5],o,null):G(e[5]),null)},i(e){l||(p(s,e),e&&R(()=>{l&&(i&&i.end(1),r=V(a,w,{duration:300,delay:300}),r.start())}),l=!0)},o(e){b(s,e),r&&r.invalidate(),e&&(i=q(a,w,{duration:300})),l=!1},d(e){e&&d(a),s&&s.d(e),e&&i&&i.end()}}}function H(c){let a,r,i='<div class="logout-logo svelte-1ezsu4i"></div>',l,f,s,e,o;return{c(){a=g("a"),r=g("button"),r.innerHTML=i,this.h()},l(t){a=y(t,"A",{href:!0});var n=T(a);r=y(n,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(r)!=="svelte-1283q6g"&&(r.innerHTML=i),n.forEach(d),this.h()},h(){v(r,"class","logout-btn button svelte-1ezsu4i"),v(a,"href","/")},m(t,n){D(t,a,n),S(a,r),s=!0,e||(o=Z(r,"click",te.logout),e=!0)},i(t){s||(t&&R(()=>{s&&(f&&f.end(1),l=V(a,w,{duration:300,delay:300}),l.start())}),s=!0)},o(t){l&&l.invalidate(),t&&(f=q(a,w,{duration:300})),s=!1},d(t){t&&d(a),t&&f&&f.end(),e=!1,o()}}}function oe(c){let a,r,i,l,f=c[0].url,s,e,o=j(c),t=c[4].currentUser&&H();return{c(){a=g("meta"),r=L(),i=g("div"),l=g("div"),o.c(),s=L(),t&&t.c(),this.h()},l(n){const u=X("svelte-1xk05yi",document.head);a=y(u,"META",{name:!0,content:!0}),u.forEach(d),r=C(n),i=y(n,"DIV",{class:!0,style:!0});var k=T(i);l=y(k,"DIV",{class:!0});var _=T(l);o.l(_),s=C(_),t&&t.l(_),_.forEach(d),k.forEach(d),this.h()},h(){v(a,"name","viewport"),v(a,"content","width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"),v(l,"class","content svelte-1ezsu4i"),v(i,"class","container svelte-1ezsu4i"),m(i,"--notch-left",c[1]),m(i,"--notch-right",c[2]),m(i,"--notch-top",c[3])},m(n,u){S(document.head,a),D(n,r,u),D(n,i,u),S(i,l),o.m(l,null),S(l,s),t&&t.m(l,null),e=!0},p(n,[u]){u&1&&I(f,f=n[0].url)?(U(),b(o,1,1,K),M(),o=j(n),o.c(),p(o,1),o.m(l,s)):o.p(n,u),n[4].currentUser?t?u&16&&p(t,1):(t=H(),t.c(),p(t,1),t.m(l,null)):t&&(U(),b(t,1,1,()=>{t=null}),M()),(!e||u&2)&&m(i,"--notch-left",n[1]),(!e||u&4)&&m(i,"--notch-right",n[2]),(!e||u&8)&&m(i,"--notch-top",n[3])},i(n){e||(p(o),p(t),e=!0)},o(n){b(o),b(t),e=!1},d(n){n&&(d(r),d(i)),d(a),o.d(n),t&&t.d()}}}function ne(c,a,r){let i;B(c,E,u=>r(4,i=u));let{$$slots:l={},$$scope:f}=a,{data:s}=a,e=0,o=0,t=0;function n(){r(1,e=screen.orientation.type=="landscape-primary"?1:0),r(2,o=screen.orientation.type=="landscape-secondary"?1:0),r(3,t=screen.orientation.type=="portrait-primary"?1:0)}return F(()=>{screen.orientation.onchange=n,n(),x.onAuthStateChanged(async u=>{if(!u){E.update(h=>({...h,isLoading:!1,currentUser:u}));return}const k=A(O,"users",u.uid),_=await $(k);let z={text:""};if(_.exists())console.log("Fetching firestore user doc..."),z=_.data();else{console.log("Creating firestore user doc...");const h=A(O,"users",u.uid);await ee(h,z,{merge:!0})}E.update(h=>({...h,isLoading:!1,currentUser:u,data:z}))})}),c.$$set=u=>{"data"in u&&r(0,s=u.data),"$$scope"in u&&r(5,f=u.$$scope)},[s,e,o,t,i,f,l]}class fe extends Q{constructor(a){super(),W(this,a,ne,oe,I,{data:0})}}export{fe as component,ce as universal};
