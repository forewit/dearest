import{s as L,n as O,c as M,r as z}from"../chunks/scheduler.35f0b4e5.js";import{S as A,i as G,g as v,s as S,e as R,h,j as g,f as u,c as C,a as c,m as I,n as P,B as J,k as V,y as U,D as j,C as w,o as F}from"../chunks/index.57cd87e4.js";import{b as q,e as K,d as Q,c as W,s as X}from"../chunks/authStore.081bb4a4.js";import{a as Y}from"../chunks/navigation.d72cda3e.js";/* empty css                                                   */function H(f){let r,o,l=f[0].email+"",e,t,a,T="Logout",_,p,m,i,d,k,b,y=f[1].text+"",D,E,x;return{c(){r=v("div"),o=I("Current User: "),e=I(l),t=S(),a=v("button"),a.textContent=T,_=S(),p=v("form"),m=v("input"),i=S(),d=v("input"),k=S(),b=v("p"),D=I(y),this.h()},l(s){r=h(s,"DIV",{});var n=g(r);o=P(n,"Current User: "),e=P(n,l),n.forEach(u),t=C(s),a=h(s,"BUTTON",{"data-svelte-h":!0}),J(a)!=="svelte-pm79qf"&&(a.textContent=T),_=C(s),p=h(s,"FORM",{});var N=g(p);m=h(N,"INPUT",{type:!0}),i=C(N),d=h(N,"INPUT",{type:!0}),N.forEach(u),k=C(s),b=h(s,"P",{});var B=g(b);D=P(B,y),B.forEach(u),this.h()},h(){V(m,"type","text"),V(d,"type","submit"),d.value="Save!"},m(s,n){c(s,r,n),U(r,o),U(r,e),c(s,t,n),c(s,a,n),c(s,_,n),c(s,p,n),U(p,m),j(m,f[2]),U(p,i),U(p,d),c(s,k,n),c(s,b,n),U(b,D),E||(x=[w(a,"click",K.logout),w(m,"input",f[5]),w(p,"submit",f[6])],E=!0)},p(s,n){n&1&&l!==(l=s[0].email+"")&&F(e,l),n&4&&m.value!==s[2]&&j(m,s[2]),n&2&&y!==(y=s[1].text+"")&&F(D,y)},d(s){s&&(u(r),u(t),u(a),u(_),u(p),u(k),u(b)),E=!1,z(x)}}}function Z(f){let r,o,l,e=f[3].currentUser&&H(f);return{c(){r=v("div"),o=S(),e&&e.c(),l=R()},l(t){r=h(t,"DIV",{}),g(r).forEach(u),o=C(t),e&&e.l(t),l=R()},m(t,a){c(t,r,a),c(t,o,a),e&&e.m(t,a),c(t,l,a)},p(t,[a]){t[3].currentUser?e?e.p(t,a):(e=H(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:O,o:O,d(t){t&&(u(r),u(o),u(l)),e&&e.d(t)}}}function $(f,r,o){let l;M(f,q,i=>o(3,l=i));let e,t,a="";async function T(){if(l.currentUser)try{const i=Q(W,"users",l.currentUser.uid);await X(i,t,{merge:!0}),console.log("Save successful!")}catch(i){console.log("There was an error saving data!",i)}}function _(i){q.update(d=>({...d,data:i})),T()}q.subscribe(i=>{i.currentUser&&o(0,e=i.currentUser),i.data&&o(1,t=i.data)}),Y(()=>{console.log("after navigate")});function p(){a=this.value,o(2,a)}return[e,t,a,l,_,p,()=>{_({text:a})}]}class re extends A{constructor(r){super(),G(this,r,$,Z,L,{})}}export{re as component};
