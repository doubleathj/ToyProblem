// balancedParens
// 1단계 : 문자열이 input으로 주어졌을 때, 문자열 안의 모든 괄호의 짝이 맞는지 아닌지를 return하는 함수를 구현하세요.

// 예시:

// balancedParens('(');  // false
// balancedParens('()'); // true
// balancedParens(')(');  // false
// balancedParens('(())');  // true
// 2단계 : 모든 종류의 괄호에도 작동하도록 구현하세요.

// 예시:

// balancedParens('[](){}'); // true
// balancedParens('[({})]');   // true
// balancedParens('[(]{)}'); // false
// 3단계: 괄호가 아닌 문자는 무시하세요.

// balancedParens(' let wow  = { yo: thisIsAwesome() }'); // true
// balancedParens(' let hubble = function() { telescopes.awesome();'); // false

const balancedParens = function (input) {
  let stack = [];
  let parens = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      stack.push(input[i]);
    } else if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
      let recent = stack.pop();

      if (input[i] !== parens[recent]) {
        console.log('input i?', input[i]);
        console.log('recent parens?', parens[recent]);
        return false;
      }
    }
  }
  console.log('stack???', stack);
  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
};
