(()=>{"use strict";var e,r={690:(e,r,t)=>{var o=t(358),n=t(82);o.ZP.registerPlugin(n.Z);const a=document.querySelector("body"),i=document.querySelector("main"),l=document.querySelector(".preloader");let u=window.innerWidth,c=window.innerHeight,s=document.querySelector(".t1"),d=document.querySelector(".t2"),g=document.querySelector(".t3"),m=document.querySelector(".hero"),f=document.querySelector("nav"),p=document.querySelector(".nav__burgermenu"),y=document.querySelector(".nav__burgermenu__line:first-of-type"),w=document.querySelector(".nav__burgermenu__line:last-of-type"),b=!1,h=document.querySelector(".nav__burgermenu__area"),v=!1;v=u<=768;let _=document.querySelectorAll(".nav__burgermenu__list__item__link"),P=document.querySelector(".hero__img"),O=document.querySelectorAll("img.img"),q=document.querySelectorAll(".section__info"),S=document.querySelector(".posturologia"),Z=document.querySelector(".pindasweda");window.addEventListener("load",(async()=>{if(u=window.innerWidth,c=window.innerHeight,await window.scrollTo(0,0),o.ZP.timeline().to(l,{delay:2,duration:.1,autoAlpha:0}).from(i,{background:"#1F3E4D",delay:1,duration:.3}).from(s,{duration:1,rotate:30,scaleX:2,scaleY:0,transformOrigin:"bottom left",autoAlpha:0,ease:"Power2.in"}).from(d,{duration:.9,rotate:-30,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power2.in"},"-=0.7").from(g,{duration:.8,rotate:-30,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power2.in"},"-=0.7").from(m,{duration:1.5,scale:2,transformOrigin:"center center",autoAlpha:0,ease:"Power1.in"}).from(f,{duration:.5,y:-20,autoAlpha:0},"-=.7"),o.ZP.to(P,{duration:1,rotate:90,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power1.in",scrollTrigger:{trigger:P,start:"top 35%",end:"bottom 10%",toggleActions:"restart none reverse reset"}}),O.forEach((e=>{o.ZP.from(e,{duration:.5,y:350,scaleY:0,autoAlpha:0,ease:"power1.out",scrollTrigger:{trigger:e,start:"top 110%",end:"bottom 25%",toggleActions:"restart pause resume reverse"}})})),q.forEach((e=>{o.ZP.from(e,{duration:.5,y:350,autoAlpha:0,transformOrigin:"bottom 50%",ease:"power1.out",scrollTrigger:{trigger:e,start:"top 110%",end:"bottom 25%",toggleActions:"restart pause resume reverse"}})})),o.ZP.to(a,{duration:1,backgroundColor:"#D3CDBF",ease:"power1.out",scrollTrigger:{trigger:S,start:"top 30%",end:"bottom -50%",scrub:!0}}),o.ZP.to(a,{duration:1,backgroundColor:"#E3E5E8",ease:"power1.out",scrollTrigger:{trigger:Z,markers:!1,start:"top 30%",end:"bottom -50%",scrub:!0}}),!v){let e=window.pageYOffset;window.onscroll=function(){let r=window.pageYOffset;console.log(r,e),(e<r||e>r)&&o.ZP.timeline().to(f,{y:-20,opacity:0,duration:.3,ease:"Power1.out"}).to(f,{delay:.3,y:0,opacity:1}),e=r}}}));const A=()=>{o.ZP.to(y,{y:"0",rotate:"0"}),o.ZP.to(w,{y:"0",rotate:"0"}),o.ZP.to(h,{duration:1,x:0}),b=!1};p.addEventListener("click",(()=>{if(!1===b)return o.ZP.to(y,{y:"0.4rem",rotate:"-45deg"}),o.ZP.to(w,{y:"-0.4rem",rotate:"45deg"}),v?o.ZP.to(h,{duration:1,x:"-100%"}):o.ZP.to(h,{duration:1,x:"-200%"}),void(b=!0);!0===b&&A()})),_.forEach((e=>{e.addEventListener("click",(()=>{A(),b=!1}))}))}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,t,n,a)=>{if(!t){var i=1/0;for(s=0;s<e.length;s++){for(var[t,n,a]=e[s],l=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](t[u])))?t.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,n,a]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[i,l,u]=t,c=0;if(i.some((r=>0!==e[r]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(u)var s=u(o)}for(r&&r(t);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return o.O(s)},t=self.webpackChunkportfolio_brutalist_webgl=self.webpackChunkportfolio_brutalist_webgl||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[900],(()=>o(690)));n=o.O(n)})();