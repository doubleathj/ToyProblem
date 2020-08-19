// largestProductOfThree
// 배열이 주어졌을 때, 이 중 3개의 숫자를 곱하여 나올 수 있는 최대값을 return하는 함수를 작성하세요.

// largestProductOfThree([2, 1, 3, 7]) === 42
// Advanced : 음수가 포함되었을때, 작동할 수 있도록 작성하세요.

const largestProductOfThree = (array) => {
  const sorted = array.sort((a, b) => {
    return b - a;
  });
  let result = 1;
  //if(sorted가 비어있을때)
  //sorted를 반복해서 세개의 element 를 곱한다.
  for (let i = 0; i < 3; i++) {
    if (sorted[i] < 0) {
      //곱한 값이 음수이면 절대값을 결과에 곱한다.
      //Math.abs() === 절대값으로 반환한다.
      result = result * Math.abs(sorted[i]);
    } else {
      //곱한 값이 양수일 때는 그냥 곱한다.
      result = result * sorted[i];
    }
  }
  return result;
};
