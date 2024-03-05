var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay:5000,
        disableInteraction: false,
    },
    mousewheel: true,
    keyboard: true,
  });



