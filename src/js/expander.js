const expBtnText = document.getElementById("contentText");
const expText = document.querySelector(".content__text--expanded");
const expTextTitle = document.querySelector(
  ".main__content .content__text--expand p"
);

expBtnText.addEventListener("click", function () {
  expText.classList.toggle("exp-hide");
  expBtnText.classList.toggle("rotateBtn");
  if (expTextTitle.textContent === "Скрыть") {
    expTextTitle.textContent = "Читать далее ";
  } else {
    expTextTitle.textContent = "Скрыть";
  }
});

const expBtnBrends = document.getElementById("contentBrends");
const expBrendsSC = document.querySelector(".swiper-container .is-open-brends");
const expBrendsSW = document.querySelector("#id__brends");
const expBrendsTitle = document.querySelector(
  ".main__section--brends .content__text--expand p"
);

expBtnBrends.addEventListener("click", function () {
  expBrendsSC.classList.toggle("is-open-brends");
  expBrendsSW.classList.toggle("is-open-brends");
  expBtnBrends.classList.toggle("rotateBtn");
  if (expBrendsTitle.textContent === "Скрыть") {
    expBrendsTitle.textContent = "Читать далее ";
  } else {
    expBrendsTitle.textContent = "Скрыть";
  }
});

const expBtnTecnic = document.getElementById("contentTecnic");
const expTecnSC = document.querySelector(
  ".main__section--tecnic .swiper-container"
);
const expTecnSW = document.querySelector(
  ".main__section--tecnic .swiper-wrapper"
);
const expTecnTitle = document.querySelector(
  ".main__section--tecnic .content__text--expand p"
);

expBtnTecnic.addEventListener("click", function () {
  expTecnSC.classList.toggle("is-open-tecnics");
  expTecnSW.classList.toggle("is-open-tecnics");
  expBtnTecnic.classList.toggle("rotateBtn");
  if (expTecnTitle.textContent === "Скрыть") {
    expTecnTitle.textContent = "Читать далее ";
  } else {
    expTecnTitle.textContent = "Скрыть";
  }
});
