// const g = (window[ENV.projectName] = window[ENV.projectName] || {});
// import Main from "./Main";
// g.main = new Main();

import Swiper from "swiper";
import { Autoplay, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay]);

function setHeroSlider() {
  const slideLength = document.querySelectorAll(
    ".js-hero-slider .swiper-slide"
  ).length;

  if (slideLength > 1) {
    const sliders = document.querySelectorAll(".js-hero-slider");
    sliders.forEach((element, index) => {
      var swiper = new Swiper(element, {
        autoplay: {
          delay: 4000,
          // disableOnInteraction: false,
        },
        speed: 600,
        // autoHeight: true,
        // slidesPerView: "auto",
        // spaceBetween: 10,
        // loop: true,
        // centeredSlides: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        // on: {
        //     //スライダー遷移時（ドキュメント内の全動画を一時停止にする）
        //     transitionStart: function(){
        //         var videos = document.querySelectorAll('swiper-slide iframe');
        //         Array.prototype.forEach.call(videos, function(video){
        //             video.pause();
        //         });
        //     },
        //     //スライダー遷移完了後（アクティブスライドの動画を再生する）
        //     transitionEnd: function(){
        //         var activeIndex = this.activeIndex;
        //         var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
        //         var activeSlideVideo = activeSlide.getElementsByTagName('swiper-slide iframe')[0];
        //         activeSlideVideo.play();
        //     },
        // }
      });
    });
  } else {
    // $(".js-hero-slider").addClass("slideNone");
  }
}

setHeroSlider();
