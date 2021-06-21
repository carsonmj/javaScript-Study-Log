// 이진 탐색
// parameter : 정렬된 배열, 아이템
// result : 아이템이 배열안에 있으면 배열에서의 아이템 위치를 반환

function binary_search(list, item){
    let low = 0;
    let high = list.length-1;

    while(low <= high){
        mid = (low + high) / 2;
        let guess = list[mid];

        if(guess == item){
            return mid;
        }
        else if(guess > item){ //추측한 숫자가 클 때
            high = mid -1
        }else{ //추측한 숫자가 작을 때
            low = mid + 1
        }
    }

    // 아이템이 리스트에 없을 때
    return -1;
}

console.log(binary_search([1,2,3,4,5], 7));