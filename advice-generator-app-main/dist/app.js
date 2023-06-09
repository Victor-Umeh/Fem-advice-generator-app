"use strict";
const btnEl = document.querySelector("button");
const quoteEl = document.getElementById("quotes");
const quoteNum = document.getElementById("quote-num");

function displayData(data) {
  //Destructure response object
  const {
    slip: { id, advice },
  } = data;

  //Display data
  quoteEl.textContent = `"${advice}"`;
  quoteNum.textContent = `#${id}`;
}
function getAdvice() {
  fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status} Advice Not Found`);
      return res.json();
    })
    .then((data) => {
      //Store data in locale storage
      const str = localStorage.setItem("data", JSON.stringify(data));
      displayData(data);
    })
    .catch((err) => {
      quoteEl.textContent = err.message;
    });
}

//Get data on button click
btnEl.addEventListener("click", getAdvice);

//On page reload get last fetched advice and display
window.addEventListener("load", () => {
  const advice = JSON.parse(localStorage.getItem("data"));
  displayData(advice);
});
