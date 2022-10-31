const sliderContainer = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = rightSlider.querySelectorAll('div').length;

let sliderIndex = 0;

// here we need last index 3 in order to match Nee dhane en ponvasntham poster to its text previously it was lunch box
// so we to go top 300 so we subtract the length with 1 and get last index multiple by 100 for vh 
leftSlider.style.top = `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', function () { changeSlider('up') });
downButton.addEventListener('click', function () { changeSlider('down') });

const changeSlider = function (direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        sliderIndex++;
        if (sliderIndex > slideLength - 1) {
            sliderIndex = 0;
        }

    } else if (direction === 'down') {
        sliderIndex--;
        if (sliderIndex < 0) {
            sliderIndex = slideLength - 1;
        }
    }
    rightSlider.style.transform = `translateY(-${sliderIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${sliderIndex * sliderHeight}px)`

}