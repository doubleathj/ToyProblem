'use strict';

// commonCharacters
// 두 개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를 순서대로 return하는 함수를 작성하세요. (공백, 중복 제외)

// commonCharacters('acexivou', 'aegihobu') //결과 : 'aeiou'

// Advanced : 두 개 이상의 문자열을 받을 수 있도록 기능을 확장하세요.

const commonCharacters = function (string1, string2) {
  let result = ''; //결과를 문자열로 반환

  let str1 = string1.split(''); //문자열을 각 문자로 끊어서 반복문으로 검사
  let str2 = string2.split('');

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        result = result + str1[i];
      }
    }
  }
  return result; //일치하는 것 result 에 넣어서 반환
};

console.log(commonCharacters('acexivou', 'aegihobu'));
