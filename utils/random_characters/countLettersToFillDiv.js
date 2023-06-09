/**
 * Count letters needed to fill a div
 * @param {Number} divWidth width of container which needs to be filled
 * @param {Number} divHeight height of container which needs to be filled
 */

export function countLettersToFillDiv(divWidth, divHeight) {
  const letterWidth = 2; // Assuming each letter occupies 2 pixels of width
  const letterHeight = 20; // Assuming each letter occupies 20 pixels of height

  const lettersPerRow = Math.floor(divWidth / letterWidth);
  const rows = Math.floor(divHeight / letterHeight);

  const totalLetters = lettersPerRow * rows;
  return totalLetters;
}
