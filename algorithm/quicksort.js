// 퀵 정렬
// 개념 : 분할 정복 divid-and-conquer

// ======================
// 메모리 필요한 퀵 정렬
// ======================
function quickSortM(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = [array[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSortM(left).concat(pivot, quickSortM(right));
}
const sorted = quickSortM([5, 3, 7, 1, 9]);
console.log(sorted);

// ================
// in place 방법
// ================
function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);
  function divide(array, left, right, pivot) {
    console.log(
      `array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`
    );
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
}
