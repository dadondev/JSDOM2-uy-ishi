let displayFirst = document.querySelector("#display-banan");
let displaySecond = document.querySelector("#may-display");
let displayThird = document.querySelector("#kak-display");
let displayFourth = document.querySelector("#kivi-display");
let displayFifth = document.querySelector("#qulup-display");
let payMoney = document.querySelector("#pay-money");
let redBack = document.querySelector("#pay-moneys");

let productCard1 = document.querySelector(".card1");
let productCard2 = document.querySelector(".card2");
let productCard3 = document.querySelector(".card3");
let productCard4 = document.querySelector(".card4");
let productCard5 = document.querySelector(".card5");

payMoney.textContent =
  displayFourth.textContent * 45000 +
  displayFifth.textContent * 30000 +
  displayFirst.textContent * 25000 +
  displaySecond.textContent * 25000 +
  displayThird.textContent * 25000;

let bananPlusBtn = document.querySelector("#banan-plus-product1");
let bananMinusBtn = document.querySelector("#banan-minus-product1");

let func = function () {
  payMoney.textContent =
    Number(displayFourth.textContent) * 45000 +
    Number(displayFifth.textContent) * 30000 +
    Number(displayFirst.textContent) * 25000 +
    Number(displaySecond.textContent) * 25000 +
    Number(displayThird.textContent) * 25000;
  if (payMoney.textContent > 150000 && payMoney.textContent <= 200000) {
    alert("Sizning hamyoningizda pul kam qolmoqda !");
    redBack.style.backgroundColor = "red";
  } else {
    redBack.style.backgroundColor = "rgba(33, 202, 121, 0.95)";
  }
  if (payMoney.textContent >= 200000) {
    alert("Sizda buncha mahsulot sotib olish uchun mablag' yetarli emas !");
    redBack.style.backgroundColor = "red";
  }
};

let bananCounter = 1;
let bananPlus = function () {
  if (payMoney + displayFirst * 25000 != 200000) {
    bananCounter++;
    displayFirst.textContent = bananCounter;
  } else {
    alert("Buncha mahsulotni sotib olish uchun pulingiz yetmaydi !");
  }
  console.log(bananCounter);
  displayFirst.textContent = bananCounter;
  func();
};
let bananMinus = function () {
  if (displayFirst.textContent != 0) {
    bananCounter--;
    console.log(bananCounter);
    displayFirst.textContent = bananCounter;
    func();
  } else {
    productCard1.style.display = "none";
  }
};

bananMinusBtn.addEventListener("click", bananMinus);
bananPlusBtn.addEventListener("click", bananPlus);

let mayPlusBtn = document.querySelector("#may-plus-product1");
let mayMinusBtn = document.querySelector("#may-minus-product1");

let mayCounter = 1;
let mayPlus = function () {
  if (payMoney + displaySecond * 25000 != 200000) {
    mayCounter++;
    displaySecond.textContent = mayCounter;
  } else {
    alert("Buncha mahsulotni sotib olish uchun pulingiz yetmaydi !");
  }
  console.log(mayCounter);
  displaySecond.textContent = mayCounter;
  func();
};
let mayMinus = function () {
  if (displaySecond.textContent != 0) {
    mayCounter--;
    console.log(mayCounter);
    displaySecond.textContent = mayCounter;
    func();
  } else {
    productCard2.style.display = "none";
  }
};

mayMinusBtn.addEventListener("click", mayMinus);
mayPlusBtn.addEventListener("click", mayPlus);

let kakPlusBtn = document.querySelector("#kak-plus-product1");
let kakMinusBtn = document.querySelector("#kak-minus-product1");

let kakCounter = 1;
let kakPlus = function () {
  if (payMoney + displayThird * 25000 != 200000) {
    kakCounter++;
    displayThird.textContent = kakCounter;
  } else {
    alert("Buncha mahsulotni sotib olish uchun pulingiz yetmaydi !");
  }
  console.log(kakCounter);
  displayThird.textContent = kakCounter;
  func();
};
let kakMinus = function () {
  if (displayThird.textContent != 0) {
    kakCounter--;
    console.log(kakCounter);
    displayThird.textContent = kakCounter;
    func();
  } else {
    productCard3.style.display = "none";
  }
};

kakMinusBtn.addEventListener("click", kakMinus);
kakPlusBtn.addEventListener("click", kakPlus);

let kiviPlusBtn = document.querySelector("#kivi-plus-product1");
let kiviMinusBtn = document.querySelector("#kivi-minus-product1");

let kiviCounter = 1;
let kiviPlus = function () {
  if (payMoney + displayFourth * 25000 != 200000) {
    kiviCounter++;
    displayFourth.textContent = kiviCounter;
  } else {
    alert("Buncha mahsulotni sotib olish uchun pulingiz yetmaydi !");
  }
  console.log(kiviCounter);
  displayFourth.textContent = kiviCounter;
  func();
};
let kiviMinus = function () {
  if (displayFourth.textContent != 0) {
    kiviCounter--;
    console.log(kiviCounter);
    displayFourth.textContent = kiviCounter;
    func();
  } else {
    productCard4.style.display = "none";
  }
};

kiviMinusBtn.addEventListener("click", kiviMinus);
kiviPlusBtn.addEventListener("click", kiviPlus);

let qulupPlusBtn = document.querySelector("#qulup-plus-product1");
let qulupMinusBtn = document.querySelector("#qulup-minus-product1");

let qulupCounter = 1;
let qulupPlus = function () {
  if (payMoney + displayFifth * 25000 != 200000) {
    qulupCounter++;
    displayFifth.textContent = qulupCounter;
  } else {
    alert("Buncha mahsulotni sotib olish uchun pulingiz yetmaydi !");
  }
  console.log(qulupCounter);
  displayFifth.textContent = qulupCounter;
  func();
};
let qulupMinus = function () {
  if (displayFifth.textContent != 0) {
    qulupCounter--;
    console.log(qulupCounter);
    displayFifth.textContent = qulupCounter;
    func();
  } else {
    productCard5.style.display = "none";
  }
};
qulupMinusBtn.addEventListener("click", qulupMinus);
qulupPlusBtn.addEventListener("click", qulupPlus);
