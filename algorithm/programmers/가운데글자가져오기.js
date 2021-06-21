function solution(s) { 
    const middle = s.length/2;
    // 짝수일 때 두글자, 홀수일 때, 한글자
    return s.length%2 === 0? s[middle-1] + s[middle] : s[Math.floor(middle)]
}