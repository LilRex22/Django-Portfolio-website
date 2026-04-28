
const currentPage = window.location.pathname // current page location

const pages = {
    '/': document.getElementById('home'),
    '/projects/': document.getElementById('projects'),
    '/about/': document.getElementById('about'),
    '/contact/': document.getElementById('contact')
}

if (pages[currentPage]){
    pages[currentPage].classList.add('loc');
}

if (window.location.pathname === '/projects/') {
    if (!sessionStorage.getItem('projectPageReloaded')) {
        sessionStorage.setItem('projectPageReloaded', 'true');
        window.location.reload();
    }
}


// GSAP Animations 😪
document.addEventListener("DOMContentLoaded", () => {

gsap.registerPlugin(ScrollTrigger);

/* =========================================
GLOBAL PERFORMANCE SETTINGS
========================================= */
ScrollTrigger.normalizeScroll(true);

ScrollTrigger.config({
    ignoreMobileResize: true
});

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


/* =========================================
SELECTORS
========================================= */
const heroText      = gsap.utils.toArray("#dy > *");
const heroImage     = gsap.utils.toArray("#pf > *");

const aboutItems    = gsap.utils.toArray("#abt > *");
const serviceLeft   = gsap.utils.toArray("#sc > *");
const serviceRight  = gsap.utils.toArray(".st");

const projectsHome  = gsap.utils.toArray(".ft > *");

const stackLeft     = gsap.utils.toArray(".tx4 > *");
const stackRight    = gsap.utils.toArray(".tx5 > *");

const projectHero   = gsap.utils.toArray(".af *");
const projectText   = gsap.utils.toArray(".af2 > *");
const projectCards  = gsap.utils.toArray(".af3");


/* =========================================
HERO SECTION
========================================= */
const tl = gsap.timeline({defaults:{ease:"power4.out"}});

tl.from(heroImage, {
    opacity: 0,
    scale: 0,
    stagger: 0.12,
    duration: 1.2,
    ease: "back.out(1.7)"
})

.from(heroText, {
    y: 60,
    filter: 'blur(10px)',
    opacity: 0,
    stagger: 0.08,
    duration: 1
}, "-=0.8");


/* =========================================
PROJECT PAGE HERO
========================================= */
if(projectHero.length){

const tl2 = gsap.timeline({defaults:{ease:"expo.out"}});

tl2.from(projectHero, {
    y: 80,
    opacity: 0,
    scale: 0.9,
    filter: "blur(8px)",
    duration: 1,
    stagger: 0.03
})

.from(projectText, {
    y: 40,
    opacity: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "power4.out"
}, "-=0.6");

}

function contactPageAnimations() {

gsap.from(".js-contact-hero-image", {
  y: 60,
  filter: 'blur(10px)',
  opacity: 0,
  scale: 0.9,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".js-contact-hero-text", {
  y: 40,
  filter: 'blur(10px)',
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power4.out"
});

gsap.from(".js-contact-form", {
  x: 80,
  filter: 'blur(10px)',
  opacity: 0,
  duration: 1.2,
  ease: "expo.out"
});

gsap.from(".js-contact-input", {
  y: 30,
  opacity: 0,
  filter: 'blur(10px)',
  stagger: 0.1,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".js-contact-btn", {
  scale: 0,
  opacity: 0,
  duration: 0.7,
  filter: 'blur(10px)',
  ease: "back.out(1.7)"
});

gsap.from(".js-contact-card", {
  y: 60,
  filter: 'blur(10px)',
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".js-contact-card",
    start: "top 85%",
    once: true
  }
});

gsap.from(".js-contact-whatsapp-title, .js-contact-whatsapp-btn", {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  filter: 'blur(10px)',
  duration: 0.8,
  scrollTrigger: {
    trigger: ".js-contact-whatsapp-title",
    start: "top 85%",
    once: true
  }
});

}

contactPageAnimations();

function blogPageAnimations() {

  /* HERO */
  gsap.from(".js-blog-hero-image", {
    y: 80,
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: "power4.out"
  });

  gsap.from(".js-blog-hero-text", {
    y: 40,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1,
    delay: 0.2,
    ease: "power4.out"
  });

  gsap.from(".js-blog-hero-sub", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    filter: 'blur(10px)',
    delay: 0.4,
    ease: "power3.out"
  });

  /* BLOG CARDS */
  gsap.from(".js-blog-card", {
    y: 60,
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0.95,
    duration: 1,
    stagger: 0.08,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".js-blog-card",
      start: "top 85%",
      once: true
    }
  });

  /* LINKS */
  gsap.from(".js-blog-link", {
    opacity: 0,
    filter: 'blur(10px)',
    y: 10,
    stagger: 0.1,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".js-blog-card",
      start: "top 85%",
      once: true
    }
  });

}

blogPageAnimations();


function blogDetailAnimations() {

  /* HERO IMAGE */
  gsap.from(".js-blog-detail-image img", {
    y: 80,
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.95,
    duration: 1.2,
    ease: "power4.out"
  });

  /* TITLE */
  gsap.from(".js-blog-detail-title", {
    y: 40,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1,
    delay: 0.2,
    ease: "power4.out"
  });

  /* BODY TEXT */
  gsap.from(".js-blog-detail-text", {
    y: 20,
    opacity: 0,
    duration: 1,
    filter: 'blur(10px)',
    delay: 0.3,
    ease: "power3.out"
  });

  /* AUTHOR SECTION */
  gsap.from(".js-blog-author", {
    x: -40,
    opacity: 0,
    duration: 0.9,
    filter: 'blur(10px)',
    delay: 0.4,
    ease: "power3.out"
  });

  /* DATE */
  gsap.from(".js-blog-date", {
    opacity: 0,
    y: 10,
    duration: 0.7,
    filter: 'blur(10px)',
    delay: 0.5,
    ease: "power2.out"
  });

  /* BACK BUTTON */
  gsap.from(".js-blog-back", {
    scale: 0,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 0.8,
    delay: 0.6,
    ease: "back.out(1.7)"
  });

}

blogDetailAnimations();



function aboutPageAnimations() {

  /* HERO TEXT */
  gsap.from(".js-about-hero", {
    y: 40,
    opacity: 0,
    filter: 'blur(10px)',
    stagger: 0.1,
    duration: 1,
    ease: "power4.out"
  });

  gsap.from(".js-about-hero-btn", {
    scale: 0,
    filter: 'blur(10px)',
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.3
  });

  /* IMAGE */
  gsap.from(".js-about-image", {
    x: 80,
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.95,
    duration: 1.2,
    ease: "power4.out"
  });

  /* WHO WE ARE SECTION */
  gsap.from(".js-about-section-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    filter: 'blur(10px)',
    scrollTrigger: {
      trigger: ".js-about-section-title",
      start: "top 80%",
      once: true
    }
  });

  gsap.from(".js-about-text", {
    y: 30,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1,
    scrollTrigger: {
      trigger: ".js-about-text",
      start: "top 85%",
      once: true
    }
  });

  gsap.from(".js-about-bullets", {
    x: -40,
    opacity: 0,
    filter: 'blur(10px)',
    stagger: 0.15,
    duration: 1,
    scrollTrigger: {
      trigger: ".js-about-bullets",
      start: "top 85%",
      once: true
    }
  });

  /* MISSION / VISION */
  gsap.from(".js-about-mv", {
    y: 60,
    filter: 'blur(10px)',
    opacity: 0,
    scale: 0.97,
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".js-about-mv",
      start: "top 80%",
      once: true
    }
  });

  /* CTA */
  gsap.from(".js-about-cta, .js-about-cta-sub", {
    y: 40,
    opacity: 0,
    filter: 'blur(10px)',
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: ".js-about-cta",
      start: "top 85%",
      once: true
    }
  });

  gsap.from(".js-about-cta-image", {
  y: 60,
  filter: 'blur(10px)',
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".js-about-cta-image",
    start: "top 85%",
    once: true
  }
});

gsap.from(".js-about-cta-image2", {
  y: 60,
  filter: 'blur(10px)',
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".js-about-cta-image2",
    start: "top 85%",
    once: true
  }
});

  gsap.from(".js-about-cta-btn", {
    scale: 0,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".js-about-cta-btn",
      start: "top 90%",
      once: true
    }
  });

}

aboutPageAnimations();

/* =========================================
REUSABLE FUNCTION
========================================= */
function reveal(items, vars = {}) {

items.forEach((item, i) => {

gsap.from(item, {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
    duration: 0.9,
    ease: "power4.out",
    ...vars,

    scrollTrigger: {
        trigger: item,
        start: "top 85%",
        once: true,
        ...vars.scrollTrigger
    }

});

});

}


/* =========================================
RESPONSIVE ANIMATIONS
========================================= */
ScrollTrigger.matchMedia({

/* =========================================
DESKTOP
========================================= */
"(min-width: 769px)": function() {

/* ABOUT */
reveal(aboutItems, {
    y: 50
});

reveal(gsap.utils.toArray(".pp"), {
    x: 60,
    y: 0
});

reveal(gsap.utils.toArray(".pq"), {
    x: -60,
    y: 0
});

reveal(gsap.utils.toArray(".tx"), {
    x: -60,
    y: 0
});

/* SERVICES */
reveal(serviceLeft, {
    x: -100,
    y: 0,
    duration: 1
});

reveal(serviceRight, {
    x: 100,
    y: 0,
    duration: 1
});

/* HOME PROJECTS */
reveal(projectsHome, {
    y: 70,
    scale: 0.94,
    filter: "blur(8px)",
    duration: 1.1,
    ease: "expo.out"
});

/* TECH STACK */
reveal(gsap.utils.toArray(".tx2"), {
    x: -60,
    y: 0
});

reveal(gsap.utils.toArray(".tx3"), {
    x: -60,
    y: 0
});

reveal(stackLeft, {
    x: -60,
    y: 0
});

reveal(stackRight, {
    x: 60,
    y: 0
});

/* PROJECT PAGE CARDS */
reveal(projectCards, {
    x: 100,
    y: 0,
    scale: 0.92,
    filter: "blur(10px)",
    duration: 1.1,
    ease: "expo.out"
});

},


/* =========================================
MOBILE
========================================= */
"(max-width: 768px)": function() {

/* everything simpler + smoother on mobile */
const allItems = [
...aboutItems,
...serviceLeft,
...serviceRight,
...projectsHome,
...stackLeft,
...stackRight,
...projectCards,
...gsap.utils.toArray(".pp"),
...gsap.utils.toArray(".pq"),
...gsap.utils.toArray(".tx"),
...gsap.utils.toArray(".tx2"),
...gsap.utils.toArray(".tx3")
];

reveal(allItems, {
    y: 35,
    scale: 0.97,
    duration: 0.75,
    ease: "power3.out",
    scrollTrigger:{
        start:"top 92%"
    }
});


gsap.utils.toArray(".js-about-hero, .js-about-text, .js-about-bullets").forEach((el) => {

  gsap.from(el, {
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 92%",
      once: true
    }
  });

});
}

});


});