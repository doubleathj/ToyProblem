// longestRun
// 문자열을 받아, 그 안에서 같은 문자들이 반복되는 가장 긴 값을 찾고 그 중 첫 번째와 마지막 번째 문자의 인덱스 번호가 담긴 배열을 리턴하세요. 만약 똑같은 길이를 가진 2개의 값이 있다면, 첫 번째 값으로 리턴하세요.

// 예시:

// longestRun("abbbcc") // [1, 3]
// longestRun("aabbc")  // [0, 1]
// longestRun("abcd")   // [0, 0]
// 큰 값을 효율적으로 처리할 수 있는지 확인하기 위해, 충분히 긴 무작위 문자열으로 함수를 테스트해 보세요.

const longestRun = function (string) {
  let result = [0, 0];
  let temp = [0, 0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      if (temp[1] - temp[0] > result[1] - result[0]) {
        result = temp;
      }
      temp = [i, i];
    } else {
      temp[1] = i;
    }
  }
  return result;
};

// 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
// (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
