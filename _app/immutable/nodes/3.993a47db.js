import{s as L,n as B,f as M,r as z}from"../chunks/scheduler.85ef5b45.js";import{S as A,i as G,g as v,s as S,e as O,h,j as N,f as u,c as C,a as c,m as I,n as P,D as J,k as R,y as U,B as V,C as w,o as F}from"../chunks/index.c6a6ecde.js";import{b as j,e as K,d as Q,c as W,s as X}from"../chunks/authStore.37cf8a2a.js";/* empty css                                                   */import{j as Y}from"../chunks/singletons.c90f1b00.js";const Z=Y("after_navigate");function H(f){let r,o,l=f[0].email+"",e,t,a,T="Logout",_,p,m,n,d,g,b,y=f[1].text+"",k,E,q;return{c(){r=v("div"),o=I("Current User: "),e=I(l),t=S(),a=v("button"),a.textContent=T,_=S(),p=v("form"),m=v("input"),n=S(),d=v("input"),g=S(),b=v("p"),k=I(y),this.h()},l(s){r=h(s,"DIV",{});var i=N(r);o=P(i,"Current User: "),e=P(i,l),i.forEach(u),t=C(s),a=h(s,"BUTTON",{"data-svelte-h":!0}),J(a)!=="svelte-pm79qf"&&(a.textContent=T),_=C(s),p=h(s,"FORM",{});var D=N(p);m=h(D,"INPUT",{type:!0}),n=C(D),d=h(D,"INPUT",{type:!0}),D.forEach(u),g=C(s),b=h(s,"P",{});var x=N(b);k=P(x,y),x.forEach(u),this.h()},h(){R(m,"type","text"),R(d,"type","submit"),d.value="Save!"},m(s,i){c(s,r,i),U(r,o),U(r,e),c(s,t,i),c(s,a,i),c(s,_,i),c(s,p,i),U(p,m),V(m,f[2]),U(p,n),U(p,d),c(s,g,i),c(s,b,i),U(b,k),E||(q=[w(a,"click",K.logout),w(m,"input",f[5]),w(p,"submit",f[6])],E=!0)},p(s,i){i&1&&l!==(l=s[0].email+"")&&F(e,l),i&4&&m.value!==s[2]&&V(m,s[2]),i&2&&y!==(y=s[1].text+"")&&F(k,y)},d(s){s&&(u(r),u(t),u(a),u(_),u(p),u(g),u(b)),E=!1,z(q)}}}function $(f){let r,o,l,e=f[3].currentUser&&H(f);return{c(){r=v("div"),o=S(),e&&e.c(),l=O()},l(t){r=h(t,"DIV",{}),N(r).forEach(u),o=C(t),e&&e.l(t),l=O()},m(t,a){c(t,r,a),c(t,o,a),e&&e.m(t,a),c(t,l,a)},p(t,[a]){t[3].currentUser?e?e.p(t,a):(e=H(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:B,o:B,d(t){t&&(u(r),u(o),u(l)),e&&e.d(t)}}}function ee(f,r,o){let l;M(f,j,n=>o(3,l=n));let e,t,a="";async function T(){if(l.currentUser)try{const n=Q(W,"users",l.currentUser.uid);await X(n,t,{merge:!0}),console.log("Save successful!")}catch(n){console.log("There was an error saving data!",n)}}function _(n){j.update(d=>({...d,data:n})),T()}j.subscribe(n=>{n.currentUser&&o(0,e=n.currentUser),n.data&&o(1,t=n.data)}),Z(()=>{console.log("after navigate")});function p(){a=this.value,o(2,a)}return[e,t,a,l,_,p,()=>{_({text:a})}]}class ne extends A{constructor(r){super(),G(this,r,ee,$,L,{})}}export{ne as component};
