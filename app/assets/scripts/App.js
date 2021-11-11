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
const body = document.body;
const main = document.querySelector("main");
const preloader = document.querySelector(".preloader");

// // // // // // create an Observer instance
// // // // // const resizeObserver = new ResizeObserver(entries => 
// // // // //     console.log('Body height changed:', entries[0].target.clientHeight)
// // // // //   )
  
// // // // //   // start observing a DOM node
// // // // //   resizeObserver.observe(body)

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
let burgerBlogLink = document.querySelector('#burger-blog-link')
let menuLinks = document.querySelectorAll('.menu-links')
let burgermenuLinks = document.querySelectorAll('.burgerlink')
let heroImg = document.querySelector(".hero__img")
let images = document.querySelectorAll("img.img")
let sectionTexts = document.querySelectorAll(".section__info")
let postu = document.querySelector(".posturologia")
let pinda = document.querySelector(".pindasweda")
let sectionsToHide = document.querySelectorAll(".hide-on-blog")
let blogSections = document.querySelectorAll(".blog")
let blogAnim = document.querySelectorAll(".blog-anim")
let isBlog = false
let osteo = document.querySelector("#osteopatia")


console.log(osteo.getBoundingClientRect().top);

const init = async () => {
    width = window.innerWidth
    height = window.innerHeight
    await window.scrollTo(0,0);
    // HOME INTRO ANIMATION ///////////////////////////////////////
    // PRELOADER OFF //////////////////////////////////////////////
    let tl = gsap.timeline()
    tl.to(preloader, {
        delay: 2,
        duration: .3,
        autoAlpha: 0,
        scaleY: 0,
         ease: 'Power1.out'
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
            

          if(!isMobile) {  
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
        }
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
    link.addEventListener('click', (e)=>{
        console.log(e.target);
            closeMenu()
            menuArea = false
            if(isBlog){
                isBlog = false
                homeVisible()
            }
    })
})

const homeVisible = async () => {
    
        await window.scrollTo({ top: 0, behavior: 'smooth' });
            blogSections.forEach(section=>{
                gsap.to(section, {
                    autoAlpha: 0,
                    scaleY: 0,
                    duration: 1,
                    onComplete: section.classList.add("dNone")
                })
            })
            blogAnim.forEach(el=>{
                el.classList.remove("dNone")
                gsap.to(el, {
                    autoAlpha: 1,
                    scaleY: 1,
                    duration: 1
                })
            })
            sectionsToHide.forEach(section => {
                section.classList.remove("dNone")
                gsap.to(section, {
                    autoAlpha: 1,
                    scaleY: 1,
                    duration: 1
                })
            })
        isBlog = false
    
}

menuLinks.forEach(link=>{
    link.addEventListener('mousedown',() => {
        if(isBlog) {
        homeVisible()
        } else return
    })
})

const blogOpens = (e) => {
    isBlog = true
    window.location.hash = '#articoli'
    blogSections.forEach(section=>{
        section.classList.remove("dNone")
        gsap.timeline().to(preloader, {
            duration: .2,
            autoAlpha: 1,
            scaleY: 1,
            ease: 'Power1.out'
        })
        .to(preloader, {
            delay: 1,
            autoAlpha: 0,
            scaleY: 0,
            ease: 'Power1.out'
            
        })
        .to(section, {
                autoAlpha: 1,
                scaleY: 1,
                duration: .5
            })
        
    })
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sectionsToHide.forEach(section => {
        gsap.to(section, {
        autoAlpha: 0,
        scaleY: 0,
        duration: 1,
        onComplete: section.classList.add("dNone")
        })
    })
    blogAnim.forEach(el=>{
        gsap.to(el, {
            autoAlpha: 0,
            scaleY: 0,
            duration: 1,
            onComplete: el.classList.add("dNone")
        })
    })
}

blogLink.addEventListener('click', blogOpens)

burgerBlogLink.addEventListener('click',async ()=> {
    await closeMenu()
    menuArea = false
    blogOpens()
})