import{n as d,s as m}from"./scheduler.e108d1fd.js";const u=[];function p(t,e=d){let n;const o=new Set;function a(s){if(m(t,s)&&(t=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){a(s(t))}function r(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=e(a,i)||d),s(t),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:r}}var g;const E=((g=globalThis.__sveltekit_1atdtct)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_1atdtct)==null?void 0:k.assets)??E,A="1698416904404",y="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function U(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function v(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function L(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function N(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!o||S(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&t.hasAttribute("download");return{url:n,external:a,target:o,download:i}}function P(t){let e=null,n=null,o=null,a=null,i=null,r=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keep_focus:c(e),noscroll:c(n),reload:c(i),replace_state:c(r)}}function h(t){const e=p(t);let n=!0;function o(){n=!0,e.update(r=>r)}function a(r){n=!1,e.set(r)}function i(r){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:i}}function R(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(t(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:e,check:o}}function S(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function V(t){t.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:R()};export{x as I,_ as P,I as S,y as a,N as b,P as c,Y as d,E as e,L as f,O as g,V as h,S as i,U as s};
