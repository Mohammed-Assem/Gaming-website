const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const navbar = document.querySelector("[nav]");
const navtoggler = document.querySelector("[toggler]");
const navLinks = document.querySelectorAll("[navlink]");

const togglenav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navtoggler.addEventListener("click", togglenav);

const close = () => {
  navbar.classList.remove("active");
  navtoggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", close);

const button = document.querySelectorAll("[btn]");

const buttonhover = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(button, "mousemove", buttonhover);



const header = document.querySelector("[header]");
const backtop = document.querySelector("[back]");

const active = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backtop.classList.add("active");
  } else {
    header.classList.remove("active");
    backtop.classList.remove("active");
  }
}

window.addEventListener("scroll", active);



const reveal = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = reveal.length; i < len; i++) {
    const isElementInsideWindow = reveal[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      reveal[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);




const cursor = document.querySelector("[cursor]");
const hover = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const move = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", move);

addEventOnElements(hover, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hover, "mouseout", function () {
  cursor.classList.remove("hovered");
});