import{s as E,c as L,u as j,g as q,d as C,o as M}from"../chunks/scheduler.63274e7e.js";import{S as O,i as R,g,s as k,x as A,h as v,f as d,c as I,j as y,k as _,l as f,y as S,a as b,d as U,t as V}from"../chunks/index.a7311e4f.js";import{a as $,b as w,d as D,c as T,g as z,s as F}from"../chunks/authStore.c96964db.js";const P=!0,N=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"}));function B(r){let n,i,a,l,o;const c=r[4].default,s=L(c,r,r[3],null);return{c(){n=g("meta"),i=k(),a=g("div"),l=g("div"),s&&s.c(),this.h()},l(e){const t=A("svelte-1xk05yi",document.head);n=v(t,"META",{name:!0,content:!0}),t.forEach(d),i=I(e),a=v(e,"DIV",{class:!0,style:!0});var h=y(a);l=v(h,"DIV",{class:!0});var p=y(l);s&&s.l(p),p.forEach(d),h.forEach(d),this.h()},h(){_(n,"name","viewport"),_(n,"content","width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"),_(l,"class","content svelte-14o8fpq"),_(a,"class","container svelte-14o8fpq"),f(a,"--notch-left",r[0]),f(a,"--notch-right",r[1]),f(a,"--notch-top",r[2])},m(e,t){S(document.head,n),b(e,i,t),b(e,a,t),S(a,l),s&&s.m(l,null),o=!0},p(e,[t]){s&&s.p&&(!o||t&8)&&j(s,c,e,e[3],o?C(c,e[3],t,null):q(e[3]),null),(!o||t&1)&&f(a,"--notch-left",e[0]),(!o||t&2)&&f(a,"--notch-right",e[1]),(!o||t&4)&&f(a,"--notch-top",e[2])},i(e){o||(U(s,e),o=!0)},o(e){V(s,e),o=!1},d(e){e&&(d(i),d(a)),d(n),s&&s.d(e)}}}function G(r,n,i){let{$$slots:a={},$$scope:l}=n,o=0,c=0,s=0;function e(){i(0,o=screen.orientation.type=="landscape-primary"?1:0),i(1,c=screen.orientation.type=="landscape-secondary"?1:0),i(2,s=screen.orientation.type=="portrait-primary"?1:0)}return M(()=>{screen.orientation.onchange=e,e(),$.onAuthStateChanged(async t=>{if(!t){w.update(u=>({...u,isLoading:!1,currentUser:t}));return}const h=D(T,"users",t.uid),p=await z(h);let m={text:""};if(p.exists())console.log("Fetching firestore user doc..."),m=p.data();else{console.log("Creating firestore user doc...");const u=D(T,"users",t.uid);await F(u,m,{merge:!0})}w.update(u=>({...u,isLoading:!1,currentUser:t,data:m}))})}),r.$$set=t=>{"$$scope"in t&&i(3,l=t.$$scope)},[o,c,s,l,a]}class Q extends O{constructor(n){super(),R(this,n,G,B,E,{})}}export{Q as component,N as universal};
