//hex color code generator
function generateHexCode() {
    const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];
    let hexCode = '#';

    for(let i = 0; i < 6; i++){
        hexCode += randomItem(letters);
    }
    return hexCode;
}

//get random item in array
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//update hex color code on HTML
function onButtonClick() {
    changeHexCode();
}

function changeText(hexCode) {
    document.querySelector('.hexCode').innerHTML = hexCode;
}

//change background color
function changeBackground(hexCode) {
    document.querySelector('body').style.backgroundColor = hexCode;
}

//set click event listener
function setEventListener() {
    const button = document.querySelector('.button');
    button.addEventListener('click', () => onButtonClick());
}

function changeHexCode() {
    const hexCode = generateHexCode();
    changeText(hexCode);
    changeBackground(hexCode);
}

changeHexCode();
setEventListener();