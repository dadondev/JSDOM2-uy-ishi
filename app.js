let displayFirst = Number(document.querySelector("#display-banan").textContent);
let displaySecond = Number(document.querySelector("#may-display").textContent);
let displayThird = Number(document.querySelector("#kak-display").textContent);
let displayFourth = Number(document.querySelector("#kivi-display").textContent);
let displayFifth = Number(document.querySelector("#qulup-display").textContent);
let payMoney = document.querySelector("#pay-money");
let redBack = document.querySelector("#pay-moneys");
payMoney.textContent = payMoney.textContent =
  displayFourth * 45000 +
  displayFifth * 30000 +
  displayFirst * 25000 +
  displaySecond * 25000 +
  displayThird * 25000;

let func = function () {
  if (payMoney.textContent >= 150000) {
    alert("Sizning hamyoningizda pul kam qolmoqda !");
    redBack.style.backgroundColor = "red";
  }
  payMoney.textContent =
    displayFourth * 45000 +
    displayFifth * 30000 +
    displayFirst * 25000 +
    displaySecond * 25000 +
    displayThird * 25000;
  if ((displayFirst.textContent = 0)) {
    document.querySelector(".card1").style.display = "none";
  }
};

let i = 1;
let bananPlus = document.querySelector("#banan-plus-product1");
let plus = function () {
  i++;
  console.log(i);
  displayFirst = displayFirst.textContent = i;
  func();
};
bananPlus.addEventListener("click", plus);

let bananMinus = document.querySelector("#banan-minus-product1");
let minus = function () {
    i--;
    displayFirst = displayFirst.textContent = i;
  
  console.log(displayFirst.textContent);
  func();
};
bananMinus.addEventListener("click", minus);
