function solution(n) {
    const STR = '수박';
    
    if(n === 1) return '수';
    else if(n === 2) return STR;
    else{
        const middle = n/2;
        return n%2 === 0? STR.repeat(middle) : STR.repeat(Math.floor(middle))+'수';
    }
}