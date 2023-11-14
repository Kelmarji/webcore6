var mySwiper; 

function initializeSwiper() {
  mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    loop: true, 
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function destroySwiper() {
  if (mySwiper !== undefined && mySwiper !== null) {
    mySwiper.destroy();
  }
}


if (window.innerWidth < 768) {
  initializeSwiper();
}

window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    initializeSwiper();
  } else {
    destroySwiper();
  }
});