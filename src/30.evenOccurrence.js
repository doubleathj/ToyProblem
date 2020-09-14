// evenOccurrence
// 배열이 주어졌을 때, 값이 같은 원소가 짝수 개수만큼 나오는 첫 번째 원소를 리턴하세요. 개수가 짝수인 원소들이 여러 개면, 그 중 첫 번째 원소를 리턴하세요. 개수가 짝수인 원소가 없으면, null을 리턴하세요.

// 예시:

// let onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
// console.log(onlyEven); //  4

const evenOccurrence = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((ele) => ele === arr[i]).length % 2 === 0) {
      return arr[i];
    }
  }
};
