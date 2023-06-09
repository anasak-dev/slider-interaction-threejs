export default function isOverlapping(el1, el2) {
  const div1 = el1.getBoundingClientRect();
  const div2 = el2.getBoundingClientRect();
  return (
    div1.right > div2.left &&
    div1.left < div2.right &&
    div1.bottom > div2.top &&
    div1.top < div2.bottom
  );
}
