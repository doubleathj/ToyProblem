// deepEquality
// 두 개의 객체가 주어졌을 떄, 이 두 객체가 deeply equal한지 아닌지를 return하는 함수를 작성하세요. 여기서 "deeply equal"이란, 두 객체가 같고, 각각 객체의 자식 객체의 구조가 같다는 것을 의미합니다.

// 순환객체는 고려하지 않습니다.

// 순환객체 레퍼런스 : https://riptutorial.com/javascript/example/14476/cyclic-object-values

//reference code
const deepEquals = function (apple, orange) {
  debugger;
  if (apple === orange) return true;
  if ((apple && !orange) || (!apple && orange)) return false;
  if (!(apple instanceof Object) || !(orange instanceof Object)) return false;
  const appleKeys = Object.keys(apple);
  const orangeKeys = Object.keys(orange);
  if (appleKeys.length !== orangeKeys.length) return false;
  if (appleKeys.length === 0) return true; // two empty objects are equal
  for (let i = 0; i < appleKeys.length; i++) {
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) return false;
  }
  return true;
};

deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }); // true
deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } }); // false
