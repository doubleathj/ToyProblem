// fractionConverter
// 숫자를 매개변수로 받아서 문자열 형태의 분수로 리턴하는 함수를 작성하세요.

// Example: toFraction(0.5) === '1/2'
// 정수와 대분수들은 가분수로 바꿔서 리턴해야 합니다. (가분수 : 분자가 분모보다 크거나 같은 분수)

// Example: toFraction(3.0) === '3/1'

// Example: toFraction(2.5) === '5/2'

let toFraction = function (number) {
  function reduce(numerator, denominator) {
    let lowNum = Math.min(numerator, denominator);
    for (let i = lowNum; i > 0; i--) {
      if (i > numerator || i > denominator) {
        return [numerator, denominator];
      }
      if (numerator % i === 0 && denominator % i === 0) {
        numerator /= i;
        denominator /= i;
      }
    }
    return [numerator, denominator];
  }

  let isNegative = number < 0;
  let string = number.toString();
  let split = string.split('.');
  if (isNegative) number = number * -1;
  let denominator;
  if (split[1]) {
    denominator = Math.pow(10, split[1].length);
  } else {
    denominator = 1;
  }
  let numerator = Math.round(number * denominator);
  return (isNegative ? '-' : '') + reduce(numerator, denominator).join('/');
};
