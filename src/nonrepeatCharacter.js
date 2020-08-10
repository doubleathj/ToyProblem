'use strict';

// 임의의 string이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 return하는 함수를 작성하세요.

// firstNonRepeatedCharacter('ABA'); // => 'B'
// firstNonRepeatedCharacter('AACBDB'); // => 'C'

const firstNonRepeatedCharacter = function (string) {
  //split이용 각 문자로 나누고
  //반복문을 통해 i번째 값과 j번째 값이 일치하는 경우 카운팅을 한다.
  //반복되지 않는 문자열은 1로 카운팅 되기 때문에 1 나온 값을 반환한다.
  const char = string.split('');
  for (let i = 0; i < char.length; i++) {
    let count = 0;
    for (let j = 0; j < char.length; j++) {
      if (char[i] === char[j]) {
        count++;
      }
    }
    if (count === 1) {
      return char[i];
    }
  }
};
