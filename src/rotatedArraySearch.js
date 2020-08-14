'use strict';

// rotatedArraySearch
// 정렬되어 있는 배열 중 일부를 왼쪽 혹은 오른쪽으로 회전시킨 배열이 주어졌을때, 어떻게 특정 element를 효율적으로 찾을 수 있을까요?

// 작성한 함수는 target의 index값을 return하고, 없으면 null을 return해야 합니다.

// 예시 :
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null

// 시간 복잡도가 O(log(array.length))이 되도록 도전해 보세요!

//first code
const rotatedArraySearch = function (rotated, target) {
  // 반복 검사 후 인덱스를 반환
  // 값이 없으면 null 값 반환
  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] === target) {
      return i;
    }
  }
  if (!rotated.includes(target)) {
    return null;
  }
};

//reference code
let rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  // Just a straight binary search.
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    // We have found our target.
    if (rotated[middle] === target) {
      return middle;
    }

    // The clever part starts here:
    if (rotated[left] <= rotated[middle]) {
      // If the middle element is greater than the element to the left
      // of it, then that means that the bottom half is strictly increasing
      // from left to middle, i.e. it is sorted and we can just do a normal
      // binary search.

      // Is the target in this range?
      if (rotated[left] <= target && target < rotated[middle]) {
        // 'recurse' down this side
        right = middle - 1;
      } else {
        // 'recurse' down the other side
        left = middle + 1;
      }
    } else {
      // This means that the *top* half must be sorted, because
      // there can only be one place in the entire array where
      // the order is not sorted, and it's on the bottom half.

      if (rotated[middle] < target && target <= rotated[right]) {
        // 'recurse' down this side
        left = middle + 1;
      } else {
        // 'recurse' down the other side
        right = middle - 1;
      }
    }
  }

  // If we got here, that means that the target is not in the array, so:
  return null;
};
