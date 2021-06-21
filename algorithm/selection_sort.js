// 선택 정렬
// 배열을 작은 정수에서 큰 정수로 정렬하기

// 가장 작은 정수 찾기
function findSmallest(arr){
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

// 선택 정렬
function selectionSort(arr){
    newArr = [];
    while(arr.length != 0){
        let smallest = findSmallest(arr);
        newArr.push(arr[smallest]);
        arr.splice(smallest, 1);
    }
    return newArr;
}


console.log('result => ', selectionSort([5, 3, 6, 2, 10]));