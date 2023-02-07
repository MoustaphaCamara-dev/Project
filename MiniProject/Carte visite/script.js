const carte = document.querySelector("#carte");
const txt = document.querySelector("#description");
const btn = document.querySelector("#button");

let animText = () => {
  txt.classList.add("active");
};
let animCarte = () => {
  carte.classList.add("active");

  setTimeout(animText, 1000);
};

btn.addEventListener("click", animCarte);
