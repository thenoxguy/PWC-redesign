gsap.set('.cursor', { xPercent: -50, yPercent: -50 })

let cursor = document.querySelector('.cursor')
let cursorText = document.querySelector(".cursor-text")
let title = document.querySelector('h1')

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
        left: '40',
    })
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});
