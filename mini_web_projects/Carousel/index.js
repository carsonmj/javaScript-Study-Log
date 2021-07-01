const OBJ_ARRAY = [
    { dot : 'dot1', img : 'image-1.png' },
    { dot : 'dot2', img : 'image-2.png' },
    { dot : 'dot3', img : 'image-3.png' },
    { dot : 'dot4', img : 'image-4.png' },
    { dot : 'dot5', img : 'image-5.png' },
];

// Click dot
function onClickDot(id) {
    const selectedIdx = OBJ_ARRAY.findIndex( idx => idx.dot === id);
    showImgDot(OBJ_ARRAY[selectedIdx].dot, OBJ_ARRAY[selectedIdx].img);
}


// Click arrow
function onClickArrow(direction) {

    // current img file name
    const imgSrc = document.querySelector('.showedImg').src.replace(/^.*\//, '');
    // index value
    const prevIdx = OBJ_ARRAY.findIndex( idx => idx.img === imgSrc);

    // prev, next
    if(direction === 'prev'){
        if(prevIdx === 0){
            return;
        }else{
            showImgDot(OBJ_ARRAY[prevIdx-1].dot, OBJ_ARRAY[prevIdx-1].img);
        }
    }else{
        if(prevIdx === 4){
            return;
        }else{
            showImgDot(OBJ_ARRAY[prevIdx+1].dot, OBJ_ARRAY[prevIdx+1].img);
        }
    }
}

// Show the image and dot
function showImgDot(curDot, curImg) {

    const dots = document.querySelectorAll('.dot');
    dots.forEach( dot => { 
        dot.style.background = '#3e3e3e';
    });

    // image
    const image = document.querySelector('.showedImg');
    image.src = `./images/${curImg}`;

    // dot
    document.querySelector(`#${curDot}`).style.background = '#cbc7c7';
}

// Arrow Event Listener
function setArrowEventListener() {
    const prev = document.querySelector('.prev');
    prev.addEventListener('click', () => onClickArrow('prev'));

    const next = document.querySelector('.next');
    next.addEventListener('click', () => onClickArrow('next'));
}

// Dot Event Listener
function setDotEventListener() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach( dot =>{
        dot.addEventListener('click', () => {
            onClickDot(dot.id);
        })
    }) 
}

setArrowEventListener();
setDotEventListener();