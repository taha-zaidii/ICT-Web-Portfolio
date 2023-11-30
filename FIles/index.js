const scrollers = document.querySelectorAll(".scroller");

// If a user has not opted in for recuded motion in his system preferences, then we will add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    // Making an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      //console.log(duplicatedItem); - testing to check if the items are being duplicated
      duplicatedItem.setAttribute("aria-hidden", true); // inclusion of 'aria-hidden' is making my HTML screen-reader friendly
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav-bar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > window.innerHeight) {
    // adjust this value as needed
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "#1B1B1B";
  } else {
    navbar.style.backgroundImage =
      "linear-gradient(to bottom, rgba(10, 10, 11, 1) 0%, rgba(10, 10, 11, 0) 100%)";
    navbar.style.backgroundColor = "transparent";
  }
});

const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");

var dEmail = document.getElementById("email"); // default email
let userEmail = document.getElementById("user-email");

let dButton = document.getElementById("dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  userEmail.innerHTML = dEmail.value;
  dEmail.innerHTML = userEmail;

  card_1.classList.add("hide");
  card_2.classList.remove("hide");
});

dButton.addEventListener("click", dismissFunction);

function dismissFunction() {
  dEmail.value = "";
  card_2.classList.add("hide");
  card_1.classList.remove("hide");
}