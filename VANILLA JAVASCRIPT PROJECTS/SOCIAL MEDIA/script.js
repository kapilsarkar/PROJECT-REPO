const start1btn = document.querySelector(".start1btn");
const socialStarPic = document.querySelector("#social-starsPic1");
const star1 = document.querySelector(".star1");
const socialstarsPicName = document.querySelector(".social-starsPicName");
const IconLike1 = document.querySelector("#IconLike1");
const CountLike1 = document.querySelector("#CountLike1");
const IconDisLike1 = document.querySelector("#IconDisLike1");
const CountDisLike1 = document.querySelector("#CountDisLike1");
const socialCount1 = document.querySelector(".socialCount1");
const IconComment1 = document.querySelector("#IconComment1");
const comment1 = document.querySelector(".comment1");
const Start1comments = document.querySelector(".Start1comments");
window.addEventListener("load", (e) => {
  socialStarPic.style.backgroundImage = "url(./images/banner1.webp)";

  socialCount1.style.visibility = "hidden";
});
start1btn.addEventListener("click", function (e) {
  if (start1btn.innerText === "Follow") {
    start1btn.innerText = "Following";
  } else {
    start1btn.innerText = "Follow";
  }
});

star1.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/hrithik2.jpg)";
  socialstarsPicName.innerText = "Hrithik Roshan";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});
let like1 = 0;
IconLike1.addEventListener("click", (e) => {
  IconLike1.style.color = "#e72e0d";
  like1++;
  CountLike1.innerText = `${like1} Likes`;
});
let dislike1 = 0;
IconDisLike1.addEventListener("click", (e) => {
  IconDisLike1.style.color = "#e72e0d";
  dislike1++;
  CountDisLike1.innerText = `${dislike1} DisLikes`;
});

IconComment1.addEventListener("click", function (e) {
  IconComment1.style.color = "green";
  //Add Comments

  let input = document.createElement("input");
  input.className = "List1";

  input.addEventListener("change", (e) => {
    let inputValue = input.value;

    Start1comments.append(`${inputValue} 🧡 🔥`);

    input.style.visibility = "hidden";
  });

  Start1comments.appendChild(input);
});

// second Pic
const start2btn = document.querySelector(".start2btn");
const star2 = document.querySelector(".star2");

start2btn.addEventListener("click", function (e) {
  if (start2btn.innerText === "Follow") {
    start2btn.innerText = "Following";
  } else {
    start2btn.innerText = "Follow";
  }
});

star2.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/virat9.gif)";
  socialstarsPicName.innerText = "Virat Kohli";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});

//third pic

const start3btn = document.querySelector(".start3btn");
const star3 = document.querySelector(".star3");

start3btn.addEventListener("click", function (e) {
  if (start3btn.innerText === "Follow") {
    start3btn.innerText = "Following";
  } else {
    start3btn.innerText = "Follow";
  }
});

star3.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/srk1.jpg)";
  socialstarsPicName.innerText = "Shahrukh Khan";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});

//Fourth Pic
const start4btn = document.querySelector(".start4btn");
const star4 = document.querySelector(".star4");

start4btn.addEventListener("click", function (e) {
  if (start4btn.innerText === "Follow") {
    start4btn.innerText = "Following";
  } else {
    start4btn.innerText = "Follow";
  }
});

star4.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/sachin3.jpg)";
  socialstarsPicName.innerText = "Sachin Tendulkar";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});

//Fifth Pic
const start5btn = document.querySelector(".start5btn");
const star5 = document.querySelector(".star5");

start5btn.addEventListener("click", function (e) {
  if (start5btn.innerText === "Follow") {
    start5btn.innerText = "Following";
  } else {
    start5btn.innerText = "Follow";
  }
});

star5.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/johncen3.jpg)";
  socialstarsPicName.innerText = "John Cena";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});

//Sixth Pic
const start6btn = document.querySelector(".start6btn");
const star6 = document.querySelector(".star6");

start6btn.addEventListener("click", function (e) {
  if (start6btn.innerText === "Follow") {
    start6btn.innerText = "Following";
  } else {
    start6btn.innerText = "Follow";
  }
});

star6.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/aki2.avif)";
  socialstarsPicName.innerText = "Akshay Kumar";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});

//Seventh Pic

const start7btn = document.querySelector(".start7btn");
const star7 = document.querySelector(".star7");

start7btn.addEventListener("click", function (e) {
  if (start7btn.innerText === "Follow") {
    start7btn.innerText = "Following";
  } else {
    start7btn.innerText = "Follow";
  }
});

star7.addEventListener("click", function (e) {
  socialStarPic.style.backgroundImage = "url(./images/amit2.gif)";
  socialstarsPicName.innerText = "Amitabh Bachchan";
  socialCount1.style.visibility = "visible";
  CountLike1.innerText = 0;
  IconLike1.style.color = "#fff";
  like1 = 0;
  CountDisLike1.innerText = 0;
  IconDisLike1.style.color = "#fff";
  dislike1 = 0;
  IconComment1.style.color = "#fff";
  Start1comments.innerHTML = "";
});

//code for animation--



