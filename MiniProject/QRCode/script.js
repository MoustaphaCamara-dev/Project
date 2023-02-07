const qr = document.querySelector(".qr img");
const btn = document.querySelector(".button");
const url = document.querySelector("#url");

let createQR = () => {
  let urlVal = url.value;
  if (urlVal === "") {
    return console.log("null");
  }
  console.log(urlVal);
  qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + urlVal;
  console.log(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + urlVal
  );
  qr.classList.add("active");
};

btn.addEventListener("click", createQR);
