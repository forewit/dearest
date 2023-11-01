import{s as N,h as H,n as x,r as R,f as J,e as D}from"../chunks/scheduler.85ef5b45.js";import{S as L,i as T,g as h,s as k,h as v,j as C,c as w,f as _,k as c,a as b,y as g,B as S,C as E,D as V,e as A,x as K,t as I,b as Q,d as P,p as W,z as U,A as q,r as B,u as F,v as O,w as j}from"../chunks/index.c6a6ecde.js";import{e as G,b as X}from"../chunks/authStore.37cf8a2a.js";/* empty css                                                   */import{f as $}from"../chunks/index.88186261.js";function M(o){let e,t="Failed to login!";return{c(){e=h("p"),e.textContent=t,this.h()},l(s){e=v(s,"P",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-13uo4rd"&&(e.textContent=t),this.h()},h(){c(e,"class","error svelte-76w8fm")},m(s,i){b(s,e,i)},d(s){s&&_(e)}}}function Y(o){let e,t,s,i,n,r,l,p,a,u,y,z,f=o[2]&&M();return{c(){e=h("form"),t=h("img"),i=k(),n=h("input"),r=k(),l=h("input"),p=k(),f&&f.c(),a=k(),u=h("input"),this.h()},l(m){e=v(m,"FORM",{class:!0});var d=C(e);t=v(d,"IMG",{class:!0,src:!0,alt:!0}),i=w(d),n=v(d,"INPUT",{class:!0,type:!0,placeholder:!0}),r=w(d),l=v(d,"INPUT",{class:!0,type:!0,placeholder:!0}),p=w(d),f&&f.l(d),a=w(d),u=v(d,"INPUT",{type:!0,class:!0}),d.forEach(_),this.h()},h(){c(t,"class","logo svelte-76w8fm"),H(t.src,s="./images/pen.svg")||c(t,"src",s),c(t,"alt","logo"),c(n,"class","email neu-input svelte-76w8fm"),c(n,"type","email"),c(n,"placeholder","Email"),n.required=!0,c(l,"class","password neu-input svelte-76w8fm"),c(l,"type","password"),c(l,"placeholder","Password"),l.required=!0,c(u,"type","submit"),u.value="Login",c(u,"class","btn svelte-76w8fm"),c(e,"class","container svelte-76w8fm")},m(m,d){b(m,e,d),g(e,t),g(e,i),g(e,n),S(n,o[0]),g(e,r),g(e,l),S(l,o[1]),g(e,p),f&&f.m(e,null),g(e,a),g(e,u),y||(z=[E(n,"input",o[4]),E(l,"input",o[5]),E(e,"submit",o[3])],y=!0)},p(m,[d]){d&1&&n.value!==m[0]&&S(n,m[0]),d&2&&l.value!==m[1]&&S(l,m[1]),m[2]?f||(f=M(),f.c(),f.m(e,a)):f&&(f.d(1),f=null)},i:x,o:x,d(m){m&&_(e),f&&f.d(),y=!1,R(z)}}}function Z(o,e,t){let s="",i="",n=!1;async function r(){try{t(2,n=!1),await G.login(s,i)}catch{console.log("Login failed!"),t(2,n=!0)}}function l(){s=this.value,t(0,s)}function p(){i=this.value,t(1,i)}return[s,i,n,r,l,p]}class ee extends L{constructor(e){super(),T(this,e,Z,Y,N,{})}}function te(o){let e;return{c(){e=h("span"),this.h()},l(t){e=v(t,"SPAN",{class:!0}),C(e).forEach(_),this.h()},h(){c(e,"class","loader svelte-8w2x54")},m(t,s){b(t,e,s)},p:x,i:x,o:x,d(t){t&&_(e)}}}class se extends L{constructor(e){super(),T(this,e,null,te,N,{})}}function re(o){let e,t,s="Logout",i,n,r,l,p;return{c(){e=h("div"),t=h("button"),t.textContent=s,this.h()},l(a){e=v(a,"DIV",{});var u=C(e);t=v(u,"BUTTON",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1pg9snb"&&(t.textContent=s),u.forEach(_),this.h()},h(){c(t,"class","logout-btn neu svelte-gx8tzs")},m(a,u){b(a,e,u),g(e,t),r=!0,l||(p=E(t,"click",G.logout),l=!0)},i(a){r||(a&&D(()=>{r&&(n&&n.end(1),i=U(e,$,{duration:300,delay:300}),i.start())}),r=!0)},o(a){i&&i.invalidate(),a&&(n=q(e,$,{duration:300})),r=!1},d(a){a&&_(e),a&&n&&n.end(),l=!1,p()}}}function ne(o){let e,t,s,i,n;return t=new ee({}),{c(){e=h("div"),B(t.$$.fragment),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=C(e);F(t.$$.fragment,l),l.forEach(_),this.h()},h(){c(e,"class","auth-container neu centered svelte-gx8tzs")},m(r,l){b(r,e,l),O(t,e,null),n=!0},i(r){n||(P(t.$$.fragment,r),r&&D(()=>{n&&(i&&i.end(1),s=U(e,$,{duration:300,delay:300}),s.start())}),n=!0)},o(r){I(t.$$.fragment,r),s&&s.invalidate(),r&&(i=q(e,$,{duration:300})),n=!1},d(r){r&&_(e),j(t),r&&i&&i.end()}}}function ie(o){let e,t,s,i,n;return t=new se({}),{c(){e=h("div"),B(t.$$.fragment),this.h()},l(r){e=v(r,"DIV",{class:!0});var l=C(e);F(t.$$.fragment,l),l.forEach(_),this.h()},h(){c(e,"class","centered")},m(r,l){b(r,e,l),O(t,e,null),n=!0},i(r){n||(P(t.$$.fragment,r),r&&D(()=>{n&&(i&&i.end(1),s=U(e,$,{duration:300,delay:300}),s.start())}),n=!0)},o(r){I(t.$$.fragment,r),s&&s.invalidate(),r&&(i=q(e,$,{duration:300})),n=!1},d(r){r&&_(e),j(t),r&&i&&i.end()}}}function le(o){let e,t,s,i,n;const r=[ie,ne,re],l=[];function p(a,u){return a[0].isLoading?0:a[0].currentUser?2:1}return t=p(o),s=l[t]=r[t](o),{c(){e=k(),s.c(),i=A(),this.h()},l(a){K("svelte-14t3t7r",document.head).forEach(_),e=w(a),s.l(a),i=A(),this.h()},h(){document.title="My Dearest"},m(a,u){b(a,e,u),l[t].m(a,u),b(a,i,u),n=!0},p(a,[u]){let y=t;t=p(a),t!==y&&(W(),I(l[y],1,1,()=>{l[y]=null}),Q(),s=l[t],s||(s=l[t]=r[t](a),s.c()),P(s,1),s.m(i.parentNode,i))},i(a){n||(P(s),n=!0)},o(a){I(s),n=!1},d(a){a&&(_(e),_(i)),l[t].d(a)}}}function ae(o,e,t){let s;return J(o,X,i=>t(0,s=i)),[s]}class _e extends L{constructor(e){super(),T(this,e,ae,le,N,{})}}export{_e as component};
