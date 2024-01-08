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

gsap.from(".topheading h5",{
    x:120,
    opacity:0,
    stagger:.2,
    duration:1.35,
    color: "green",
    ease: Power3.easeInOut
    })

t1.from(".child span",{
x:120,
opacity:0,
stagger:.2,
duration:1.5,
color: "green",
ease: Power3.easeInOut
})

t1.to(".parent .child", {
    y: "-100%", 
    duration: 1,
    ease: Power3.easeInOut
});

t1.to(".loader", {
    height:0,
    duration: 1,
    ease: Power3.easeInOut
});

t1.to(".green", {
    height:"100%",
    top:0,
    delay:-.73,
    duration: 1,
    ease: Power3.easeInOut
});
t1.to(".green", {
    height:"0%",
    delay:-.2,
    duration: .7,
    ease: Power3.easeInOut
});
t1.from(".nav a",{
opacity:0,
y:-20,
duration:.35,
delay:.15
})