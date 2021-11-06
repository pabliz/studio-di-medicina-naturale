import "../styles/styles.css";

// import Canvas from './modules/Canvas';
// import SwapSpan from "./modules/SwapSpan";
// import Scroll from "./modules/scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

if (module.hot) {
    module.hot.accept();
}

// new Scroll();
// new Canvas({
//     dom: document.getElementById('container')
// });
// PRELOADER

const preloader = document.querySelector(".preloader");
const main = document.querySelector("main");


// window.addEventListener("load", () => {

// })

// CURSOR
// const cursor = document.querySelector(".cursor")

// document.addEventListener('mousemove', (e) => {
//     gsap.to(cursor, {
//         x: (-e.pageX),
//         height: e.pageY,
//     })
// })

// document.addEventListener("dblclick", () => {
//         cursor.classList.toggle("hidden");
//     })
// SWAPSPAN
// new SwapSpan();


let t1 = document.querySelector(".t1")
let t2 = document.querySelector(".t2")
let t3 = document.querySelector(".t3")
let hero = document.querySelector(".hero")
let nav = document.querySelector("nav")
let heroImg = document.querySelector(".hero__img")
let sectionTitles = document.querySelectorAll("h2.section__info__title")
let images = document.querySelectorAll("img.img")
let sectionTexts = document.querySelectorAll(".section__info")

const hidePreloader = () => {
    gsap
}

const init = async () => {
    // HOME INTRO ANIMATION ///////////////////////////////////////
    // PRELOADER OFF //////////////////////////////////////////////
    let tl = gsap.timeline()
    tl.to(preloader, {
        delay: 2,
        duration: .1,
        autoAlpha: 0
    })
    .from(main, {
        background: "#17191C",
        delay: 1,
        duration: .3,
    })
    // TITLE SPANS ////////////////////////////////////////////////
        .from(t1, {
        duration: 1,
        rotate: 30,
        scaleX: 2,
        scaleY: 0,
        transformOrigin: 'bottom left',
        autoAlpha: 0,
        ease: 'Power2.in'})
        .from(t2, {
            duration: .9,
            rotate: -30,
            scaleX: 2,
            scaleY: 0,
            transformOrigin: 'bottom right',
            autoAlpha: 0,
            ease: 'Power2.in',
        }, '-=0.7')
        .from(t3, {
            duration: .8,
            rotate: -30,
            scaleX: 2,
            scaleY: 0,
            transformOrigin: 'bottom right',
            autoAlpha: 0,
            ease: 'Power2.in',
        }, '-=0.7')
        // Hero + Navigation //////////////////////////////////////////////////////////
        .from(hero, {
            duration: 1.5,
            // rotate: 90,
            scale: 2,
            // scaleY: 0,
            transformOrigin: 'center center',
            autoAlpha: 0,
            ease: 'Power1.in'})
            .from(nav, {
                duration: .5,
                y: -20,
                autoAlpha: 0,
            }, '-=.7')
        // END INTRO //////////////////////////////////////////////////////////////////

            // Hero Image ////////////////////////////////////////////////////
            gsap.to(heroImg, {
                duration: 1,
                rotate: 90,
                scaleX: 2,
                scaleY: 0,
                transformOrigin: 'bottom right',
                autoAlpha: 0,
                ease: 'Power1.in',
                scrollTrigger: {
                    //markers: true,
                    trigger: heroImg,
                    start: 'top 35%',
                    end: 'bottom 10%',
                    toggleActions:"restart none reverse reset" // onEnter onLeave onEnterBack onLeaveBack
                    // options: play pause resume reset restart complete reverse none
                }
            })
            
            // Section titles ///////////////////////////////////////////////////////
            
            sectionTitles.forEach(title=>{  
                gsap.from(title, {
                    duration: 1,
                    xPercent: -100,
                    autoAlpha: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: title,
                        //markers: true,
                        start: 'top 100%',
                        end: "bottom 60%",
                        scrub: 3
                        //toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                        // options: play pause resume reset restart complete reverse none
                    }
                })
            })
            // section images //////////////////////////////////////////////////////////
            
            images.forEach(img=>{  
                gsap.from(img, {
                    duration: 1.5,
                    y: 350,
                    scale: 1.1,
                    autoAlpha: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: img,
                        //markers: true,
                        start: 'top 110%',
                        end: "bottom 25%",
                        toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                        // options: play pause resume reset restart complete reverse none
                    }
                })
            })
            // Paragraphs ////////////////////////////////////////////////////////
            
            sectionTexts.forEach(text=>{  
                gsap.from(text, {
                    duration: 1,
                    y: 350,
                    scale: 1.1,
                    autoAlpha: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: text,
                        //markers: true,
                        start: 'top 110%',
                        end: "bottom 25%",
                        toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                        // options: play pause resume reset restart complete reverse none
                    }
                })
            })
}

window.addEventListener('load', init)