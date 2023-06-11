/**
 * Function to add provided random letters
 * @param {HTMLDivElement} item container html element
 */
import { countLettersToFillDiv } from "./countLettersToFillDiv.js";
import { alphabets } from "./alphabets.js";
import { config } from "./config.js";
var elementRef;
export const addRandomLetters = (item, i) => {
  const container = countLettersToFillDiv(
    item.getBoundingClientRect().width,
    item.getBoundingClientRect().height
  );
  const numOfWordsPerRow = (item.getBoundingClientRect().width / 15).toFixed();

  let words = [];
  for (let index = 0; index < container; index++) {
    const randomLetter = alphabets[(alphabets.length * Math.random()) | 0];
    const randomBold = alphabets[((alphabets.length / 4) * Math.random()) | 0];
    if (index !== 0 && index % numOfWordsPerRow == 0) {
      words.push("<br>");
    }
    if (randomLetter == randomBold) {
      words.push(`<strong>${randomLetter}</strong>`);
    } else {
      words.push(alphabets[(alphabets.length * Math.random()) | 0]);
    }
  }

  if (i && item.classList.contains("comingToit")) {
    const elementRef = item;
    if (elementRef.intervalId) {
      clearInterval(elementRef.intervalId);
    }
    elementRef.intervalId = setInterval(function () {
      if (item.classList.contains("comingToit")) {
        item.querySelector(config.elementClass).innerHTML = words.join("");
        clearInterval(elementRef.intervalId);
      } else {
        clearInterval(elementRef.intervalId);
      }
    }, 16);
  } else {
    item.querySelector(config.elementClass).innerHTML = words.join("");
  }
};
