"use strict";

// Change h1 name
const changeText = document.querySelector("#changer");
const apieMus = document.querySelector("#apie");
const rusys = document.querySelector("#rusys");
const faktai = document.querySelector("#faktai");
const pazymek = document.querySelector("#pazymek");
const kartu = document.querySelector("#kartu");
const saltiniai = document.querySelector("#saltiniai");

apieMus.addEventListener("click", function () {
  changeText.textContent = "Apie mus";
});

rusys.addEventListener("click", function () {
  changeText.textContent = "Rūšys";
});

faktai.addEventListener("click", function () {
  changeText.textContent = "Trumpi faktai";
});

pazymek.addEventListener("click", function () {
  changeText.textContent = "Pažymėk augalą";
});

kartu.addEventListener("click", function () {
  changeText.textContent = "Saugokime kartu";
});

saltiniai.addEventListener("click", function () {
  changeText.textContent = "Šaltiniai";
});

// Change picture

const myImg = document.getElementById("myImg");

apieMus.addEventListener("click", function () {
  myImg.src = "./assets/images/about-us.jpg";
});

rusys.addEventListener("click", function () {
  myImg.src = "./assets/images/species.jpg";
});

faktai.addEventListener("click", function () {
  myImg.src = "./assets/images/facts.jpg";
});

pazymek.addEventListener("click", function () {
  myImg.src = "./assets/images/mark.jpg";
});

pazymek.addEventListener("click", function () {
  myImg.src = "./assets/images/mark.jpg";
});

kartu.addEventListener("click", function () {
  myImg.src = "./assets/images/together.jpg";
});

saltiniai.addEventListener("click", function () {
  myImg.src = "./assets/images/source.jpg";
});
