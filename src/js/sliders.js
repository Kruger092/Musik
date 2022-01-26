import Swiper, {Navigation, Autoplay} from 'swiper';

Swiper.use([Navigation, Autoplay]);

const swiperTestimonials = new Swiper(".testimonials-swiper-js", {
  slidesPerView: 1,
  initialSlide: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 2,
  autoplay: {
    delay: 7000,
  }
});

const swiperCategory = new Swiper(".category-swiper-js", {
  slidesPerView: 1,
  initialSlide: 2,
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 5
});

const bestShotsswiper = new Swiper(".best-shots-swiper-js", {
  slidesPerView: 1,
  initialSlide: 2,
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },  
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});