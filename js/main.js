
var button1 = document.querySelector(".car-about__button_1");
var button2 = document.querySelector(".car-about__button_2");
var button3 = document.querySelector(".car-about__button_3");

var button4 = document.querySelector(".button__init");
var body = document.querySelector("body");
var carBlock1 = document.querySelector(".car-block1");
var carBlock2 = document.querySelector(".car-block2");
var carBlock3 = document.querySelector(".car-block3");
//  ---------------табы вкл/выкл-------------
(function () {


  button1.addEventListener("click", function () {
    carBlock1.classList.remove("hidden");
    carBlock3.classList.add("hidden");
    carBlock2.classList.add("hidden");

    lowBlock.style.height = "600px";
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

  button4.addEventListener("click", function () {
    
    popup.classList.remove("hidden");
    
    body.classList.add("disable-scroll");
  });
})();



// ------------попап закрытие--------------------

(function () {
  var popup = document.querySelector(".w-modal");
  var closeButton = document.querySelector(".close");
  var lowBlock = document.querySelector(".low-block");

  closeButton.addEventListener("click", function () {
    popup.classList.add("hidden");
    body.classList.remove("disable-scroll");
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popup.classList.add("hidden");
      body.classList.remove("disable-scroll");
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

  // ----------стрелки слайдера-------------------
  var arrowLeft = document.querySelector('.arrow-left');
  var arrowRight = document.querySelector('.arrow-right');

  var onClickButtonNext = function () {
    if (activeSlide < 2) {
      activeSlide++;
      arrowLeft.classList.add('svg-enable');
      arrowLeft.classList.remove('svg-disable');
    }
    if (activeSlide === 2) {
      arrowRight.classList.remove('svg-enable');
      arrowRight.classList.add('svg-disable');
    }
    bigPicture.querySelector("img").src = carouselItems[activeSlide].querySelector("img").src;
  };




  var onClickButtonPrew = function () {
    if (activeSlide > 0) {
      activeSlide--;
      arrowRight.classList.add('svg-enable');  //   правая стрелка яркая
      arrowRight.classList.remove('svg-disable');
    }
    if (activeSlide === 0) {
      arrowLeft.classList.remove('svg-enable');
      arrowLeft.classList.add('svg-disable');
    }
    bigPicture.querySelector("img").src = carouselItems[activeSlide].querySelector("img").src;
  };
  buttonNext.addEventListener("click", onClickButtonNext);
  buttonPrew.addEventListener("click", onClickButtonPrew);
})();

// -----------------------------------------------------------


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

// ------------звездный рейтинг--------------

var parentItems = document.querySelector('.starsFeedBack');
var starsSvg = parentItems.querySelectorAll('svg');



for (var i = 0; i < starsSvg.length; i++) {
  starsSvg[i].addEventListener('mouseenter', function (evt) {
    evt.currentTarget.classList.add('active');
   
  });
  
}

for (var i = 0; i < starsSvg.length; i++) {
  starsSvg[i].addEventListener("click", function (evt) {
    evt.currentTarget.classList.remove('active');
  });
}





// -------------------------------------------

// --------попап, localStorage, вывод на страницу---------------------
var fieldNotice = document.querySelector('.field-wrap__notice');
var commentNotice = document.querySelector('.field-wrap__notice_right');

setupUserName.value = localStorage.getItem("setupUserName"); 
  setupUserName.addEventListener("input", function () {
    localStorage.setItem("setupUserName", setupUserName.value);
  })
   
  buttonFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();    
    var body = document.querySelector("body");
    if (!setupUserName.value && !popupComments.value) {
   
      // popup.classList.add("hidden");
      fieldNotice.style.display = "block";
      commentNotice.style.display = "block";
      setupUserName.style.border = "1px solid red";
      popupComments.style.border = "1px solid red";
      // body.classList.remove("disable-scroll");
    }  
    else if (!setupUserName.value) {
     setupUserName.style.border = "1px solid red";
     fieldNotice.style.display='block';
    }
      else if (!popupComments.value) {
       popupComments.style.border = "1px solid red";
       commentNotice.style.display = "block";

    }
  else if (!popupComments.value) {
    popupComments.style.border = "1px solid red";
    commentNotice.style.display = "block";
  } 
  
  
  else {
    popupComments.style.border = "1px solid rgba(72, 73, 77, 0.2)";
    setupUserName.style.border = "1px solid rgba(72, 73, 77, 0.2)";
    fieldNotice.style.display = "none";
    commentNotice.style.display = "none";
    localStorage.setItem("setupUserName", setupUserName.value);
    localStorage.setItem("popupAdvantages", popupAdvantages.value);
    localStorage.setItem("popupLimitation", popupLimitation.value);
    localStorage.setItem("popupComments", popupComments.value);
    popup.classList.add("hidden");
    body.classList.remove("disable-scroll");
    lowBlock.style.height = "1260px";

    templateName.textContent = setupUserName.value;
    templateAdvantages.textContent = popupAdvantages.value;
    templatLimitations.textContent = popupLimitation.value;
    templateComments.textContent = popupComments.value;

    var feedBackStars = cloneElement.querySelectorAll("svg");
    var activeStars = parentItems.querySelectorAll(".star.active").length;

    if (activeStars > 0) {
      for (var i = 0; i < activeStars; i++) {
        feedBackStars[i].classList.add("active");
      }
    }

    carBlock2.appendChild(cloneElement);
  }
  }); 


  // ---------------убрать табы по нажатию--------

// (function () {
//   var carBlock = document.querySelectorAll(".car-block");

//   var removeClickListener = function (onCarBlockClick) {
//     onCarBlockClick.addEventListener("click", function () {
//       onCarBlockClick.classList.add("hidden");
      
//     });
//   };

//   for (var i = 0; i < carBlock.length; i++) {
//     var onCarBlockClick = carBlock[i];

//     removeClickListener(onCarBlockClick);
//   }
// })();


