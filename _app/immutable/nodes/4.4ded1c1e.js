import{s as y,h as g,n as h,r as $}from"../chunks/scheduler.35f0b4e5.js";import{S as I,i as q,g as o,s as C,h as p,j as D,c as P,f,k as n,a as S,y as _,D as v,C as d,F as b}from"../chunks/index.57cd87e4.js";function j(l){let e,s,r,u,a,c,m;return{c(){e=o("div"),s=o("img"),u=C(),a=o("input"),this.h()},l(i){e=p(i,"DIV",{class:!0});var t=D(e);s=p(t,"IMG",{src:!0,alt:!0,class:!0}),u=P(t),a=p(t,"INPUT",{class:!0,type:!0,min:!0,max:!0}),t.forEach(f),this.h()},h(){g(s.src,r="/images/energy/energy"+l[0]+".svg")||n(s,"src",r),n(s,"alt",""),n(s,"class","svelte-18a8ura"),n(a,"class","range svelte-18a8ura"),n(a,"type","range"),n(a,"min","1"),n(a,"max","5"),n(e,"class","grid-container center svelte-18a8ura")},m(i,t){S(i,e,t),_(e,s),_(e,u),_(e,a),v(a,l[0]),c||(m=[d(a,"change",l[1]),d(a,"input",l[1])],c=!0)},p(i,[t]){t&1&&!g(s.src,r="/images/energy/energy"+i[0]+".svg")&&n(s,"src",r),t&1&&v(a,i[0])},i:h,o:h,d(i){i&&f(e),c=!1,$(m)}}}function k(l,e,s){let r=4;function u(){r=b(this.value),s(0,r)}return[r,u]}class G extends I{constructor(e){super(),q(this,e,k,j,y,{})}}export{G as component};