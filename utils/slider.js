import { gsap } from "gsap";
const github = document.querySelector(".github");
export default function () {
  //   animations
  gsap.to(github, { y: 0, delay: 4, duration: 1 });
  gsap.to(document.querySelector(".line"), {
    scale: 1,
    duration: 1.2,
  });

  //   animations

  $(".slider-decrypted").slick({
    speed: 15000,
    autoplay: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    rtl: true,
    buttons: false,
  });
  $(".slider-encrypted").slick({
    speed: 15000,
    autoplay: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    rtl: true,
    buttons: false,
  });
  $(".slider-decrypted").slick("slickPause");
  $(".slider-encrypted").slick("slickPause");
  setTimeout(() => {
    $(".slider-decrypted").css("opacity", 1);
    $(".slider-encrypted").css("opacity", 1);

    $(".slider-encrypted").removeClass("initialTransform");
    $(".slider-encrypted").slick("slickPlay");
    $(".slider-decrypted").slick("slickPlay");
  }, 2000);
}
