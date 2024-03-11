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
    stagger:.20,
    duration:.65,
    borderRadius: "50",
    ease: Power3.easeInOut
})
t1.to(".blr",{
   opacity:.65,
   stagger:.15,
   duration:.2,
   borderRadius: "55",
   scale:1.2
})
t1.from(".topheading h5",{
    x:150,
    opacity:0,
    stagger:.1,
    duration:.6,
    color: "green",
    ease: Power3.easeInOut
    });

t1.from(".child span",{
x:150,
opacity:0,
stagger:.19,
duration:1.5,
color: "green",
ease: Power3.easeInOut
})

t1.to(".parent .child", {
    y: "-100%", 
    duration: .6,
    ease: Power3.easeInOut
});
t1.to(".blr", {
    opacity: 0.85,
    stagger: 0.17,
    duration: 0.2,
    borderRadius: "55%",
    scale:1.2
});

t1.to(".blr",{
    opacity:.6,
    y:-1000,
    stagger:.1,
    duration:.4,
    ease: Power3.easeInOut
})
t1.to(".loader", {
    height:0,
    duration: 1,
    ease: Power3.easeInOut
});

t1.to(".green", {
    height: "100%",
    width: "100%",
    opacity: 1,
    "z-index": 999, 
    top: 0,
    left: 0,
    delay: -0.70, 
    duration: 1.5,
    ease: Power3.easeInOut,
});

t1.to(".green", {
    height:"0%",
    delay:-.23,
    duration: .6,
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

