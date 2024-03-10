let offset = 0; //смещение от левого края
const sliderLine = document.querySelector(".repair__slider-line");
const sliderWindow = document.querySelector(".repair__slider-window");
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right')

arrowLeft.children[0].style.display = 'none';
console.log("Left line: " + sliderLine.getBoundingClientRect().left);
console.log("Left window: " + sliderLine.children[0].getBoundingClientRect().left);
console.log("Right line: " + sliderLine.getBoundingClientRect().right);
console.log("Right window: " + sliderLine.children[0].getBoundingClientRect().right);

document.querySelector('.arrow-left').addEventListener("click", function (event) {
    event.preventDefault();
    sliderWidth = sliderLine.offsetWidth;

    console.log("Left line: " + sliderLine.getBoundingClientRect().left);
    console.log("Left window: " + sliderLine.children[0].getBoundingClientRect().left);
    console.log("Right line: " + sliderLine.getBoundingClientRect().right);
    console.log("Right window: " + sliderLine.children[0].getBoundingClientRect().right);
    console.log("width: " + sliderLine.offsetWidth);

    // if (sliderLine.getBoundingClientRect().left - sliderLine.offsetWidth < 0) {
    //     sliderWidth = sliderLine.offsetWidth;
    //     offset = offset - sliderWidth;
    //     sliderLine.style.left = -offset + 'px';

    //     arrowRight.children[0].style.display = 'block';
    // }

    if (sliderLine.getBoundingClientRect().left < 0) {
        sliderWidth = sliderLine.offsetWidth;
        offset = offset - sliderWidth;
        sliderLine.style.left = -offset + 'px';

        arrowRight.children[0].style.display = 'block';
    }
    if (- sliderLine.getBoundingClientRect().left < sliderWidth) {
        arrowLeft.children[0].style.display = 'none';
    } else {
        arrowLeft.children[0].style.display = 'block';
    }
    // // else if (sliderLine.getBoundingClientRect().right + sliderLine.offsetWidth < 30) {
    // //     arrowRight.children[0].style.display = 'none';
    // // } 
    // else if (sliderLine.getBoundingClientRect().right <= sliderWindow.getBoundingClientRect().left + 20) {
    //     arrowRight.children[0].style.display = 'none';
    // }
    // else {
    //     arrowRight.children[0].style.display = 'block';
    // }

    // if (sliderLine.getBoundingClientRect().left >= sliderWindow.getBoundingClientRect().left - 20) {
    //     arrowLeft.children[0].style.display = 'none';
    // }


});

document.querySelector('.arrow-right').addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Left line: " + sliderLine.getBoundingClientRect().left);
    console.log("Left window: " + sliderLine.children[0].getBoundingClientRect().left);
    console.log("Right line: " + sliderLine.getBoundingClientRect().right);
    console.log("Right window: " + sliderLine.children[0].getBoundingClientRect().right);
    console.log("width: " + sliderLine.offsetWidth);

    if (sliderLine.getBoundingClientRect().right + sliderLine.offsetWidth > 0) {
        sliderWidth = sliderLine.offsetWidth;
        offset = offset + sliderWidth;
        sliderLine.style.left = -offset + 'px';

        arrowLeft.children[0].style.display = 'block';
    }
    if (sliderLine.getBoundingClientRect().right <= sliderWidth) {
        arrowRight.children[0].style.display = 'none';
    } else {
        arrowRight.children[0].style.display = 'block';
    }

    // else if (sliderLine.getBoundingClientRect().left >= sliderWindow.getBoundingClientRect().left - 20) {
    //     arrowLeft.children[0].style.display = 'none';
    // } else {
    //     arrowLeft.children[0].style.display = 'block';
    // }
    // if (sliderLine.getBoundingClientRect().right <= sliderWindow.getBoundingClientRect().left + 20) {
    //     arrowRight.children[0].style.display = 'none';
    // }

});



// document.querySelector('.arrow-left').addEventListener("click", function (event) {
//     event.preventDefault();
//     sliderWidth = sliderLine.offsetWidth;

//     console.log("Left: " + sliderLine.getBoundingClientRect().left);
//     console.log("Right: " + sliderLine.getBoundingClientRect().right);

//     if (sliderLine.getBoundingClientRect().left < -30) {
//         sliderWidth = sliderLine.offsetWidth;
//         offset = offset - sliderWidth;
//         sliderLine.style.left = -offset + 'px';

//         arrowRight.children[0].style.display = 'block';
//     }
//     // else if (sliderLine.getBoundingClientRect().right + sliderLine.offsetWidth < 30) {
//     //     arrowRight.children[0].style.display = 'none';
//     // }
//     else if (sliderLine.getBoundingClientRect().right <= 20) {
//         arrowRight.children[0].style.display = 'none';
//     }
//     else {
//         arrowRight.children[0].style.display = 'block';
//     }

//     if (sliderLine.getBoundingClientRect().left >= -20) {
//         arrowLeft.children[0].style.display = 'none';
//     }
//     console.log("cur Left: " + sliderLine.getBoundingClientRect().left);
//     console.log("cur Right: " + sliderLine.getBoundingClientRect().right);


// });

// document.querySelector('.arrow-right').addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("Left: " + sliderLine.getBoundingClientRect().left);
//     console.log("Right: " + sliderLine.getBoundingClientRect().right);

//     if (sliderLine.getBoundingClientRect().right + sliderLine.offsetWidth > 30) {
//         sliderWidth = sliderLine.offsetWidth;
//         offset = offset + sliderWidth;
//         sliderLine.style.left = -offset + 'px';

//         arrowLeft.children[0].style.display = 'block';
//     }
//     else if (sliderLine.getBoundingClientRect().left >= 20) {
//         arrowLeft.children[0].style.display = 'none';
//     } else {
//         arrowLeft.children[0].style.display = 'block';
//     }
//     if (sliderLine.getBoundingClientRect().right <= 20) {
//         arrowRight.children[0].style.display = 'none';
//     }
//     console.log("cur Left: " + sliderLine.getBoundingClientRect().left);
//     console.log("cur Right: " + sliderLine.getBoundingClientRect().right);

// });

