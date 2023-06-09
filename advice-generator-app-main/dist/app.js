"use strict";
const btnEl = document.querySelector("button");
const quoteEl = document.getElementById("quotes");
const quoteNum = document.getElementById("quote-num");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  })
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status} Advice Not Found`);
      return res.json();
    })
    .then((data) => {
      //Destructure response object
      const {
        slip: { id, advice },
      } = data;

      //Display data
      quoteEl.textContent = `"${advice}"`;
      quoteNum.textContent = `#${id}`;
    })
    .catch((err) => {
      quoteEl.textContent = err.message;
    });
}

btnEl.addEventListener("click", getAdvice);
