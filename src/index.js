import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";
import hotel1 from "./assets/hotel-1.jpg";

const laughImg = document.getElementById("laugh");
laughImg.src = laughing;

const hotel1Img = document.getElementById("hotel1");
hotel1Img.src = hotel1;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", () => {
  console.log("Clicked");
  generateJoke();
});

generateJoke();
