/*==========SHOW SIDEBAR============ */
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*============Home_title=======*/
document.addEventListener("DOMContentLoaded", function(event) { 
    var text = document.querySelector(".home__title");
    var content = text.textContent;
    text.textContent = "";
    for (var i = 0; i < content.length; i++) {
        (function(i) {
            setTimeout(function() {
                text.textContent += content.charAt(i);
            }, i * 100);
        })(i);
    }
});
document.addEventListener("DOMContentLoaded", function(event) { 
    var text = document.querySelector(".footer__title");
    var content = text.textContent;
    text.textContent = "";
    for (var i = 0; i < content.length; i++) {
        (function(i) {
            setTimeout(function() {
                text.textContent += content.charAt(i);
            }, i * 100);
        })(i);
    }
});
/*==========SIDEBAR SHOW============ */
/*==========Validate if Constant Exists============ */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}
/*==========SIDEBAR HIDDEN============ */
/*==========Validate if Constant Exists============ */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*==========SKILLS TABs============ */
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })
            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })
            tab.classList.add('skills__active')
        })
      })

/*==========MIXITUP FILTER PORTFOLIO============ (bach nrbetha b hadik li telechargitha)   */   
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*==========Link Active Work============  bach tweli ttbedel l couleur m3a l click*/
const linkWork= document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

/*==========Work Popup============ */
document.addEventListener("click" ,  (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*==========SERVICES MODAL============ */
const modalViews = document.querySelectorAll('.services__modal'),
      modelBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn,i) => {
    modelBtn.addEventListener('click',() => {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


/*==========SWIPER TESTIMONIAL============ */

let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

  /*==========INPUT ANIMATION============ */
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent= this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  })


/*==========SCROLL SECTION ACTION LINK============ */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll",navHighlighter);

function navHighlighter()
{
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ' ]').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ' ]').classList.remove("active-link")
        }
    })
}

/*==========SHOW SCROLL UP============ */
window.addEventListener("scroll", function() {
    var upButton = document.getElementById("scroll-up");
    var downButton = document.getElementById("scroll-down");
    if (window.pageYOffset > 0) {
        upButton.style.display = "block";
        upButton.style.opacity = 1;
    } else {
        upButton.style.display = "none";
        upButton.style.opacity = 0.5;
    }
    if (window.pageYOffset + window.innerHeight < document.documentElement.scrollHeight) {
        downButton.style.display = "block";
        downButton.style.opacity = 1;
    } else {
        downButton.style.display = "none";
        downButton.style.opacity = 0.5;
    }
});
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollToBottom() {
    window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'});
}