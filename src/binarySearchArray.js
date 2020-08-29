// binarySearchArray
// 정렬된 배열이 주어졌을때, 이진 탐색 알고리즘을 이용하여 특정 요소의 인덱스값을 return하는 함수를 작성하세요.

// 예시 :

// let index = binarySearch([1, 2, 3, 4, 5], 4);
// console.log(index); // [3]

const binarySearch = function (array, target) {
  let index = 0;

  const bs = (min, max) => {
    let center = Math.floor((max + min) / 2);

    if (array[center] === target) {
      index = center;
      return;
    } else if (center === 0 || center === array.length - 1) {
      index = null;
      return;
    } else if (array[center] < target) {
      if (max - center === 1) {
        bs(max, max);
      } else {
        bs(center, max);
      }
    } else {
      if (center - min === 1) {
        bs(min, min);
      } else {
        bs(min, center);
      }
    }
  };
  bs(0, array.length - 1);
  return index;
};
