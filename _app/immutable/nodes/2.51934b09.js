import{s as q,r as te,f as x,n as P,c as re}from"../chunks/scheduler.09d52c7e.js";import{S as z,i as A,g as p,s as D,h,j as b,f as c,c as I,B as j,k as v,a as $,y as _,E as M,C as U,d as w,p as Q,t as S,b as W,D as G,e as J,x as se,z as B,A as F,r as X,u as Y,v as Z,w as ee}from"../chunks/index.348de0aa.js";import{f as k}from"../chunks/index.6e8cb6e9.js";import{e as ne,b as ie}from"../chunks/authStore.a7b32317.js";/* empty css                                                   */function K(o){let e,t="Failed to login!",r,i;return{c(){e=p("p"),e.textContent=t,this.h()},l(s){e=h(s,"P",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1g3skzd"&&(e.textContent=t),this.h()},h(){v(e,"class","error svelte-1pvbvdu")},m(s,n){$(s,e,n),i=!0},i(s){i||(s&&x(()=>{i&&(r||(r=G(e,k,{duration:150},!0)),r.run(1))}),i=!0)},o(s){s&&(r||(r=G(e,k,{duration:150},!1)),r.run(0)),i=!1},d(s){s&&c(e),s&&r&&r.end()}}}function le(o){let e,t,r,i,s,n,l,g,a,f,E,T,H,V,y,O='<div class="login-logo svelte-1pvbvdu"></div>',N,R,u=o[2]&&K();return{c(){e=p("form"),t=p("div"),r=D(),i=p("div"),s=p("input"),n=D(),l=p("div"),g=D(),a=p("div"),f=p("input"),E=D(),T=p("div"),H=D(),u&&u.c(),V=D(),y=p("button"),y.innerHTML=O,this.h()},l(m){e=h(m,"FORM",{class:!0});var d=b(e);t=h(d,"DIV",{class:!0}),b(t).forEach(c),r=I(d),i=h(d,"DIV",{class:!0});var C=b(i);s=h(C,"INPUT",{class:!0,type:!0}),n=I(C),l=h(C,"DIV",{class:!0}),b(l).forEach(c),C.forEach(c),g=I(d),a=h(d,"DIV",{class:!0});var L=b(a);f=h(L,"INPUT",{class:!0,type:!0}),E=I(L),T=h(L,"DIV",{class:!0}),b(T).forEach(c),L.forEach(c),H=I(d),u&&u.l(d),V=I(d),y=h(d,"BUTTON",{class:!0,"data-svelte-h":!0}),j(y)!=="svelte-1rbrzli"&&(y.innerHTML=O),d.forEach(c),this.h()},h(){v(t,"class","heart-logo svelte-1pvbvdu"),v(s,"class","email input svelte-1pvbvdu"),v(s,"type","email"),s.required=!0,v(l,"class","email-logo svelte-1pvbvdu"),v(i,"class","email svelte-1pvbvdu"),v(f,"class","input svelte-1pvbvdu"),v(f,"type","password"),f.required=!0,v(T,"class","password-logo svelte-1pvbvdu"),v(a,"class","password svelte-1pvbvdu"),v(y,"class","button login svelte-1pvbvdu"),v(e,"class","container svelte-1pvbvdu")},m(m,d){$(m,e,d),_(e,t),_(e,r),_(e,i),_(i,s),M(s,o[0]),_(i,n),_(i,l),_(e,g),_(e,a),_(a,f),M(f,o[1]),_(a,E),_(a,T),_(e,H),u&&u.m(e,null),_(e,V),_(e,y),N||(R=[U(s,"input",o[4]),U(f,"input",o[5]),U(y,"click",o[3])],N=!0)},p(m,[d]){d&1&&s.value!==m[0]&&M(s,m[0]),d&2&&f.value!==m[1]&&M(f,m[1]),m[2]?u?d&4&&w(u,1):(u=K(),u.c(),w(u,1),u.m(e,V)):u&&(Q(),S(u,1,1,()=>{u=null}),W())},i(m){w(u)},o(m){S(u)},d(m){m&&c(e),u&&u.d(),N=!1,te(R)}}}function ae(o,e,t){let r="",i="",s=!1;async function n(){try{t(2,s=!1),await ne.login(r,i)}catch{console.log("Login failed!"),t(2,s=!0)}}function l(){r=this.value,t(0,r)}function g(){i=this.value,t(1,i)}return[r,i,s,n,l,g]}class oe extends z{constructor(e){super(),A(this,e,ae,le,q,{})}}function ue(o){let e;return{c(){e=p("span"),this.h()},l(t){e=h(t,"SPAN",{class:!0}),b(e).forEach(c),this.h()},h(){v(e,"class","loader svelte-tms8hr")},m(t,r){$(t,e,r)},p:P,i:P,o:P,d(t){t&&c(e)}}}class ce extends z{constructor(e){super(),A(this,e,null,ue,q,{})}}function fe(o){let e,t='<h1>logged in</h1> <a href="/energy">energy</a>',r,i,s;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(n){e=h(n,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1579m6n"&&(e.innerHTML=t),this.h()},h(){v(e,"class","center")},m(n,l){$(n,e,l),s=!0},i(n){s||(n&&x(()=>{s&&(i&&i.end(1),r=B(e,k,{duration:300,delay:300}),r.start())}),s=!0)},o(n){r&&r.invalidate(),n&&(i=F(e,k,{duration:300})),s=!1},d(n){n&&c(e),n&&i&&i.end()}}}function de(o){let e,t,r,i,s;return t=new oe({}),{c(){e=p("div"),X(t.$$.fragment),this.h()},l(n){e=h(n,"DIV",{class:!0});var l=b(e);Y(t.$$.fragment,l),l.forEach(c),this.h()},h(){v(e,"class","auth-container center svelte-1jn80n")},m(n,l){$(n,e,l),Z(t,e,null),s=!0},i(n){s||(w(t.$$.fragment,n),n&&x(()=>{s&&(i&&i.end(1),r=B(e,k,{duration:300,delay:300}),r.start())}),s=!0)},o(n){S(t.$$.fragment,n),r&&r.invalidate(),n&&(i=F(e,k,{duration:300})),s=!1},d(n){n&&c(e),ee(t),n&&i&&i.end()}}}function ve(o){let e,t,r,i,s;return t=new ce({}),{c(){e=p("div"),X(t.$$.fragment),this.h()},l(n){e=h(n,"DIV",{class:!0});var l=b(e);Y(t.$$.fragment,l),l.forEach(c),this.h()},h(){v(e,"class","center")},m(n,l){$(n,e,l),Z(t,e,null),s=!0},i(n){s||(w(t.$$.fragment,n),n&&x(()=>{s&&(i&&i.end(1),r=B(e,k,{duration:300,delay:300}),r.start())}),s=!0)},o(n){S(t.$$.fragment,n),r&&r.invalidate(),n&&(i=F(e,k,{duration:300})),s=!1},d(n){n&&c(e),ee(t),n&&i&&i.end()}}}function _e(o){let e,t,r,i,s;const n=[ve,de,fe],l=[];function g(a,f){return a[0].isLoading?0:a[0].currentUser?2:1}return t=g(o),r=l[t]=n[t](o),{c(){e=D(),r.c(),i=J(),this.h()},l(a){se("svelte-14t3t7r",document.head).forEach(c),e=I(a),r.l(a),i=J(),this.h()},h(){document.title="My Dearest"},m(a,f){$(a,e,f),l[t].m(a,f),$(a,i,f),s=!0},p(a,[f]){let E=t;t=g(a),t!==E&&(Q(),S(l[E],1,1,()=>{l[E]=null}),W(),r=l[t],r||(r=l[t]=n[t](a),r.c()),w(r,1),r.m(i.parentNode,i))},i(a){s||(w(r),s=!0)},o(a){S(r),s=!1},d(a){a&&(c(e),c(i)),l[t].d(a)}}}function pe(o,e,t){let r;return re(o,ie,i=>t(0,r=i)),[r]}class $e extends z{constructor(e){super(),A(this,e,pe,_e,q,{})}}export{$e as component};
