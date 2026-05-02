/* =========================
   MOBILE MENU
========================= */

const header = document.querySelector(".site-header");

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelectorAll(".site-nav a");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        header.classList.toggle("menu-open");

    });

}

/* CLOSE MENU */

navLinks.forEach((link)=>{

    link.addEventListener("click",()=>{

        header.classList.remove("menu-open");

    });

});

/* =========================
   ACTIVE NAVBAR
========================= */

const current =
window.location.pathname
.split("/")
.pop() || "index.html";

document
.querySelectorAll(".site-nav a")
.forEach((link)=>{

    const href =
    link.getAttribute("href");

    if(href === current){

        link.classList.add("active");

    }

});

/* =========================
   TYPING EFFECT
========================= */

const typing =
document.querySelector(".typing");

if(typing){

    const words =
    JSON.parse(
    typing.dataset.words || "[]"
    );

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    const type = ()=>{

        const currentWord =
        words[wordIndex];

        typing.textContent =
        currentWord.substring(0,charIndex);

        if(!deleting &&
            charIndex < currentWord.length){

            charIndex++;

            setTimeout(type,100);

        }

        else if(deleting &&
            charIndex > 0){

            charIndex--;

            setTimeout(type,50);

        }

        else{

            deleting = !deleting;

            if(!deleting){

                wordIndex =
                (wordIndex + 1)
                % words.length;

            }

            setTimeout(type,1200);

        }

    };

    type();

}

/* =========================
   CURSOR GLOW
========================= */

const glow =
document.querySelector(".cursor-glow");

document.addEventListener(
"mousemove",
(e)=>{

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

});

/* =========================
   SCROLL PROGRESS
========================= */

const scrollBar =
document.querySelector(".scroll-bar");

window.addEventListener(
"scroll",
()=>{

    const scroll =
    (
    window.scrollY /
    (
    document.body.scrollHeight -
    window.innerHeight
    )
    ) * 100;

    scrollBar.style.width =
    scroll + "%";

});

/* =========================
   REVEAL ANIMATION
========================= */

const reveals =
document.querySelectorAll(
".card,.stat-card,.hero-copy,.hero-visual,.section-heading"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

reveals.forEach((item)=>{

    revealObserver.observe(item);

});

/* =========================
   SKILL BAR ANIMATION
========================= */

const bars =
document.querySelectorAll(
".meter span"
);

const skillObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const bar =
            entry.target;

            const width =
            bar.dataset.width;

            bar.style.width =
            width;

        }

    });

},

{
    threshold:0.5
}

);

bars.forEach((bar)=>{

    const width =
    bar.style.width;

    bar.dataset.width =
    width;

    bar.style.width = "0";

    skillObserver.observe(bar);

});

/* =========================
   PARTICLES
========================= */

if(window.particlesJS){

particlesJS(

"particles-js",

{
    particles:{

        number:{
            value:60
        },

        color:{
            value:"#f5b301"
        },

        shape:{
            type:"circle"
        },

        opacity:{
            value:0.4
        },

        size:{
            value:3
        },

        line_linked:{

            enable:true,

            distance:150,

            color:"#ffffff",

            opacity:0.1,

            width:1

        },

        move:{

            enable:true,

            speed:2

        }

    },

    interactivity:{

        events:{

            onhover:{
                enable:true,
                mode:"grab"
            }

        }

    },

    retina_detect:true

}

);

}

/* =========================
   AOS ANIMATION
========================= */

if(window.AOS){

    AOS.init({

        duration:1000,

        once:true,

        offset:80

    });

}

/* =========================
   SMOOTH CARD EFFECT
========================= */

const cards =
document.querySelectorAll(
".card,.stat-card,.project-card"
);

cards.forEach((card)=>{

    card.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        ((y - centerY) / 20);

        const rotateY =
        ((centerX - x) / 20);

        card.style.transform =
        `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener(
    "mouseleave",
    ()=>{

        card.style.transform =
        "rotateX(0) rotateY(0)";

    });

});

/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((btn)=>{

    btn.addEventListener(
    "click",
    function(e){

        const ripple =
        document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
        btn.getBoundingClientRect();

        ripple.style.left =
        (e.clientX - rect.left) + "px";

        ripple.style.top =
        (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* =========================
   PAGE LOADER
========================= */

window.addEventListener(
"load",
()=>{

    document.body.classList.add(
    "loaded"
    );

});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(

"%c🚀 Shivam Kumar Portfolio Loaded",

"color:#f5b301; font-size:18px; font-weight:bold;"

);

/* =========================
   CONTACT FORM
========================= */

const contactForm =
document.getElementById("contactForm");

const successMessage =
document.getElementById("successMessage");

if(contactForm){

    contactForm.addEventListener(
    "submit",

    async function(e){

        e.preventDefault();

        const formData =
        new FormData(contactForm);

        formData.append(
        "_subject",
        "New Portfolio Message"
        );

        formData.append(
        "_captcha",
        "false"
        );

        try{

            const response =
            await fetch(
            "https://formsubmit.co/ajax/shivamkumarabc2006@gmail.com",
            {

                method:"POST",

                body:formData

            });

            if(response.ok){

                successMessage.style.display =
                "block";

                contactForm.reset();

                setTimeout(()=>{

                    successMessage.style.display =
                    "none";

                },4000);

            }

        }

        catch(error){

            alert(
            "Something went wrong!"
            );

        }

    });

}

