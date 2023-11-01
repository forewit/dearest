import{s as N,h as K,r as Q,f as P,n as S,c as W}from"../chunks/scheduler.35f0b4e5.js";import{S as q,i as A,g as h,s as k,h as m,j as I,c as C,B as T,f as _,k as c,a as v,y as b,E,C as M,d as y,p as j,t as x,b as B,D as H,e as U,x as X,r as F,u as O,v as V,z as G,A as R,w as J}from"../chunks/index.8012f2c6.js";import{f as w}from"../chunks/index.50a917e9.js";import{e as Y,b as Z}from"../chunks/authStore.83e3c9ce.js";/* empty css                                                   */function z(o){let e,t="Failed to login!",n,l;return{c(){e=h("p"),e.textContent=t,this.h()},l(r){e=m(r,"P",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-1g3skzd"&&(e.textContent=t),this.h()},h(){c(e,"class","error svelte-1mgd244")},m(r,s){v(r,e,s),l=!0},i(r){l||(r&&P(()=>{l&&(n||(n=H(e,w,{duration:150},!0)),n.run(1))}),l=!0)},o(r){r&&(n||(n=H(e,w,{duration:150},!1)),n.run(0)),l=!1},d(r){r&&_(e),r&&n&&n.end()}}}function ee(o){let e,t,n,l,r,s,i,g,a,d,$='<img src="/images/login.svg" alt="login"/>',L,D,u=o[2]&&z();return{c(){e=h("form"),t=h("img"),l=k(),r=h("input"),s=k(),i=h("input"),g=k(),u&&u.c(),a=k(),d=h("button"),d.innerHTML=$,this.h()},l(p){e=m(p,"FORM",{class:!0});var f=I(e);t=m(f,"IMG",{class:!0,src:!0,alt:!0}),l=C(f),r=m(f,"INPUT",{class:!0,type:!0,placeholder:!0}),s=C(f),i=m(f,"INPUT",{class:!0,type:!0,placeholder:!0}),g=C(f),u&&u.l(f),a=C(f),d=m(f,"BUTTON",{class:!0,"data-svelte-h":!0}),T(d)!=="svelte-a09cu3"&&(d.innerHTML=$),f.forEach(_),this.h()},h(){c(t,"class","logo svelte-1mgd244"),K(t.src,n="./images/pen.svg")||c(t,"src",n),c(t,"alt","logo"),c(r,"class","email input svelte-1mgd244"),c(r,"type","email"),c(r,"placeholder"," "),r.required=!0,c(i,"class","password input svelte-1mgd244"),c(i,"type","password"),c(i,"placeholder"," "),i.required=!0,c(d,"class","button login svelte-1mgd244"),c(e,"class","container svelte-1mgd244")},m(p,f){v(p,e,f),b(e,t),b(e,l),b(e,r),E(r,o[0]),b(e,s),b(e,i),E(i,o[1]),b(e,g),u&&u.m(e,null),b(e,a),b(e,d),L||(D=[M(r,"input",o[4]),M(i,"input",o[5]),M(d,"click",o[3])],L=!0)},p(p,[f]){f&1&&r.value!==p[0]&&E(r,p[0]),f&2&&i.value!==p[1]&&E(i,p[1]),p[2]?u?f&4&&y(u,1):(u=z(),u.c(),y(u,1),u.m(e,a)):u&&(j(),x(u,1,1,()=>{u=null}),B())},i(p){y(u)},o(p){x(u)},d(p){p&&_(e),u&&u.d(),L=!1,Q(D)}}}function te(o,e,t){let n="",l="",r=!1;async function s(){try{t(2,r=!1),await Y.login(n,l)}catch{console.log("Login failed!"),t(2,r=!0)}}function i(){n=this.value,t(0,n)}function g(){l=this.value,t(1,l)}return[n,l,r,s,i,g]}class ne extends q{constructor(e){super(),A(this,e,te,ee,N,{})}}function re(o){let e;return{c(){e=h("span"),this.h()},l(t){e=m(t,"SPAN",{class:!0}),I(e).forEach(_),this.h()},h(){c(e,"class","loader svelte-8w2x54")},m(t,n){v(t,e,n)},p:S,i:S,o:S,d(t){t&&_(e)}}}class se extends q{constructor(e){super(),A(this,e,null,re,N,{})}}function le(o){let e,t="logged in",n,l,r="energy";return{c(){e=h("h1"),e.textContent=t,n=k(),l=h("a"),l.textContent=r,this.h()},l(s){e=m(s,"H1",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-orv2zl"&&(e.textContent=t),n=C(s),l=m(s,"A",{href:!0,"data-svelte-h":!0}),T(l)!=="svelte-2si79f"&&(l.textContent=r),this.h()},h(){c(e,"class","center"),c(l,"href","/energy")},m(s,i){v(s,e,i),v(s,n,i),v(s,l,i)},i:S,o:S,d(s){s&&(_(e),_(n),_(l))}}}function ie(o){let e,t,n,l,r;return t=new ne({}),{c(){e=h("div"),F(t.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0});var i=I(e);O(t.$$.fragment,i),i.forEach(_),this.h()},h(){c(e,"class","auth-container neu center svelte-1jn80n")},m(s,i){v(s,e,i),V(t,e,null),r=!0},i(s){r||(y(t.$$.fragment,s),s&&P(()=>{r&&(l&&l.end(1),n=G(e,w,{duration:300,delay:300}),n.start())}),r=!0)},o(s){x(t.$$.fragment,s),n&&n.invalidate(),s&&(l=R(e,w,{duration:300})),r=!1},d(s){s&&_(e),J(t),s&&l&&l.end()}}}function ae(o){let e,t,n,l,r;return t=new se({}),{c(){e=h("div"),F(t.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0});var i=I(e);O(t.$$.fragment,i),i.forEach(_),this.h()},h(){c(e,"class","center")},m(s,i){v(s,e,i),V(t,e,null),r=!0},i(s){r||(y(t.$$.fragment,s),s&&P(()=>{r&&(l&&l.end(1),n=G(e,w,{duration:300,delay:300}),n.start())}),r=!0)},o(s){x(t.$$.fragment,s),n&&n.invalidate(),s&&(l=R(e,w,{duration:300})),r=!1},d(s){s&&_(e),J(t),s&&l&&l.end()}}}function oe(o){let e,t,n,l,r;const s=[ae,ie,le],i=[];function g(a,d){return a[0].isLoading?0:a[0].currentUser?2:1}return t=g(o),n=i[t]=s[t](o),{c(){e=k(),n.c(),l=U(),this.h()},l(a){X("svelte-14t3t7r",document.head).forEach(_),e=C(a),n.l(a),l=U(),this.h()},h(){document.title="My Dearest"},m(a,d){v(a,e,d),i[t].m(a,d),v(a,l,d),r=!0},p(a,[d]){let $=t;t=g(a),t!==$&&(j(),x(i[$],1,1,()=>{i[$]=null}),B(),n=i[t],n||(n=i[t]=s[t](a),n.c()),y(n,1),n.m(l.parentNode,l))},i(a){r||(y(n),r=!0)},o(a){x(n),r=!1},d(a){a&&(_(e),_(l)),i[t].d(a)}}}function ue(o,e,t){let n;return W(o,Z,l=>t(0,n=l)),[n]}class he extends q{constructor(e){super(),A(this,e,ue,oe,N,{})}}export{he as component};
