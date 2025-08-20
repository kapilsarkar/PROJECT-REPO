const humBurgerMenu = document.querySelector(".humburger-menu");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-menu");
const menuContainer = document.querySelector(".menu-container");
const darkMode = document.querySelector("#dark-mode");

humBurgerMenu.addEventListener("click", () => {
  menuContainer.style.display = "block";
  humBurgerMenu.style.display = "none";
});
closeIcon.addEventListener("click", () => {
  menuContainer.style.display = "none";
  humBurgerMenu.style.display = "block";
});

darkMode.addEventListener("click", () => {
  DarkLight();
});

function DarkLight() {
  document.body.classList.toggle("dark");
}

// coding for mobile-1

const mobile1Btn = document.querySelector(".mobile-1-btn");
const cartNumber = document.querySelector(".cartNumber");
const mobilePrice = document.querySelector(".mobile-1-price");
const mobileText = document.querySelector(".mobile-1-text");
const mobileImag = document.querySelector(".mobile-1-img");
let num = 1;

let fullCart = [
  {
    id: 1,
    price: mobilePrice.innerText,
    name: mobileText.innerText,
    image: mobileImag.innerHTML,
  },
];

mobile1Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  mobile1Btn.disabled = true;
  mobile1Btn.innerText = "Item Added";
});

//coding for mobile-2

const mobile2Btn = document.querySelector(".mobile-2-btn");

mobile2Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  mobile2Btn.disabled = true;
  mobile2Btn.innerText = "Item Added";
});

//coding for mobile-3

const mobile3Btn = document.querySelector(".mobile-3-btn");

mobile3Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  mobile3Btn.disabled = true;
  mobile3Btn.innerText = "Item Added";
});

//code for clearing mobile-cart

const clearMobileCart = document.querySelector(".mobile-clear");

clearMobileCart.addEventListener("click", () => {
  num = 0;
  cartNumber.innerText = "";
  mobile1Btn.innerText = "Add To Cart";
  mobile1Btn.disabled = false;
  mobile2Btn.innerText = "Add To Cart";
  mobile2Btn.disabled = false;
  mobile3Btn.innerText = "Add To Cart";
  mobile3Btn.disabled = false;

  //for laptop

  laptop1Btn.innerText = "Add To Cart";
  laptop1Btn.disabled = false;
  laptop2Btn.innerText = "Add To Cart";
  laptop2Btn.disabled = false;
  laptop3Btn.innerText = "Add To Cart";
  laptop3Btn.innerText = false;
  location.reload();
});

//code for laptop-1

const laptop1Btn = document.querySelector(".laptop-1-btn");

laptop1Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  laptop1Btn.disabled = true;
  laptop1Btn.innerText = "Item Added";
});

//code for laptop-2

const laptop2Btn = document.querySelector(".laptop-2-btn");

laptop2Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  laptop2Btn.disabled = true;
  laptop2Btn.innerText = "Item Added";
});

//code for laptop-3

const laptop3Btn = document.querySelector(".laptop-3-btn");

laptop3Btn.addEventListener("click", () => {
  cartNumber.innerText = num++;
  laptop3Btn.disabled = true;
  laptop3Btn.innerText = "Item Added";
});
