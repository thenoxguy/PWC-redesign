gsap.set('.cursor', { xPercent: -50, yPercent: -50 })

let cursor = document.querySelector('.cursor')
let cursorText = document.querySelector(".cursor-text")
let title = document.querySelector('h1')

let preview1 = document.querySelector('.preview1')
let featured1 = document.querySelector('.featured1')

let preview2 = document.querySelector('.preview2')
let featured2 = document.querySelector('.featured2')

let preview3 = document.querySelector('.preview3')
let featured3 = document.querySelector('.featured3')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, { x: mouseX, y: mouseY })
})

title.addEventListener('mouseenter', () => {
    gsap.to(cursorText, 1, {
        scale: 1,
        opacity: 1,
        top: '-75px',
        left: '-75px',
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

title.addEventListener('mousemove', () => {
    gsap.to(cursorText, 1, {
        x: mouseX,
        y: mouseY
    })
})

title.addEventListener('mouseleave', () => {
    gsap.to(cursorText, 0.2, {
        scale: 0,
        opacity: 0,
        top: '10',
        left: '100',
    })
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: false,
        start: "top -25%",
        end: "top -70%",
        scrub: 3,
    },
});

featured1.addEventListener('mouseenter', () => {
    gsap.to(preview1, 1, {
        scale: 1,
        top: '100vh',
        left: '0px',
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

featured1.addEventListener('mousemove', () => {
    gsap.to(preview1, 1, {
        x: mouseX,
        y: mouseY
    })
})

featured1.addEventListener('mouseleave', () => {
    gsap.to(preview1, 0.2, {
        scale: 0,
        top: '80vh',
        left: '30vw',
    })
})

featured2.addEventListener('mouseenter', () => {
    gsap.to(preview2, 1, {
        scale: 1,
        top: '100vh',
        left: '0px',
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

featured2.addEventListener('mousemove', () => {
    gsap.to(preview2, 1, {
        x: mouseX,
        y: mouseY
    })
})

featured2.addEventListener('mouseleave', () => {
    gsap.to(preview2, 0.2, {
        scale: 0,
        top: '80vh',
        left: '30vw',
    })
})

featured3.addEventListener('mouseenter', () => {
    gsap.to(preview3, 1, {
        scale: 1,
        top: '100vh',
        left: '0px',
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

featured3.addEventListener('mousemove', () => {
    gsap.to(preview3, 1, {
        x: mouseX,
        y: mouseY
    })
})

featured3.addEventListener('mouseleave', () => {
    gsap.to(preview3, 0.2, {
        scale: 0,
        top: '80vh',
        left: '30vw',
    })
})
