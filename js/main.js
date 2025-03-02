// RENDER DYNAMICALLY COPYRIGHT YEAR

let currentYear = new Date().getFullYear();

const dateSpanElement = document.querySelector("#copyrightYear");
dateSpanElement.innerText = currentYear;

// HOVER EFFECT ON DIFFERENT BUTTONS

const toggleButton = document.querySelector(".reverseBtn");

toggleButton.addEventListener("mouseenter", () => {
  toggleButton.classList.toggle("defaultBtn", true);
  toggleButton.classList.toggle("reverseBtn", false);
});

toggleButton.addEventListener("mouseleave", () => {
  toggleButton.classList.toggle("reverseBtn", true);
  toggleButton.classList.toggle("defaultBtn", false);
});

const allBtns = document.querySelectorAll(".defaultBtn");

allBtns.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("defaultBtn");
    item.classList.remove("reverseBtn");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.add("reverseBtn");
    item.classList.remove("defaultBtn");
  });
});

// TOGGLE HAMBURGER MENU BUTTON

const hamburgerMenuBtn = document.querySelector(".navBarLogo svg");
const navbarItems = document.querySelector(".navBarItems");

// Close hamburger menu

hamburgerMenuBtn.addEventListener("click", () => {
  navbarItems.classList.toggle("hamburgerMenuHidden");
});

// Close navbar menu, when each li item is clicked
const navbarMenuItem = document.querySelectorAll(".navBarItemsWrapper__item a");
navbarMenuItem.forEach((item) => {
  item.addEventListener("click", () => {
    navbarItems.classList.add("hamburgerMenuHidden");
  });
});

// ANIMATE SECTION SCROLLBAR

let allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("animateOnScroll")
      : entry.target.classList.remove("animateOnScroll");
  });
});

// Observe each section
allSections.forEach((section) => observer.observe(section));

// IMPLEMENT INTERACTIVE SLIDE

// Selecting slide content:
let slideContent = document.querySelectorAll(".testimonialsBody");

// Selecting next and previous arrow elments:
let arrowLeft = document.querySelector("img[alt = arrowLeft]");
let arrowRight = document.querySelector("img[alt = arrowRight]");

// Selecting slider bullet points:
let bulletElements = document.querySelectorAll("img[alt=ellipse]");

let counter = 0;

arrowRight.addEventListener("click", () => {
  // Move to the next slide
  counter = counter >= slideContent.length - 1 ? 0 : counter + 1;

  // Update the classes and styles for slides to show the default one
  slideContent.forEach((slide, index) => {
    slide.classList.remove("defaultSlide");
    if (index === counter) {
      slide.classList.add("defaultSlide");
      slide.style.animation = "nextSlide 0.5s ease-in forwards";
    }
  });

  // Update the bullets to reflect the current slide
  bulletElements.forEach((bullet, index) => {
    bullet.src =
      index === counter ? "./images/ellipseFilled.svg" : "./images/ellipse.svg";
  });
});

arrowLeft.addEventListener("click", () => {
  // Move to the previous slide
  counter = counter <= 0 ? slideContent.length - 1 : counter - 1;

  // Update the classes and styles for slides to show the default one
  slideContent.forEach((slide, index) => {
    slide.classList.remove("defaultSlide");
    if (index === counter) {
      slide.classList.add("defaultSlide");
      slide.style.animation = "prevSlide 0.5s ease-in forwards"; // Using 'prevSlide' animation for left arrow
    }
  });

  // Update the bullets to reflect the current slide
  bulletElements.forEach((bullet, index) => {
    bullet.src =
      index === counter ? "./images/ellipseFilled.svg" : "./images/ellipse.svg";
  });
});
