import{i as y,j as m,w as N,u as T}from"./index-b095beac.js";var w;const e=typeof window!="undefined",r=()=>{};e&&((w=window==null?void 0:window.navigator)==null?void 0:w.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(o){return y()?(m(o),!0):!1}function v(o){var t;const n=T(o);return(t=n==null?void 0:n.$el)!=null?t:n}const I=e?window:void 0;e&&window.document;e&&window.navigator;e&&window.location;const i=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},d="__vueuse_ssr_handlers__";i[d]=i[d]||{};i[d];function P(o,t,n={}){const{root:g,rootMargin:b="0px",threshold:h=.1,window:u=I}=n,l=u&&"IntersectionObserver"in u;let s=r;const _=l?N(()=>({el:v(o),root:v(g)}),({el:c,root:O})=>{if(s(),!c)return;const f=new IntersectionObserver(t,{root:O,rootMargin:b,threshold:h});f.observe(c),s=()=>{f.disconnect(),s=r}},{immediate:!0,flush:"post"}):r,a=()=>{s(),_()};return E(a),{isSupported:l,stop:a}}var p;(function(o){o.UP="UP",o.RIGHT="RIGHT",o.DOWN="DOWN",o.LEFT="LEFT",o.NONE="NONE"})(p||(p={}));export{P as u};