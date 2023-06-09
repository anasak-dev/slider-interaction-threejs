import { config } from "./utils/random_characters/config.js";
import { addRandomLetters } from "./utils/random_characters/addRandomLetters.js";
import slider from "./utils/slider.js";
import bubbles from "./utils/three_canvas/bubbles.js";
import particles from "./utils/three_canvas/particles.js";
import isOverlapping from "./utils/isOverlapping.js";

window.onload = () => {
  // slider initialization
  slider();
  // particles initialization
  particles();
  // bubbles initiliaztion (visible when slides hit)
  bubbles();

  // generate random letters initially for each element
  document.querySelectorAll(config.elementWrapperClass).forEach((item) => {
    addRandomLetters(item);
  });
  // generate random letters initially for each element

  // observe elements on data-active attribute change to active

  const dividerDiv = document.querySelector(".line");
  // intersection

  const box1Bounds = document.querySelectorAll(
    ".slider-encrypted .slick-list .slick-track .slick-slide"
  );
  const boxArray = Array.from(box1Bounds);
  //

  const div = document.querySelector(".slider-encrypted .slick-track");

  // Create a new MutationObserver
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.attributeName === "style") {
        const styles = div.style.transform.split(" ");
      }
    }
  });

  //   // Start observing changes to the div's attributes
  observer.observe(div, { attributes: true });

  const addClassToDivider = (i, d) => {};
  const removeClassFromDivider = (i, d) => {
    dividerDiv.classList.remove("active");
  };

  const tick = () => {
    requestAnimationFrame(tick);

    box1Bounds.forEach((item) => {
      const detect = isOverlapping(dividerDiv, item);
      if (detect) {
        item.classList.add("comingToit");
        item.setAttribute("data-active", "active");
        addClassToDivider(item.classList.contains("comingToit"), detect);
        return;
      } else {
        item.setAttribute("data-active", false);

        item.classList.remove("comingToit");
        document.body.classList.remove("glow");
        removeClassFromDivider(item.classList.contains("comingToit"), detect);
      }
    });
    const filtered = boxArray.filter((item) =>
      item.classList.contains("comingToit")
    );
    if (filtered.length > 0) {
      dividerDiv.classList.add("active");
    } else {
      dividerDiv.classList.remove("active");
    }
  };

  tick();

  const encrpytionObserver = (mutList) => {
    mutList.forEach((mute) => {
      const elementRef = mute.target;
      if (mute.target.classList.contains("comingToit")) {
        addRandomLetters(mute.target, "class");
      } else {
        clearInterval(elementRef.intervalId);
      }
    });
  };
  const mutationObserver = new MutationObserver(encrpytionObserver);
  const allslides = document.querySelectorAll(
    `${config.elementWrapperClass}.slick-slide`
  );
  allslides.forEach((item) => {
    mutationObserver.observe(item, {
      attributes: true,
    });
  });
};
