import{s as L,n as O,c as M,r as z}from"../chunks/scheduler.09d52c7e.js";import{S as A,i as G,g as v,s as S,e as R,h,j as g,f as u,c as C,a as c,m as I,n as P,B as J,k as V,y as U,E as j,C as w,o as F}from"../chunks/index.348de0aa.js";import{b as q,e as K,d as Q,c as W,s as X}from"../chunks/authStore.a7b32317.js";import{a as Y}from"../chunks/Auth.svelte_svelte_type_style_lang.adbc1b7c.js";function H(f){let r,o,l=f[0].email+"",e,t,a,T="Logout",_,p,m,n,d,k,b,y=f[1].text+"",E,D,x;return{c(){r=v("div"),o=I("Current User: "),e=I(l),t=S(),a=v("button"),a.textContent=T,_=S(),p=v("form"),m=v("input"),n=S(),d=v("input"),k=S(),b=v("p"),E=I(y),this.h()},l(s){r=h(s,"DIV",{});var i=g(r);o=P(i,"Current User: "),e=P(i,l),i.forEach(u),t=C(s),a=h(s,"BUTTON",{"data-svelte-h":!0}),J(a)!=="svelte-pm79qf"&&(a.textContent=T),_=C(s),p=h(s,"FORM",{});var N=g(p);m=h(N,"INPUT",{type:!0}),n=C(N),d=h(N,"INPUT",{type:!0}),N.forEach(u),k=C(s),b=h(s,"P",{});var B=g(b);E=P(B,y),B.forEach(u),this.h()},h(){V(m,"type","text"),V(d,"type","submit"),d.value="Save!"},m(s,i){c(s,r,i),U(r,o),U(r,e),c(s,t,i),c(s,a,i),c(s,_,i),c(s,p,i),U(p,m),j(m,f[2]),U(p,n),U(p,d),c(s,k,i),c(s,b,i),U(b,E),D||(x=[w(a,"click",K.logout),w(m,"input",f[5]),w(p,"submit",f[6])],D=!0)},p(s,i){i&1&&l!==(l=s[0].email+"")&&F(e,l),i&4&&m.value!==s[2]&&j(m,s[2]),i&2&&y!==(y=s[1].text+"")&&F(E,y)},d(s){s&&(u(r),u(t),u(a),u(_),u(p),u(k),u(b)),D=!1,z(x)}}}function Z(f){let r,o,l,e=f[3].currentUser&&H(f);return{c(){r=v("div"),o=S(),e&&e.c(),l=R()},l(t){r=h(t,"DIV",{}),g(r).forEach(u),o=C(t),e&&e.l(t),l=R()},m(t,a){c(t,r,a),c(t,o,a),e&&e.m(t,a),c(t,l,a)},p(t,[a]){t[3].currentUser?e?e.p(t,a):(e=H(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&(u(r),u(o),u(l)),e&&e.d(t)}}}function $(f,r,o){let l;M(f,q,n=>o(3,l=n));let e,t,a="";async function T(){if(l.currentUser)try{const n=Q(W,"users",l.currentUser.uid);await X(n,t,{merge:!0}),console.log("Save successful!")}catch(n){console.log("There was an error saving data!",n)}}function _(n){q.update(d=>({...d,data:n})),T()}q.subscribe(n=>{n.currentUser&&o(0,e=n.currentUser),n.data&&o(1,t=n.data)}),Y(()=>{console.log("after navigate")});function p(){a=this.value,o(2,a)}return[e,t,a,l,_,p,()=>{_({text:a})}]}class le extends A{constructor(r){super(),G(this,r,$,Z,L,{})}}export{le as component};
