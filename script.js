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
  changeText.textContent = "Rušys";
});

faktai.addEventListener("click", function () {
  changeText.textContent = "Trumpi faktai";
});

pazymek.addEventListener("click", function () {
  changeText.textContent = "Pažymėk augalą";
});

kartu.addEventListener("click", function () {
  changeText.textContent = "Saugomime kartu";
});

saltiniai.addEventListener("click", function () {
  changeText.textContent = "Šaltiniai";
});

// Change picture

// function changeImage() {
//   if (
//     document.getElementById("imgClickAndChange").src ==
//     "./assets/images/logo.png"
//   ) {
//     document.getElementById("imgClickAndChange").src =
//       "https://as2.ftcdn.net/v2/jpg/05/96/53/35/1000_F_596533582_UgVp2PyEDGWBx71tKyFm9jvYRnSvVerZ.jpg;
//   } else {
//     document.getElementById("imgClickAndChange").src =
//       "http://www.userinterfaceicons.com/80x80/minimize.png";
//   }
// }
