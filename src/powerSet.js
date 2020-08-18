'use strict';

// powerSet
// 주어진 문자열의 'power set'으로 이루어진 배열을 return하는 함수를 작성하세요.

// power set이란? 비어있는 집합을 포함한 모든 부분집합(subset)의 모음.

// 예시:

// powerSet("abc")
// [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
// 모든 부분집합의 문자들은 알파벳 순서로 정렬되어야 합니다.
// 같은 문자로 이루어진 부분집합은 순서와 무관하게 하나로 인식합니다. ('ab'와 'ba'는 같습니다.)
// 예시2 :

// powerSet("jump")
// ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu",  "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]

참고: const powerSet = function (str) {
  //멱집합 모든 경우의 수를 반환 2^n
  //재귀적 방법
  // 1. 주어진 str을 각각 하나의 알파벳으로 쪼개놓는다.(대신 중복된 값은 제거해준다)
  // 2. 순서에 상관없이, 같은 알파벳의 조합은 같은 경우로 취급한다.

  let temp = new Set();
  for (let i = 0; i < str.length; i++) {
    temp.add(str[i]);
  }
  let newStr = [...temp].join('');
  // 반복문을 돌되, 반복문의 반복이 될 수록, 뒷쪽의 알파벳을 더하고, 뒤에 남은 것들만 다뤄야 한다.
  // 돌 때 마다 시작점이 이동해야 한다.

  let result = [];
  //push할 string과 반복문 도는 시작점i를 같이 이동하면
  //recursion할 때 마다 주어진 str 기준으로 한 칸씩 이동하며 조합을 하게 된다
  function recursion(string, begin) {
    result.push(string);
    for (let i = begin; i < newStr.length; i++) {
      recursion(string + newStr[i], i + 1);
    }
  }

  recursion('', 0);
  return result;
};
