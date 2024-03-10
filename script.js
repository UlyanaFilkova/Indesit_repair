let offset = 0; //смещение от левого края
let sliderN = 1; // номер страницы
const sliderLine = document.querySelector(".repair__slider-line");
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right')

arrowLeft.children[0].style.display = 'none';

document.querySelector('.arrow-left').addEventListener("click", function (event) {
    event.preventDefault();
    sliderWidth = sliderLine.offsetWidth;

    if (sliderLine.getBoundingClientRect().left < 0) {
        sliderWidth = sliderLine.offsetWidth;
        offset = offset - sliderWidth;
        sliderLine.style.left = -offset + 'px';
        sliderN--;

        arrowRight.children[0].style.display = 'block';
    }
    if (- sliderLine.getBoundingClientRect().left < sliderWidth) {
        arrowLeft.children[0].style.display = 'none';
    } else {
        arrowLeft.children[0].style.display = 'block';
    }
});

document.querySelector('.arrow-right').addEventListener("click", function (event) {
    event.preventDefault();

    if (sliderLine.getBoundingClientRect().right + sliderLine.offsetWidth > 0) {
        sliderWidth = sliderLine.offsetWidth;
        offset = offset + sliderWidth;
        sliderLine.style.left = -offset + 'px';
        sliderN++;

        arrowLeft.children[0].style.display = 'block';
    }
    if (sliderLine.getBoundingClientRect().right <= sliderWidth) {
        arrowRight.children[0].style.display = 'none';
    } else {
        arrowRight.children[0].style.display = 'block';
    }
});

window.addEventListener('resize', function () {
    sliderWidth = sliderLine.offsetWidth;
    offset = sliderWidth * (sliderN - 1);
    sliderLine.style.left = -offset + 'px';
});