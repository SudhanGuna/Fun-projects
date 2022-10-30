const loadText = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');
let titleText = document.querySelector('.intro-text')

let load = 0;
let opacity = 100;
let brightValue = 0;
let int = setInterval(text, 60)
let dim = setInterval(dimming, 30)

function text() {
    load++;
    if (load > 23) {
        clearInterval(int)
        //titleText.style.opacity = `1`;
    }
    loadText.innerHTML = `${load}fps`
}

function dimming() {
    brightValue++;
    opacity--;
    if (opacity < 1 && brightValue > 99) {
        clearInterval(dim);
    }
    loadText.style.opacity = `${opacity}%`;
    bg.style.filter = `brightness(${brightValue}%)`

}
