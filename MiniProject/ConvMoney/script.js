let value1 = document.getElementById("first-val");
let unit1 = document.getElementById("first-unit");
let value2 = document.getElementById("second-val");
let unit2 = document.getElementById("second-unit");
let btn = document.getElementById("button");

const convertirVal = () => {
  let val1 = value1.value;
  console.log(val1);
  let uni1 = unit1.value;
  let uni2 = unit2.value;

  let valUniv;
  let valconv;

  switch (uni1) {
    case "usd":
      valUniv = val1 * 0.92;
      console.log(valUniv);
      break;
    case "eur":
      valUniv = val1 * 1;
      break;
    case "gbp":
      valUniv = val1 * 1.11;
      break;
    case "xof":
      valUniv = val1 * 0.0015;
      break;
  }

  switch (uni2) {
    case "usd":
      valconv = valUniv * 1.08;
      break;
    case "eur":
      valconv = valUniv;
      break;
    case "gbp":
      valconv = valUniv * 0.9;
      break;

    case "xof":
      valconv = valUniv * 655.65;
      break;
  }

  value2.value = valconv;
};
btn.addEventListener("click", convertirVal);

unit2.addEventListener("change", () => {
  value2.value = "";
});
unit1.addEventListener("change", () => {
  value2.value = "";
});
