// 재귀

// count down 예시
function countdown(num){
    console.log(num);
    if(num <= 1){
        return;
    }else {
        countdown(num-1);
    }
}

console.log(countdown(5));


// 팩토리얼 함수 예시
function factorial(x){
    if(x === 1){
        return 1;
    }else {
        return x * factorial(x-1);
    }
}

console.log(factorial(5));