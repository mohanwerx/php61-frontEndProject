let scrollToTop= document.querySelector(".scroll-to-top");
let stickyNav = document.querySelector(".sticky-navbar")
let body = document.querySelector("html,body")

window.addEventListener("scroll" , ()=> {
    if (body.scrollTop >= 100) {
        scrollToTop.style.display="block"
        scrollToTop.addEventListener("click" , ()=>{
            window.scrollTo(0 , 0)
        });
    } else {
        scrollToTop.style.display="none"
    }
})
window.addEventListener("scroll" , ()=>{
    if (body.scrollTop >= 100) {
        stickyNav.style.display="block";
        if (stickyNav.classList.contains("animate__fadeOutUp")) {
            stickyNav.classList.remove("animate__animated" ,"animate__fadeOutUp")
        }

        stickyNav.classList.add("animate__animated" ,"animate__fadeInDown")
    } else {
        stickyNav.style.display="block"
        if (stickyNav.classList.contains("animate__fadeIInDown")) {
            stickyNav.classList.remove("animate__animated" ,"animate__fadeInDown")
        }
        stickyNav.classList.add("animate__animated" ,"animate__fadeOutUp")


    }
})

// add active class
let linkItem = document.querySelectorAll(".nav-link");
for (let index = 0; index < linkItem.length; index++) {
    linkItem[index].addEventListener("click" , ()=>{
        // loop for removing class
        for (let i = 0; i < linkItem.length; i++) {
            linkItem[i].classList.remove("active")
        }
        linkItem[index].classList.add("active")
    });
    
}


let Diseases = document.querySelectorAll(".Disease");
let Spreads = document.querySelector(".spreads")
let Protects = document.querySelector(".protects")
let Symptomz = document.querySelector(".symptomz")
let OutBreaks = document.querySelector(".outbreak")
let Busters = document.querySelector(".busters")

let Disease = document.querySelectorAll(".diseasez");
let Spread = document.querySelector(".how-it-spreads")
let Protect = document.querySelector(".how-to-protect")
let Symptoms = document.querySelector(".symptoms-and-testing")
let OutBreak = document.querySelector(".outbreak-community")
let Myth = document.querySelector(".myth-bust")

Diseases.addEventListener("click" , ()=>{
    Spread.style.display="none";
    Protect.style.display="none";
    Symptoms.style.display="none";
    OutBreak.style.display="none";
    Myth.style.display="none";
    Disease.style.display="block";
})

Spreads.addEventListener("click" , ()=>{
    Disease.style.display="none";
    Protect.style.display="none";
    Symptoms.style.display="none";
    OutBreak.style.display="none";
    Myth.style.display="none";
    Spread.style.display="block";
})

Protects.addEventListener("click" , ()=>{
    Disease.style.display="none";
    Spread.style.display="none";
    Symptoms.style.display="none";
    OutBreak.style.display="none";
    Myth.style.display="none";
    Protect.style.display="block";
})

Symptomz.addEventListener("click" , ()=>{
    Disease.style.display="none";
    Protect.style.display="none";
    Spread.style.display="none";
    OutBreak.style.display="none";
    Myth.style.display="none";
    Symptoms.style.display="block";
})

OutBreaks.addEventListener("click" , ()=>{
    Disease.style.display="none";
    Protect.style.display="none";
    Symptoms.style.display="none";
    Spread.style.display="none";
    Myth.style.display="none";
    OutBreak.style.display="block";
})

Busters.addEventListener("click" , ()=>{
    Disease.style.display="none";
    Protect.style.display="none";
    Symptoms.style.display="none";
    Spread.style.display="none";
    OutBreak.style.display="none";
    Myth.style.display="block";
})
