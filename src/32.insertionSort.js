// insertionSort
// 삽입 정렬은 기본 정렬 알고리즘 중의 하나입니다.
// 삽입 정렬은 배열을 반복하여, 반복 중인 현재 위치 뒤에 정렬된 원소들을 위치시킵니다.

// 주어진 배열을 반복하면서, 정렬되지 않은 부분 중 첫 번째 원소를 선택합니다.
// 이 원소는 다른 배열의 원소와 비교된 후, "적절한 위치"에 넣어집니다.
// 이때 비교되는 원소들은 이미 정렬된 상태의 배열 부분의 원소입니다.
// 참고 : 삽입 정렬

// 삽입 정렬은 안정적인 정렬이어야 합니다. 이는 값이 같은 원소들도 처음에 들어왔을 때와 같은 순서를 유지해야 함을 의미합니다. 숫자와 같은 원시 타입은 그 순서를 확인할 수 없지만, 객체의 배열(array of objects)과 같은 경우 순서를 유지시켜 정렬하는지 확인할 것입니다.
// 예시:

// // 입력
// [{ value: 10 }, { value: 5, order: 1 }, { value: 5, order: 2 }][
//   // 리턴값
//   ({ value: 5, order: 1 }, { value: 5, order: 2 }, { value: 10 })
// ];
// Advanced:
// 여러분의 insertionSort가 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 통해 원소들을 정렬할 수 있도록 리팩토링하세요.
// (Array.prototype.sort 를 참고하세요.)

// comparator(a, b)가 0보다 작으면 a를 b보다 낮은 인덱스 순서에 놓습니다.
// comparator(a, b)가 0이면 a와 b의 순서를 유지합니다.
// comparator(a, b)가 0보다 크면 b를 a보다 낮은 인덱스 순서에 놓습니다.
// comparator가 주어지지 않으면 < 또는 >를 이용하여 원소들을 정렬하세요.
// 예시:

// insertionSort([{ value: 2 }, { value: 1 }, { value: 3 }], function (a, b) {
//   return a.value - b.value;
// });
// // 실행 결과 : [{value: 1}, {value: 2}, {value: 3}]

var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({ value: array[i], i: i });

  return transform;
};

var insertionSort = function (array) {
  // TODO: 코드를 여기에 작성합니다.
  let count = array.length;
  for (let i = 0; i < count; i++) {
    let value = array[i];
    for (let j = i; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
};
