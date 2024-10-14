const nameElement = document.getElementById('name');
const nameText = "Hi, It's Tajamal";
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeIcon.className = savedTheme === "light-theme" ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

function animateName() {
    nameText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');

        span.style.animationDelay = `${index * 0.1}s`;
        nameElement.appendChild(span);
    });
}
let anchorTag = document.querySelectorAll('a');
anchorTag.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            event.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', (event) => {
    document.querySelectorAll('nav')
    event.preventDefault();
    let scrollSetup = {
        top: 0,
        behavior: 'smooth'
    }
    window.scrollTo(scrollSetup);
});

const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
menuBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('hidden');
});

window.onload = function () {
    animateName();
}
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const slides = document.querySelectorAll('.slide');
    const slides2 = document.querySelectorAll('.slide2');
    const slides3 = document.querySelectorAll('.slide3');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };

    function intersection(entries) {
        entries.forEach(entry => {
            const index = [...sections].indexOf(entry.target);
            const slide = slides[index];
            const slide2 = slides2[index];
            const slide3 = slides3[index];

            if (entry.isIntersecting) {
                slide.style.opacity = '1';
                slide.style.transform = 'translateX(0)';

                slide2.style.opacity = '1';
                slide2.style.transform = 'translateX(0)';

                slide3.style.opacity = '1';
                slide3.style.transform = 'translateX(0)';

            } else {
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(-150%)';

                slide2.style.opacity = '0';
                slide2.style.transform = 'translateX(150%)';

                slide3.style.opacity = '0';
                slide3.style.transform = 'translateX(-150%)';
            }
        });
    }
    const observer = new IntersectionObserver(intersection, options);

    sections.forEach(section => {
        observer.observe(section);
    });
    if (window.scrollY > 300) {
        scrollBtn.classList.remove('hidden');
    } else {
        scrollBtn.classList.add('hidden');
    }
});
window.addEventListener('DOMContentLoaded', function () {
    const serviceBoxes = document.querySelectorAll('.service-box');

    const observerOptions = {
        root: null,
        threshold: 0.5,
    };
    function intersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            } else {
                entry.target.classList.remove('opacity-100', 'translate-y-0');
                entry.target.classList.add('opacity-0', 'translate-y-10');
            }
        });
    }
    const observer = new IntersectionObserver(intersection, observerOptions);
    serviceBoxes.forEach(box => {
        box.classList.add('opacity-0', 'translate-y-10');
        observer.observe(box);
    });

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        } else {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    });

    
});
const hireButton = document.getElementById('hire');
const contactButton = document.getElementById('contact');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const backgroundContent = document.getElementById('background-content'); 
function openPopup() {
    popup.classList.remove('hidden');
    backgroundContent.classList.add('blur-background'); 
}
function closePopupFunc() {
    popup.classList.add('hidden');
    backgroundContent.classList.remove('blur-background');
}
hireButton.addEventListener('click', openPopup);
contactButton.addEventListener('click', openPopup);
closePopup.addEventListener('click', closePopupFunc);
window.addEventListener('click', function (e) {
    if (e.target === popup) {
        closePopupFunc();
    }
});
