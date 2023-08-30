let complite = document.querySelector(".complite");
book = document.querySelector(".book");
js = document.querySelector(".js");
ice = document.querySelector(".ice");

let headerOne = 'url("./img/Screenshot_1.png")';
headerTwo = 'url("./img/Screenshot_2.png")';
headerThree = 'url("./img/Screenshot_3.png")';
headerFour = 'url("../img/Screenshot_4.png")';

let sliderFirst = [
  { img: headerOne },
  { img: headerTwo },
  { img: headerThree },
  { img: headerFour },
];

let save = sliderFirst;

headerOne = document.querySelector(".body-left-block-img");
headerTwo = document.querySelector(".body-mini-img-one");
headerThree = document.querySelector(".body-mini-img-two");
headerFour = document.querySelector(".body-mini-img-three");

function imgSaveHeader() {
  headerOne.style.backgroundImage = sliderFirst[0].img;
  headerTwo.style.backgroundImage = sliderFirst[1].img;
  headerThree.style.backgroundImage = sliderFirst[2].img;
  headerFour.style.backgroundImage = sliderFirst[3].img;
}

imgSaveHeader();

function swapElements(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

document
  .querySelector(".body-left-block")
  .addEventListener("click", (event) => {
    const target = event.target;
    console.log(save);
    console.log(target);
    if (target.classList.contains("body-left-block-img")) {
      console.log("ОДИН");
      return;
    } else if (target.classList.contains("body-mini-img-one")) {
      console.log("ДВА");

      swapElements(sliderFirst, 0, 1);
      imgSaveHeader();
      headerTwo.style.backgroundImage = sliderFirst[1].img;
    } else if (target.classList.contains("body-mini-img-two")) {
      console.log("ТРИ");

      swapElements(sliderFirst, 0, 2);
      imgSaveHeader();
    } else if (target.classList.contains("body-mini-img-three")) {
      console.log("ЧЕТЫРЕ)");

      swapElements(sliderFirst, 0, 3);
      imgSaveHeader();
    }
  });

//////////////////////////////////////////////////////////

complite.addEventListener("click", () =>
  document.querySelector(".modal-one").classList.remove("hidden")
);

book.addEventListener("click", () =>
  document.querySelector(".modal-four").classList.remove("hidden")
);

js.addEventListener("click", () =>
  document.querySelector(".modal-two").classList.remove("hidden")
);

ice.addEventListener("click", () =>
  document.querySelector(".modal-three").classList.remove("hidden")
);

document
  .querySelector(".modal-one-cross")
  .addEventListener("click", () =>
    document.querySelector(".modal-one").classList.add("hidden")
  );
document
  .querySelector(".modal-two-cross")
  .addEventListener("click", () =>
    document.querySelector(".modal-two").classList.add("hidden")
  );
document
  .querySelector(".modal-three-cross")
  .addEventListener("click", () =>
    document.querySelector(".modal-three").classList.add("hidden")
  );
document
  .querySelector(".modal-four-cross")
  .addEventListener("click", () =>
    document.querySelector(".modal-four").classList.add("hidden")
  );

document
  .querySelector(".modal-accaunt")
  .addEventListener("click", () =>
    document.querySelector(".modal-one").classList.remove("hidden")
  );

//////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

//////////////////////////////////////////////////////////

let swiperOneImg = "url(./img/car-one.jpg)";
swiperTwoImg = "url(./img/car-two.png)";
swiperThreeImg = "url(./img/car-three.jpg)";
swiperFourImg = "url(./img/car-four.jpg)";
swiperFiveImg = "url(./img/car-one.jpg)";

let swiperArr = [
  { img: swiperOneImg },
  { img: swiperTwoImg },
  { img: swiperThreeImg },
  { img: swiperFourImg },
];

swiperOneImg = document.querySelector(".swiper-car-one-img");
swiperTwoImg = document.querySelector(".swiper-car-two-img");
swiperThreeImg = document.querySelector(".swiper-car-three-img");
swiperFourImg = document.querySelector(".swiper-car-four-img");
swiperFiveImg = document.querySelector(".swiper-car-five-img");

function imgSaveSwiper() {
  swiperOneImg.style.backgroundImage = swiperArr[0].img;
  swiperTwoImg.style.backgroundImage = swiperArr[1].img;
  swiperThreeImg.style.backgroundImage = swiperArr[2].img;
  swiperFourImg.style.backgroundImage = swiperArr[3].img;
  swiperFiveImg.style.backgroundImage = swiperArr[0].img;
}
imgSaveSwiper();

function removeArrayHeaderLeft() {
  swiperArr.push(swiperArr[0]), // Добавить img1 в конец массива
    swiperArr.splice(0, 1); // Удалить один с индексом 0
  imgSaveSwiper();
}

let isSliderMoving = false;

function swiperRightMove(
  removeSlide,
  swiperOne,
  swiperTwo,
  swiperThree,
  swiperFour,
  swiperFive
) {
  if (isSliderMoving) {
    return;
  }
  isSliderMoving = true;

  swiperOne.animate([{ opacity: "0", transform: "translateX(-428px)" }], {
    duration: 300,
    iterations: 1,
  });

  swiperTwo.animate([{ transform: "translateX(-428px)" }], {
    duration: 300,
    iterations: 1,
  });
  swiperThree.animate([{ transform: "translateX(-428px)" }], {
    duration: 300,
    iterations: 1,
  });
  swiperFour.animate([{ transform: "translateX(-428px)" }], {
    duration: 300,
    iterations: 1,
  });
  swiperFive.animate([{ transform: "translateX(-428px)" }], {
    duration: 300,
    iterations: 1,
  }).onfinish = function () {
    isSliderMoving = false;
    removeSlide();
  };
}

document.querySelector(".arrow-sviper").addEventListener("click", () => {
  swiperRightMove(
    removeArrayHeaderLeft,
    swiperOneImg,
    swiperTwoImg,
    swiperThreeImg,
    swiperFourImg,
    swiperFiveImg
  );
});
//////////////////////////////////////////////////////////////

let sity = [
  { sity: "Москва" },
  { sity: "Кишинев" },
  { sity: "Геленджик" },
  { sity: "Усть - илимск" },
];

let sityOne = document.querySelector(".sity");
sityTwo = document.querySelector(".sity-one");
sityThree = document.querySelector(".sity-two");
sityFour = document.querySelector(".sity-three");

function sitySave() {
  sityOne.textContent = sity[0].sity;
  sityTwo.textContent = sity[1].sity;
  sityThree.textContent = sity[2].sity;
  sityFour.textContent = sity[3].sity;
}

sitySave();

document.querySelector(".sity-hidden").addEventListener("click", (event) => {
  console.log(event);
  let target = event.target;
  console.log(target);
  sitySave();
});

document.querySelector(".select-sity").addEventListener("mouseover", () => {
  document.querySelector(".sity-hidden").style.opacity = "1";
});

document.querySelector(".sity-hidden").addEventListener("mouseover", () => {
  document.querySelector(".sity-hidden").style.opacity = "1";
});

document.addEventListener("mousemove", (event) => {
  const menu = document.querySelector(".sity-hidden");
  const menuRect = menu.getBoundingClientRect();
  const distanceX = 150; // Расстояние в пикселях по горизонтали, при превышении которого меню будет скрываться
  const distanceY = 300; // Расстояние в пикселях по вертикали, при превышении которого меню будет скрываться

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Проверяем, находится ли курсор мыши в пределах меню
  if (
    mouseX < menuRect.left ||
    mouseX > menuRect.right - distanceX || // Изменяем условие по горизонтали
    mouseY < menuRect.top ||
    mouseY > menuRect.bottom
  ) {
    const distanceToMenu = Math.sqrt(
      Math.pow(mouseX - menuRect.left, 2) + Math.pow(mouseY - menuRect.top, 2)
    );

    // Проверяем, превышает ли расстояние от курсора до меню заданные значения
    if (distanceToMenu > distanceY) {
      menu.style.opacity = "0";
    }
  }
});

document
  .querySelector(".select-sity")
  .addEventListener("click", function (event) {
    if (event.target == 1) {
    }
  });

/////
