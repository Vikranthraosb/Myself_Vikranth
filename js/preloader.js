function revealTospan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            // create 2 spans
            let parent = document.createElement("span");
            let child = document.createElement("span")

            // Giving class to both parent and and child spans
            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML; // text content of elem assigned to child
            parent.appendChild(child); // put child inside parent

            elem.innerHTML = "";
            elem.appendChild(parent);

            // Logging for verification
            console.log(elem); // Logging the element after modification
        })
}

revealTospan();

var t1= gsap.timeline();
document.body.style.overflow = 'hidden';
t1.from(".blr",{
    scale:.3,
    opacity:1,
    y:1000,
    stagger:.15,
    duration:.45,
    borderRadius: "50",
    ease: Power3.easeInOut
})
t1.to(".blr",{
   opacity:.55,
   stagger:.1,
   duration:.2,
   borderRadius: "55",
   scale:1.2
})
t1.from(".topheading h5",{
    x: 150,
    opacity: 0,
    stagger: 0.3,
    duration: 0.7,
    color: "green",
    letterSpacing: "12px",
    ease: Power3.easeInOut
});

t1.from(".child span",{
x:150,
opacity:0,
stagger:.19,
duration:1,
color: "green",
ease: Power3.easeInOut
})

t1.to(".parent .child", {
    y: "-100%", 
    duration: .9,
    stagger:.19,

    ease: Power3.easeInOut
});
t1.to(".blr", {
    opacity: 1,
    stagger: 0.12,
    duration: 0.2,
    borderRadius: "55%",
    scale:1.2
});

t1.to(".blr",{
    opacity:.6,
    y:-1000,
    stagger:.18,
    duration:.3,
    ease: Power3.easeInOut
})
t1.to(".loader", {
    height:0,
    duration: .7,
    ease: Power3.easeInOut
});

t1.to(".green", {
    height: "100%",
    width: "100%",
    opacity: 1,
    "z-index": 999, 
    top: 0,
    left: 0,
    delay: -0.78, 
    duration: 1.2,
    ease: Power3.easeInOut,
});

t1.to(".green", {
    height:"0%",
    delay:-.28,
    duration: .5,
    ease: Power3.easeInOut
});
t1.eventCallback("onComplete", function() {
    document.body.style.overflow = ''; 
});
t1.from(".nav a",{
opacity:0,
y:-20,
duration:.35,
delay:.15
})

