// Buttons
let genreButtonOne = document.querySelector('.genre-one');
let genreButtonTwo = document.querySelector('.genre-two');

// Slider container Elements
let sliderContainer = document.getElementsByClassName('slider-container')[0];
let overlay = document.getElementsByClassName('overlay')[0];
let leftSlider = document.getElementsByClassName('left-slider')[0];
let rightSlider = document.getElementsByClassName('right-slider')[0];

// Slider container buttons
let closeButton = document.getElementsByClassName('close-slider-container')[0];
let upButton = document.getElementsByClassName('up-button')[0];
let downButton = document.getElementsByClassName('down-button')[0];
let slideLength = rightSlider.querySelectorAll('div').length;

// Movie genre elements
let moiveGenreOne = document.getElementById('movieOne');
let movieGenreTwo = document.getElementById('movieTwo');

let sliderIndex = 0;


// Function to show movies container
const showContainer = function (element) {
    if (!element) return;
    sliderIndex = 0;
    element.classList.remove('hidden');
    overlay.classList.remove('hidden');
    let index = Number(element.getAttribute('data-index'));
    sliderContainer = document.getElementsByClassName('slider-container')[index];
    closeButton = document.getElementsByClassName('close-slider-container')[index]
    leftSlider = document.getElementsByClassName('left-slider')[index];
    rightSlider = document.getElementsByClassName('right-slider')[index];
    upButton = document.getElementsByClassName('up-button')[index];
    downButton = document.getElementsByClassName('down-button')[index];
    slideLength = rightSlider.querySelectorAll('div').length;
    closeButton.addEventListener('click', function () {
        closeContainerBox(sliderContainer);
    });
    overlay.addEventListener('click', closeContainerBox);
    upButton.addEventListener('click', function () { changeSlider('up') });
    downButton.addEventListener('click', function () { changeSlider('down') });
    leftSlider.style.top = `-${(slideLength - 1) * 70}vh`
}

// Function to close movies container
const closeContainerBox = function (element) {
    if (!element) return;
    element.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Function for Sliding right and left div elements in Slider container
// here we need last index 3 in order to match Nee dhane en ponvasntham poster to its text previously it was lunch box
// so we to go top 300 so we subtract the length with 1 and get last index multiple by 100 for vh 
const changeSlider = function (direction) {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        sliderIndex++;
        console.log(sliderIndex);
        if (sliderIndex > slideLength - 1) {
            sliderIndex = 0;
        }

    } else if (direction === 'down') {
        sliderIndex--;
        console.log(sliderIndex)
        if (sliderIndex < 0) {
            sliderIndex = slideLength - 1;
        }
    }
    rightSlider.style.transform = `translateY(-${sliderIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${sliderIndex * sliderHeight}px)`

}




// Calling function for respective movie genre button
genreButtonOne.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    showContainer(moiveGenreOne);
});
genreButtonTwo.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    showContainer(movieGenreTwo);
});
