(()=>{"use strict";var e,o={690:(e,o,t)=>{var r=t(358),a=t(82);r.ZP.registerPlugin(a.Z);const n=document.body,l=document.querySelector("main"),i=document.querySelector(".preloader");let u=window.innerWidth,s=window.innerHeight,c=document.querySelector(".t1"),d=document.querySelector(".t2"),m=document.querySelector(".t3"),g=document.querySelector(".hero"),p=document.querySelector("nav"),h=document.querySelector(".nav__burgermenu"),f=document.querySelector(".nav__burgermenu__line:first-of-type"),b=document.querySelector(".nav__burgermenu__line:last-of-type"),y=!1,w=document.querySelector(".nav__burgermenu__area"),v=!1;v=u<=768;let P=document.querySelector("#blog-link"),A=document.querySelector("#burger-blog-link"),E=document.querySelectorAll(".menu-links"),Z=document.querySelectorAll(".burgerlink"),q=document.querySelector(".hero__img"),S=document.querySelectorAll("img.img"),_=document.querySelectorAll(".section__info"),k=document.querySelector(".posturologia"),O=document.querySelector(".pindasweda"),Y=document.querySelectorAll(".hide-on-blog"),L=document.querySelectorAll(".blog"),C=document.querySelectorAll(".blog-anim"),T=!1;window.scrollTo({top:0,behavior:"smooth"}),window.addEventListener("load",(async()=>{if(u=window.innerWidth,s=window.innerHeight,r.ZP.timeline().to(i,{delay:2,duration:.3,autoAlpha:0,scaleY:0,ease:"Power1.out"}).from(l,{background:"#1F3E4D",delay:1,duration:.3}).from(c,{duration:1,rotate:30,scaleX:2,scaleY:0,transformOrigin:"bottom left",autoAlpha:0,ease:"Power2.in"}).from(d,{duration:.9,rotate:-30,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power2.in"},"-=0.7").from(m,{duration:.8,rotate:-30,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power2.in"},"-=0.7").from(g,{duration:1.5,scale:2,transformOrigin:"center center",autoAlpha:0,ease:"Power1.in"}).from(p,{duration:.5,y:-20,autoAlpha:0},"-=.7"),r.ZP.to(q,{duration:1,rotate:90,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power1.in",scrollTrigger:{trigger:q,start:"top 35%",end:"bottom 10%",toggleActions:"restart none reverse reset"}}),v||(S.forEach((e=>{r.ZP.from(e,{duration:.5,y:350,scaleY:0,autoAlpha:0,ease:"power1.out",scrollTrigger:{trigger:e,start:"top 150%",end:"bottom 25%",toggleActions:"restart pause resume reverse"}})})),_.forEach((e=>{r.ZP.from(e,{duration:.5,y:350,autoAlpha:0,transformOrigin:"bottom 50%",ease:"power1.out",scrollTrigger:{trigger:e,start:"top 120%",end:"bottom 25%",toggleActions:"restart pause resume reverse"}})}))),r.ZP.to(n,{duration:1,backgroundColor:"#D3CDBF",ease:"power1.out",scrollTrigger:{trigger:k,start:"top 30%",end:"bottom -50%",scrub:!0}}),r.ZP.to(n,{duration:1,backgroundColor:"#E3E5E8",ease:"power1.out",scrollTrigger:{trigger:O,markers:!1,start:"top 30%",end:"bottom -50%",scrub:!0}}),r.ZP.to(p,{duration:1,backgroundColor:"#D3CDBF",ease:"power1.out",scrollTrigger:{trigger:k,start:"top 30%",end:"bottom -50%",scrub:!0}}),r.ZP.to(p,{duration:1,backgroundColor:"#E3E5E8",ease:"power1.out",scrollTrigger:{trigger:O,markers:!1,start:"top 30%",end:"bottom -50%",scrub:!0}}),!v){let e=window.pageYOffset;window.onscroll=function(){let o=window.pageYOffset;(e<o||e>o)&&r.ZP.timeline().to(p,{y:-20,opacity:0,duration:.3,ease:"Power1.out"}).to(p,{delay:.3,y:0,opacity:1}),e=o}}}));const x=()=>{r.ZP.to(f,{y:"0",rotate:"0"}),r.ZP.to(b,{y:"0",rotate:"0"}),r.ZP.to(w,{duration:1,x:0}),y=!1};h.addEventListener("click",(()=>{if(!1===y)return r.ZP.to(f,{y:"0.4rem",rotate:"-45deg"}),r.ZP.to(b,{y:"-0.4rem",rotate:"45deg"}),v?r.ZP.to(w,{duration:1,x:"-100%"}):r.ZP.to(w,{duration:1,x:"-200%"}),void(y=!0);!0===y&&x()})),Z.forEach((e=>{e.addEventListener("click",(e=>{console.log(e.target),x(),y=!1,T&&(T=!1,N())}))}));const N=async()=>{await window.scrollTo({top:0,behavior:"smooth"}),L.forEach((e=>{r.ZP.to(e,{autoAlpha:0,scaleY:0,duration:1,onComplete:e.classList.add("dNone")})})),C.forEach((e=>{e.classList.remove("dNone"),r.ZP.to(e,{autoAlpha:1,scaleY:1,duration:1})})),Y.forEach((e=>{e.classList.remove("dNone"),r.ZP.to(e,{autoAlpha:1,scaleY:1,duration:1})})),T=!1};E.forEach((e=>{e.addEventListener("mousedown",(()=>{T&&N()}))}));const D=e=>{T=!0,window.location.hash="#articoli",L.forEach((e=>{e.classList.remove("dNone"),r.ZP.timeline().to(i,{duration:.2,autoAlpha:1,scaleY:1,ease:"Power1.out"}).to(i,{delay:1,autoAlpha:0,scaleY:0,ease:"Power1.out"}).to(e,{autoAlpha:1,scaleY:1,duration:.5})})),window.scrollTo({top:0,behavior:"smooth"}),Y.forEach((e=>{r.ZP.to(e,{autoAlpha:0,scaleY:0,duration:1,onComplete:e.classList.add("dNone")})})),C.forEach((e=>{r.ZP.to(e,{autoAlpha:0,scaleY:0,duration:1,onComplete:e.classList.add("dNone")})}))};P.addEventListener("click",D),A.addEventListener("click",(async()=>{await x(),y=!1,D()}))}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.m=o,e=[],r.O=(o,t,a,n)=>{if(!t){var l=1/0;for(c=0;c<e.length;c++){for(var[t,a,n]=e[c],i=!0,u=0;u<t.length;u++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](t[u])))?t.splice(u--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var s=a();void 0!==s&&(o=s)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,a,n]},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={179:0};r.O.j=o=>0===e[o];var o=(o,t)=>{var a,n,[l,i,u]=t,s=0;if(l.some((o=>0!==e[o]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var c=u(r)}for(o&&o(t);s<l.length;s++)n=l[s],r.o(e,n)&&e[n]&&e[n][0](),e[l[s]]=0;return r.O(c)},t=self.webpackChunkportfolio_brutalist_webgl=self.webpackChunkportfolio_brutalist_webgl||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var a=r.O(void 0,[900],(()=>r(690)));a=r.O(a)})();