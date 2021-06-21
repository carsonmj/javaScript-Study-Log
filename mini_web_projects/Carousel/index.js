const OBJ_ARRAY = [
    { dot : 'dot1', img : 'image-1.png' },
    { dot : 'dot2', img : 'image-2.png' },
    { dot : 'dot3', img : 'image-3.png' },
    { dot : 'dot4', img : 'image-4.png' },
    { dot : 'dot5', img : 'image-5.png' },
];

// dot 클릭 시
function onClickDot(id) {
    const selectedIdx = OBJ_ARRAY.findIndex( idx => idx.dot === id);
    showImgDot(OBJ_ARRAY[selectedIdx].dot, OBJ_ARRAY[selectedIdx].img);
}


// arrow 클릭 시
function onClickArrow(direction) {

    // 현재 이미지 파일명
    const imgSrc = document.querySelector('.showedImg').src.replace(/^.*\//, '');
    // index값
    const prevIdx = OBJ_ARRAY.findIndex( idx => idx.img === imgSrc);

    // prev, next 구분
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

// 해당 dot과 해당 img 보여주기
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

// Arrow 이벤트 리스너
function setArrowEventListener() {
    const prev = document.querySelector('.prev');
    prev.addEventListener('click', () => onClickArrow('prev'));

    const next = document.querySelector('.next');
    next.addEventListener('click', () => onClickArrow('next'));
}

// Dot 이벤트 리스너
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