//let key = "9a6cad2c29524869be31815d8d710b4d";
 const key = "8a921abb339743c8a6f0a7784a87148f"
let newsSection = document.querySelector(".news-section");

let news = async function (input) {
  let newsData = await fetch(
    `https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`
  );
  let jsonValue = await newsData.json();
  //console.log(jsonValue);
  newsSection.innerHTML = "";
  jsonValue.articles.map((e) => {
    // console.log(e);

    let newsCardDiv = document.createElement("div");
    newsCardDiv.classList.add("news-card");

    newsCardDiv.innerHTML = `  <h3 class="news-card-title">${e.title}</h3>
       <img src="${e.urlToImage}" alt="image-card" class="news-card-img">
       <p class="news-desc">${e.description}.</p>`;

    newsCardDiv.addEventListener("click", () => {
      window.open(e.url, "_blank");
    });

    newsSection.appendChild(newsCardDiv);
  });
};

window.addEventListener("load", news("loksabha&elections"));

let entertainment = document.querySelector(".entertainment");

entertainment.addEventListener("click", (e) => {
  news("Bollywood");
});
let sports = document.querySelector(".sports");
sports.addEventListener("click", (e) => {
  news("sports");
});

let politics = document.querySelector(".politics");

politics.addEventListener("click", (e) => {
  news("modi");
});

const searchBox = document.querySelector("#searchBox");

const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  let searchValue = searchBox.value;
  if(!searchValue) return
  news(searchValue);
});

const logoStart = document.querySelector(".logo-start")
logoStart.addEventListener("click",()=>{
   news("loksabha")
})
