import "../styles/styles.css";

// import Canvas from './modules/Canvas';
// import SwapSpan from "./modules/SwapSpan";
// import Scroll from "./modules/scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (module.hot) {
    module.hot.accept();
}

gsap.registerPlugin(ScrollTrigger)


// new Scroll();
// new Canvas({
//     dom: document.getElementById('container')
// });
// PRELOADER
const body = document.querySelector("body");
const main = document.querySelector("main");
const preloader = document.querySelector(".preloader");


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

let width = window.innerWidth
let height = window.innerHeight
let t1 = document.querySelector(".t1")
let t2 = document.querySelector(".t2")
let t3 = document.querySelector(".t3")
let hero = document.querySelector(".hero")
let nav = document.querySelector("nav")
let burger = document.querySelector(".nav__burgermenu")
let burgerLine1 = document.querySelector(".nav__burgermenu__line:first-of-type")
let burgerLine2 = document.querySelector(".nav__burgermenu__line:last-of-type")
let menuArea = false;
let menu = document.querySelector(".nav__burgermenu__area")
let isMobile = false
if (width<=768) {isMobile = true} else { isMobile = false}
let blogLink = document.querySelector('#blog-link')
let menuLinks = document.querySelectorAll('.menu-links')
let burgermenuLinks = document.querySelectorAll('.nav__burgermenu__list__item__link')
let heroImg = document.querySelector(".hero__img")
// let sectionTitles = document.querySelectorAll("h2.section__info__title")
let images = document.querySelectorAll("img.img")
let sectionTexts = document.querySelectorAll(".section__info")
let postu = document.querySelector(".posturologia")
let pinda = document.querySelector(".pindasweda")
let sectionsToHide = document.querySelectorAll(".hide-on-blog")
let specials = document.querySelectorAll(".section__special")
let specialsTitle = document.querySelector("#special")
let blogSection = document.querySelector(".blog")
let blogAnim = document.querySelectorAll(".blog-anim")
let isBlog = false

const init = async () => {
    width = window.innerWidth
    height = window.innerHeight
    await window.scrollTo(0,0);
    // HOME INTRO ANIMATION ///////////////////////////////////////
    // PRELOADER OFF //////////////////////////////////////////////
    let tl = gsap.timeline()
    tl.to(preloader, {
        delay: 2,
        duration: .1,
        autoAlpha: 0
    })
    .from(main, {
        background: "#1F3E4D",
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
//////////////////////////////////////////////////////////////////////////////////////
            // Hero Image ///////////////////////////////////////////////////////////
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
            
            // section images //////////////////////////////////////////////////////////
            
            images.forEach(img=>{  
                gsap.from(img, {
                    duration: .5,
                    y: 350,
                    scaleY: 0,
                    autoAlpha: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: img,
                        //markers: true,
                        start: 'top 110%',
                        end: "bottom 25%",
                        toggleActions:"restart pause resume reverse" // onEnter onLeave onEnterBack onLeaveBack
                        // options: play pause resume reset restart complete reverse none
                    }
                })
            })
            // Paragraphs ////////////////////////////////////////////////////////
            
            sectionTexts.forEach(text=>{  
                gsap.from(text, {
                    duration: .5,
                    y: 350,
                    autoAlpha: 0,
                    transformOrigin: 'bottom 50%',
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: text,
                        //markers: true,
                        start: 'top 110%',
                        end: "bottom 25%",
                        toggleActions:"restart pause resume reverse" // onEnter onLeave onEnterBack onLeaveBack
                        // options: play pause resume reset restart complete reverse none
                    }
                })
            })

            gsap.to(body, {
                duration: 1,
                backgroundColor: '#D3CDBF',
                ease: "power1.out",
                scrollTrigger: {
                    trigger: postu,
                    //markers: true,
                    start: 'top 30%',
                    end: "bottom -50%",
                    scrub: true
                    // toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                    // // options: play pause resume reset restart complete reverse none
                }
            })
            gsap.to(body, {
                duration: 1,
                backgroundColor: '#E3E5E8',
                ease: "power1.out",
                scrollTrigger: {
                    trigger: pinda,
                    markers: false,
                    start: 'top 30%',
                    end: "bottom -50%",
                    scrub: true
                    // toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                    // // options: play pause resume reset restart complete reverse none
                }
            })

            gsap.to(nav, {
                duration: 1,
                backgroundColor: '#D3CDBF',
                ease: "power1.out",
                scrollTrigger: {
                    trigger: postu,
                    //markers: true,
                    start: 'top 30%',
                    end: "bottom -50%",
                    scrub: true
                    // toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                    // // options: play pause resume reset restart complete reverse none
                }
            })
            gsap.to(nav, {
                duration: 1,
                backgroundColor: '#E3E5E8',
                ease: "power1.out",
                scrollTrigger: {
                    trigger: pinda,
                    markers: false,
                    start: 'top 30%',
                    end: "bottom -50%",
                    scrub: true
                    // toggleActions:"restart pause resume reset" // onEnter onLeave onEnterBack onLeaveBack
                    // // options: play pause resume reset restart complete reverse none
                }
            })

if(!isMobile){
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos || prevScrollPos > currentScrollPos) {
    gsap.timeline().to(nav, {
        y: -20,
        opacity: 0,
        duration: .3,
        ease: 'Power1.out'
    })
    .to(nav, {
        delay: .3,
        y: 0,
        opacity: 1
    })
  }
  prevScrollPos = currentScrollPos;
}}
}

window.addEventListener('load', init)

const closeMenu = () => {
    gsap.to(burgerLine1, {
        y: '0',
        rotate: '0'
    })
    gsap.to(burgerLine2, {
        y: '0',
        rotate: '0'
    })
    gsap.to(menu, {
        duration: 1,
        x: 0
    })
    menuArea = false;
}

const burgerClick =()=>{
    if(menuArea === false) {
        gsap.to(burgerLine1, {
            y: '0.4rem',
            rotate: '-45deg'
        })
        gsap.to(burgerLine2, {
            y: '-0.4rem',
            rotate: '45deg'
        })
        if(isMobile){
            gsap.to(menu, {
                duration: 1,
                x: '-100%'
            })
        } else {
            gsap.to(menu, {
                duration: 1,
                x: '-200%'
            })
        }
        menuArea = true;
        return
    }
    if(menuArea === true) {
        closeMenu()
    }
}

burger.addEventListener('click', burgerClick)

burgermenuLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
            closeMenu()
            menuArea = false
        
        
    })
})

const homeVisible = () => {
    if(isBlog) {
        blogAnim.forEach(el=>{
            gsap.to(el, {
                y: 0
            })
        })
    }
    sectionsToHide.forEach(section => {
        section.classList.remove("dNone")
    })
    blogSection.classList.add("dNone")
    isBlog = false
}

menuLinks.forEach(link=>{
    link.addEventListener('click',() => {
        homeVisible()
    })
})

const blogOpens = (e) => {
    isBlog = true
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sectionsToHide.forEach(section => {
        section.classList.add("dNone")
    })
    blogSection.classList.remove("dNone")
        blogAnim.forEach(el=>{
            gsap.to(el, {
                y: -window.innerHeight
            })
        })
    
}

blogLink.addEventListener('click', blogOpens)