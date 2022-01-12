const mainSwiper = new Swiper('.swipermain', {
    loop: true,
    effect: 'slide',
    parallax: true,
    speed: 1500,
    resistanceRatio: 1.9,
    touchRatio: .5,
    longSwipesRatio: .05,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },
    controller: {
        by: 'container'
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.swiper-button-next'
    },
    breakpoints: {
        // when window width is >= 320px
        600: {
            allowTouchMove: false
        },
        260: {
            allowTouchMove: true
        }
    }
    
});

const textSwiper = new Swiper('.swipertext', {
    loop: true,
    effect: 'slide',
    parallax: true,
    resistanceRatio: 1.9,
    touchRatio: .5,
    longSwipesRatio: .05,
    speed: 1500,
    controller: {
        by: 'container'
    },
    breakpoints: {
        // when window width is >= 320px
        600: {
            allowTouchMove: false
        },
        260: {
            allowTouchMove: true
        }
    }
});

mainSwiper.controller.control = textSwiper;
textSwiper.controller.control = mainSwiper;


// document.addEventListener('DOMContentLoaded', () => {
const projectSwiper = new Swiper('.swiperproject', {
    loop: true,
    effect: 'coverflow',
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 100,
    allowTouchMove: false,
    coverflowEffect: {
        rotate: 0,
        depth: 10,
        modifier: 1,
        scale: .6,
        slideShadows: false,
        stretch: 5
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: '.swiper-button-next'
    },
    breakpoints: {
        // when window width is >= 640px
        992: {
            allowTouchMove: false,
            slidesPerView: 3
        },
        260: {
            allowTouchMove: true,
            slidesPerView: 1
        }
      }
});
    
let menuItem = document.querySelectorAll(".menu__item-text");
let menuImage = document.querySelectorAll(".menu__item-image");

// adding eventListeners to all the menuItems.
for (let i = 0; i < 6; i++) {
  //   image reveal animation
    const animation = gsap.to(menuImage[i], {
        opacity: 1,
        duration: 0.2,
        scale: 1,
        ease: "ease-in-out"
    });

    menuItem[i].addEventListener("mouseenter", () => animation.play());
    menuItem[i].addEventListener("mouseleave", () => animation.reverse());

  //   initialization
    animation.reverse();
}

//   to move image along with cursor
function moveText(e) {
    gsap.to([...menuImage], {
        css: {
            left: e.pageX + 50,
            top: e.pageY,
        },
        duration: 0.3,
    });
}

menuItem.forEach((el) => {
  el.addEventListener("mousemove", moveText);
});


let projectImg = document.querySelector('.project-image');
    function burgers() {
        const burger = document.querySelector('.burger'),
        burgerStckThree = document.querySelector('#stickthree'),
            menu = document.querySelector('.menu'),
            openBurger = burger.querySelector('.open'),
            closeBurger = burger.querySelector('.close'),
            spanOpen = openBurger.querySelectorAll('span'),
            spanClose = closeBurger.querySelectorAll('span'),
            menuLinks = menu.querySelectorAll('li a'),
            windowWidth = window.innerWidth;

            function addPointer() {
                burger.style.pointerEvents = ""
            }
            function removePointer() {
                burger.style.pointerEvents = "none"
            }

        function burgerOpenAnimation() {
            removePointer();            
            const e = gsap.timeline();
            e.to(spanClose, .5, {
                scaleX: 0,
                force3D: !0,
                duration: .5,
                ease: Expo.easeOut
            }, .1).staggerTo(spanOpen, .5, {
                scaleX: 1,
                force3D: !0,
                ease: Expo.easeOut
            }, .1, .5, addPointer).staggerTo(burgerStckThree, .5, {
                scaleX: 1,
                force3D: !0,
                ease: Expo.easeOut
            }, .1, .5)
        } 
        function burgerCloseAnimation() {
            removePointer();
            const e = gsap.timeline();
            burger.classList.add("is-white"),
            e.staggerTo(spanOpen, .5, {
                scaleX: 0,
                force3D: !0,
                ease: Expo.easeOut
            }, .1).staggerTo(spanClose, .5, {
                scaleX: 1,
                force3D: !0,
                ease: Expo.easeOut
            }, .1, .5, addPointer)
        }
        gsap.timeline().set(spanClose, {
            scaleX: 0,
            force3D: !0
        });
        burger.addEventListener("click", () => {
            if (menu.classList.contains("is-visible")) {
                burgerOpenAnimation();
            } else {
                burgerCloseAnimation();
            };
        });
        [...menuLinks].forEach(t=>{
            t.addEventListener("click", () => {
                menu.classList.remove("is-visible"),
                burgerAnimation()
            })
        });
    };
    burgers()


var Ke = function() {
    const logo = document.querySelector(".logo"),
        navscr = document.querySelector('.navscr'),
        menu = document.querySelector(".menu"),
        burger = document.querySelector(".burger"),
        menuImg = menu.querySelector(".image"),
        src = menu.querySelectorAll(".c-src"),
        listItemLink = menu.querySelectorAll("li a"),
        cNavListItem = menu.querySelectorAll(".c-nav li"),
        subnavListItem = menu.querySelectorAll(".subnav li"),
        cContainer = menu.querySelector(".c-container"),
        lang = menu.querySelector(".language"),
        links = menu.querySelectorAll("a");

    function u() {
        gsap.timeline().set(cNavListItem, {
            y: -50,
            opacity: 0
        }).set(subnavListItem, {
            y: -10,
            opacity: 0
        }).set(lang, {
            opacity: 0
        }).set(menuImg, {
            scale: 1.5
        }).set(menu, {
            opacity: 1,
            yPercent: -100
        }).set(cContainer, {
            yPercent: 100
        })
    }
    function d() {
        const i = document.querySelector(".a-container");
        u(),
        function() {
            let e = [].slice.call(menu.querySelectorAll(".c-src"));
            [...src].forEach(e=>{
                e.style.display = "none"
            }
            ),
            e[Math.floor(Math.random() * e.length)].style.display = "block"
        }(),
        document.querySelector('body').style.overflowY = "hidden";

        menu.classList.add("is-visible");
        gsap.timeline().to(cNavListItem, {
            y: 0,
            opacity: .99,
            clearProps: "all",
            stagger: 0.1,
            duration: 1,
            ease: Power3.easeOut
        }, .5).to(subnavListItem, {
            y: 0,
            stagger: 0.1,
            opacity: .99,
            duration: 1,
            clearProps: "all",
            ease: Power3.easeOut
        }, .5).to(lang, {
            opacity: .99,
            clearProps: "all",
            duration: 1,
            ease: Power3.easeInOut
        }, 1).to(menuImg, {
            scale: 1,
            duration: 1,
            ease: Power3.easeOut
        }, 0).to(i, {
            y: 150,
            clearProps: "all",
            duration: 1,
            ease: Power3.easeInOut
        }, 0).to(menu, {
            yPercent: 0,
            duration: 1,
            ease: Power3.easeInOut
        }, 0).to(cContainer, {
            yPercent: 0,
            duration: 1,
            ease: Power3.easeInOut
        }, 0)
    }
    function f() {
        const e = document.querySelector(".a-container");
        menu.classList.remove("is-visible");
        document.querySelector('body').style.overflowY = "auto";

        gsap.timeline().set(e, {
            y: 0
        }, 0).to(menu, {
            yPercent: 100,
            duration: 1,
            ease: Power3.easeInOut
        }, 0).to(cContainer, {
            yPercent: -100,
            duration: 1,
            ease: Power3.easeInOut
        }, 0)
    }
    menu.addEventListener("mousemove", (function(e) {
        let t = e.clientX / window.innerWidth - .5
          , i = e.clientY / window.innerHeight - .5;
        gsap.timeline().to(menuImg, .6, {
            rotationY: 10 * t,
            rotationX: 10 * i,
            ease: Power1.easeOut,
            transformOrigin: "center",
            transformPerspective: 900
        })
    }
    )),
    u(),
    [...links].forEach(e=>{
        e.setAttribute("data-router-disabled", "")
    }
    ),
    [...listItemLink].forEach(e=>{
        e.addEventListener("click", ()=>{
            setTimeout((function() {
                f()
            }
            ), 1000)
        }
        )
    }
    ),
    burger.addEventListener("click", ()=>{
        menu.classList.contains("is-visible") ? f() : d();
    });
};

Ke();

var qe = function() {
    const e = document.querySelector(".cursor");
    document.addEventListener("mousemove", (function(t) {
        let i = t.clientX
          , r = t.clientY;
          gsap.to(e, {
            duration: .2,
            x: i,
            y: r
        });
    }
    ))
};

qe();

const collage = document.querySelector('.s-collage'),
    image = collage.querySelectorAll(".c-image"),
    chapeau = collage.querySelector(".f-chapeau"),
    headingXXL = collage.querySelector(".f-heading-xxl"),
    n = collage.querySelector(".c-shape"),
    coreValues = document.querySelector(".s-core-values"),
    sUpdate = document.querySelector(".s-update");

const image0 = image[0], 
      image1 = image[1], 
      image2 = image[2], 
      image3 = image[3], 
      image4 = image[4], 
      image5 = image[5];
    let innerHeight = window.innerHeight / 2, 
        innerWidth = window.innerWidth / 2;

    gsap.timeline().set(image0, {
        y: -innerHeight / 20,
        x: innerWidth / 20,
        transformOrigin: "center",
        transformPerspective: 1e3
    }),
    gsap.timeline().set(image1, {
        y: -innerHeight / 15,
        x: innerWidth / 15,
        transformOrigin: "center",
        transformPerspective: 1e3
    }),
    gsap.timeline().set(image2, {
        y: innerHeight / 20,
        x: innerWidth / 20,
        transformOrigin: "center",
        transformPerspective: 1500
    }),
    gsap.timeline().set(image3, {
        y: innerHeight / 15,
        x: innerWidth / 15,
        transformOrigin: "center",
        transformPerspective: 1e3
    }),
collage.addEventListener('mousemove', function(e) {
    let t = e.clientX / window.innerWidth - .5
    , i = e.clientY / window.innerHeight - .5
    , r = e.clientY
    , s = e.clientX;
    gsap.timeline().to(image0, {
        y: -r / 5,
        x: s / 5,
        duration: 1,
        rotationY: 25 * t,
        rotationX: 55 * i,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image1, {
        y: -r / 10,
        x: s / 10,
        duration: 1,
        rotationY: 25 * t,
        rotationX: 25 * i,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image2, {
        y: r / 20,
        x: s / 20,
        duration: 1,
        rotationY: 25 * t,
        rotationX: 25 * i,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image3, {
        y: r / 15,
        x: s / 15,
        duration: 1,
        rotationY: 25 * t,
        rotationX: 25 * i,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image0, {
        y: -r / 20,
        x: s / 20,
        duration: 1,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image2, {
        y: r / 20,
        x: s / 20,
        duration: 1,
        rotationY: 25 * t,
        rotationX: 25 * i,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image1, {
        y: -r / 10,
        x: s / 10,
        duration: 1,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image2, {
        y: r / 20,
        x: s / 20,
        duration: 1,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image0, {
        y: r / 10,
        x: s / 10,
        duration: 1,
        ease: Power1.easeOut
    }),
    gsap.timeline().to(image3, {
        y: r / 5,
        x: s / 15,
        duration: 1,
        ease: Power1.easeOut
    })
});


// /* RUNNER STROKE */

function marquee() {
    const e = document.querySelector(".s-update-marquee .f-heading-xl");
    setTimeout((function() {
        const t = e.getBoundingClientRect().width;
        gsap.to(e, {
            repeat: -1,
            x: -t / 2,
            duration: 45,
            ease: Linear.easeNone
        })
    }
    ), 1500)
}
marquee()

// /* RUNNER STROKE */


const swiperFake = new Swiper(".fake-promo", {
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});


const C = function() {
    const nav = document.querySelector(".nav"), 
            navscr = document.querySelector('.navscr'),
            burger = document.querySelector(".burger"),
            burgerStckThree = document.querySelector('#stickthree'),
            listItems = nav.querySelectorAll("li"),
            logo = document.querySelector('.logo'),
            logoLetter = logo.querySelectorAll('.logo-sign'),
            n = new gsap.timeline();
    window.addEventListener('scroll', () => {
        let e = window.pageYOffset ,
                scrollPrev = 0;
        e > 20 && e > scrollPrev ? (nav.classList.contains("is-hidden") || (nav.style.pointerEvents = "none",
        gsap.timeline().to(burger, {
            x: "7.5vw",
            duration: 1,
            ease: Power3.easeOut
        }, 0).to(navscr, {
            display: 'none'
        }, .5).staggerTo(burgerStckThree, .5, {
            x: 5,
            y: 1,
            rotate: '105deg',
            background: '#d80036',
            scaleY: 1.5
        }, .1, 0).staggerTo(listItems, .1, {
            y: 5,
            opacity: 0
        }, .1, 0).staggerTo(logoLetter, .1, {
            opacity: 0
        }, .05, 0)),

        nav.classList.add("is-hidden")) : e <= 20 && (nav.style.pointerEvents = "all",
        
        nav.classList.contains("is-hidden") && (
            gsap.timeline().to(burger, {
                duration: 1,
            x: "0"
        }, 0).to(navscr, {
            display: 'flex'
        }, 0).staggerTo(burgerStckThree, .5, {
            x: 0,
            y: 0,
            rotate: '0deg',
            background: '#232323',
            scaleX: 1,
            scaleY: 1
        }, .1, 0).staggerTo(listItems, .9, {
            y: 0,
            opacity: .99,
            clearProps: "all",
            ease: Power3.easeOut
        }, .1, 0).staggerTo(logoLetter, .3, {
            opacity: .99,
            clearProps: "all",
            ease: Power3.easeOut
        }, .1, 0), 
        nav.classList.remove("is-hidden")));
    })
};


const Cm = function() {
    const nav = document.querySelector(".nav"),
        navscr = document.querySelector('.navscr'),
        burger = document.querySelector(".burger"),
        listItems = nav.querySelectorAll("li"),
        logo = document.querySelector('.logo'),
        logoLetter = logo.querySelectorAll('.logo-sign'),
        n = new gsap.timeline();
        
    window.addEventListener('scroll', () => {
        let e = window.pageYOffset ,
                scrollPrev = 0;
        e > 10 && e > scrollPrev ? (nav.classList.contains("is-hidden") || (nav.style.pointerEvents = "none"/*,*/
        /*gsap.timeline().to(listItems, .5, {
            y: 5,
            opacity: 0
        }, .1, 0).staggerTo(logoLetter, .9, {
            opacity: 0
        }, .05, 0).staggerTo(navscr, .1, {
            background: '#fff',
            boxShadow: '0 0 25px rgb(0 0 0 / 50%)'
        }, .05, 0)*/),

        nav.classList.add("is-hidden")) : e <= 10 && (nav.style.pointerEvents = "all",
        
        nav.classList.contains("is-hidden") && (
            /*gsap.timeline().to(listItems, .5, {
            y: 0,
            opacity: .99,
            clearProps: "all",
            ease: Power3.easeOut
        }, .1, 0).staggerTo(logoLetter, .9, {
            opacity: .99
        }, .05, 0).to(navscr, {
            background: 'none',
            boxShadow: 'none'
        }, .05, 0),*/
        nav.classList.remove("is-hidden")));

        // if (this.oldScroll > this.scrollY) {
        //     gsap.timeline().to(navscr, .3, {
        //         duration: .3,
        //         ease: Power3.easeOut,
        //         top: 0
        //     }).to(burger, .3, {
        //         duration: .3,
        //         ease: Power3.easeOut,
        //         top: 45
        //     }, 0);
        // } else {
        //     gsap.timeline().to(navscr, .3, {
        //         duration: .3,
        //         ease: Power3.easeOut,
        //         top: -110
        //     }).to(burger, .3, {
        //         duration: .3,
        //         ease: Power3.easeOut,
        //         top: -50
        //     }, 0);
        // }
        // this.oldScroll = this.scrollY;
    })
};


const contactInputs = document.querySelectorAll('.input input'),
      contactLabels = document.querySelectorAll('.input label');
contactInputs.forEach((item, i) => {
    item.addEventListener('input', () => {
        if (item.value.length > 1) {
            contactLabels[i].style.cssText = `transform:translateY(-180%);font-size: 14px;`
        } else {
            contactLabels[i].style.cssText = `transform: translateY(-50%);font-size: 16px;`
        };
    })
})


function modalWindow() {
    const modalReview = document.querySelector('.modal-review'),
        modalOpen = document.querySelectorAll('.modal-open'),
        modalClose = document.querySelectorAll('.close-modal'),
        docBody = document.querySelector('body');

    modalOpen.forEach((i) => {
        i.addEventListener('click',() => {
            modalReview.classList.remove('modal-review-closed');
            docBody.style.overflowY = 'hidden';
        })
    });
    modalClose.forEach((i) => {
        i.addEventListener('click', () => {
            modalReview.classList.add('modal-review-closed');
            docBody.style.overflowY = 'auto';
        })
    });
};
modalWindow();

function changeMedia () {
    const uncleSamImg = document.querySelector('.page-services .high .right')

    window.addEventListener('resize', (e) => {
        const  windowWidth = window.innerWidth;
        // const bigLetters = document.querySelector('.clipped-text');
    
        // if (windowWidth < 1199) {
        //     bigLetters.innerHTML = 'E-COMMERCE <br> <span>ADVANTAGES</span>'
        // } else if (windowWidth < 475) {
        //     bigLetters.innerHTML = 'E-COMMERCE <br> <span>ADVANTAGES</span>';
        // } else {
        //     bigLetters.innerHTML = 'E- &emsp; &ensp; ADV<br>COMM&nbsp;ANT<br>ERCE AGES';
        // }

        if (windowWidth < 768) {
            uncleSamImg.innerHTML = '<img src="img/unclesam.svg" alt="image">';
        } else {
            uncleSamImg.innerHTML = '<img src="img/unclesam-engcolor.svg" alt="image">';
        }
    });
    
    const  windowWidth = window.innerWidth;
    window.addEventListener('load', (e) => {
        
        const bigLetters = document.querySelector('.clipped-text');
    
        // if (windowWidth < 1199) {
        //     bigLetters.innerHTML = 'E-COMMERCE <br> <span>ADVANTAGES</span>'    
        // } else {
        //     bigLetters.innerHTML = 'E- &emsp; &ensp; ADV<br>COMM&nbsp;ANT<br>ERCE AGES'
        // }

        if (windowWidth < 768) {
            uncleSamImg.innerHTML = '<img src="img/unclesam.svg" alt="image">';
        } else {
            uncleSamImg.innerHTML = '<img src="img/unclesam-engcolor.svg" alt="image">';
        }

        
    });

    if (windowWidth > 475) {
        C();
    }
};
changeMedia();

// });
