"use strict";

//  ---------------табы вкл/выкл-------------
(function () {
  var button1 = document.querySelector(".car-about__button_1");
  var button2 = document.querySelector(".car-about__button_2");
  var button3 = document.querySelector(".car-about__button_3");

  var button4 = document.querySelector(".button__init");

  var carBlock1 = document.querySelector(".car-block1");
  var carBlock2 = document.querySelector(".car-block2");
  var carBlock3 = document.querySelector(".car-block3");

  button1.addEventListener("click", function () {
    carBlock1.classList.remove("hidden");
    carBlock3.classList.add("hidden");
    carBlock2.classList.add("hidden");

    lowBlock.style.height = "900px";
  });

  button2.addEventListener("click", function () {
    carBlock2.classList.remove("hidden");
    carBlock1.classList.add("hidden");
    carBlock3.classList.add("hidden");
    lowBlock.style.height = "900px";
  });

  button3.addEventListener("click", function () {
    carBlock3.classList.remove("hidden");
    carBlock2.classList.add("hidden");
    carBlock1.classList.add("hidden");
    lowBlock.style.height = "650px";
  });

  var body = document.querySelector("body");
  button4.addEventListener("click", function () {
    popup.classList.remove("hidden");
    body.style.overflow = "hidden";
  });
})();

// ---------------убрать табы по нажатию--------

(function () {
  var carBlock = document.querySelectorAll(".car-block");

  var removeClickListener = function (onCarBlockClick) {
    onCarBlockClick.addEventListener("click", function () {
      onCarBlockClick.classList.add("hidden");
    });
  };

  for (var i = 0; i < carBlock.length; i++) {
    var onCarBlockClick = carBlock[i];

    removeClickListener(onCarBlockClick);
  }
})();

// ------------попап--------------------

(function () {
  var popup = document.querySelector(".w-modal");
  var closeButton = document.querySelector(".close");
  var lowBlock = document.querySelector(".low-block");

  closeButton.addEventListener("click", function () {
    popup.classList.add("hidden");
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popup.classList.add("hidden");
    }
  });
})();

// -------------слайдер---------------
(function () {
  var bigPicture = document.querySelector(".photo__car__main");
  var buttonPrew = document.querySelector(".button__prew");
  var buttonNext = document.querySelector(".button__next");
  var carouselItems = document.querySelectorAll(".carousel__item");

  var activeSlide = 0;

  var onClickButtonNext = function () {
    if (activeSlide < 2) {
      activeSlide++;
    }
    bigPicture.querySelector("img").src = carouselItems[
      activeSlide
    ].querySelector("img").src;
  };

  var onClickButtonPrew = function () {
    if (activeSlide > 0) {
      activeSlide--;
    }
    bigPicture.querySelector("img").src = carouselItems[
      activeSlide
    ].querySelector("img").src;
  };

  buttonNext.addEventListener("click", onClickButtonNext);
  buttonPrew.addEventListener("click", onClickButtonPrew);
})();

// ------------Добавление отзывов из формы на страницу------------------------
var popup = document.querySelector(".w-modal");
var carBlock2 = document.querySelector(".car-block2");
var lowBlock = document.querySelector(".low-block");
var templateFeedback = document.querySelector(".template__feedback").content;
var element = templateFeedback.querySelector(".template__element");
var cloneElement = element.cloneNode(true);

// ---------------dom-узлы темплейта---------------

var templateName = cloneElement.querySelector(".template__name");
var templateAdvantages = cloneElement.querySelector(".template__advantages");
var templatLimitations = cloneElement.querySelector(".template__limitations");
var templateComments = cloneElement.querySelector(".template__comments");
var templateButton = cloneElement.querySelector(".button__init");
// ---------------dom-узлы попапа---------------
var buttonFeedback = document.querySelector(".feedback-btn");
var setupUserName = popup.querySelector(".setup-user-name");
var popupAdvantages = popup.querySelector(".popup__advantages");
var popupLimitation = popup.querySelector(".popup__limitation");
var popupComments = popup.querySelector(".popup__comments");

// ----------------------------

(function () {
  var sendler = buttonFeedback.addEventListener("click", function () {
    carBlock2.appendChild(cloneElement);
    popup.classList.remove("hidden");
    templateButton.style.display = "none";
    lowBlock.style.height = "1260px";
    templateName.textContent = setupUserName.value;
    templateAdvantages.textContent = popupAdvantages.value;
    templatLimitations.textContent = popupLimitation.value;
    templateComments.textContent = popupComments.value;

    if (!setupUserName.value) {
      sendler = false;
      setupUserName.style.background = "red";
      popupComments.style.background = "red";
    }
  });
})();

// ------сохранение полей попапа в localstorage------------

(function () {
  setupUserName.value = localStorage.getItem("setupUserName");
  setupUserName.addEventListener("input", function () {
    localStorage.setItem("setupUserName", setupUserName.value);
  });

  popupAdvantages.value = localStorage.getItem("popupAdvantages");
  popupAdvantages.addEventListener("input", function () {
    localStorage.setItem("popupAdvantages", popupAdvantages.value);
  });

  popupLimitation.value = localStorage.getItem("popupLimitation");
  popupLimitation.addEventListener("input", function () {
    localStorage.setItem("popupLimitation", popupLimitation.value);
  });

  popupComments.value = localStorage.getItem("popupComments");
  popupComments.addEventListener("input", function () {
    localStorage.setItem("popupComments", popupComments.value);
  });
})();
