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