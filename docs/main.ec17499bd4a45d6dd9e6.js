(()=>{"use strict";var e,r={690:(e,r,t)=>{var o=t(358),a=t(82);o.ZP.registerPlugin(a.Z);const n=document.querySelector(".preloader"),l=document.querySelector("main");let i=document.querySelector(".t1"),s=document.querySelector(".t2"),u=document.querySelector(".t3"),c=document.querySelector(".hero"),m=document.querySelector("nav"),d=document.querySelector(".hero__img"),g=(document.querySelectorAll("h2.section__info__title"),document.querySelectorAll("img.img")),f=document.querySelectorAll(".section__info");window.addEventListener("load",(async()=>{await window.scrollTo(0,0),o.ZP.timeline().to(n,{delay:2,duration:.1,autoAlpha:0}).from(l,{background:"#1F3E4D",delay:1,duration:.3}).from(i,{duration:1,rotate:30,scaleX:2,scaleY:0,transformOrigin:"bottom left",autoAlpha:0,ease:"Power2.in"}).from(s,{duration:.9,rotate:-30,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power2.in"},"-=0.7").from(u,{duration:.8,rotate:-30,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power2.in"},"-=0.7").from(c,{duration:1.5,scale:2,transformOrigin:"center center",autoAlpha:0,ease:"Power1.in"}).from(m,{duration:.5,y:-20,autoAlpha:0},"-=.7"),o.ZP.to(d,{duration:1,rotate:90,scaleX:2,scaleY:0,transformOrigin:"bottom right",autoAlpha:0,ease:"Power1.in",scrollTrigger:{trigger:d,start:"top 35%",end:"bottom 10%",toggleActions:"restart none reverse reset"}}),g.forEach((e=>{o.ZP.from(e,{duration:1.5,y:350,scale:1.1,autoAlpha:0,ease:"power1.out",scrollTrigger:{trigger:e,start:"top 110%",end:"bottom 25%",toggleActions:"restart pause resume reset"}})})),f.forEach((e=>{o.ZP.from(e,{duration:1,y:350,scale:1.1,autoAlpha:0,ease:"power1.out",scrollTrigger:{trigger:e,start:"top 110%",end:"bottom 25%",toggleActions:"restart pause resume reset"}})}))}))}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,a,n)=>{if(!t){var l=1/0;for(c=0;c<e.length;c++){for(var[t,a,n]=e[c],i=!0,s=0;s<t.length;s++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var u=a();void 0!==u&&(r=u)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,a,n]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[l,i,s]=t,u=0;if(l.some((r=>0!==e[r]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(s)var c=s(o)}for(r&&r(t);u<l.length;u++)n=l[u],o.o(e,n)&&e[n]&&e[n][0](),e[l[u]]=0;return o.O(c)},t=self.webpackChunkportfolio_brutalist_webgl=self.webpackChunkportfolio_brutalist_webgl||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=o.O(void 0,[900],(()=>o(690)));a=o.O(a)})();