// romanNumeralTranslator
// 로마 숫자가 주어졌을 때, 이 로마 숫자를 아라비아 숫자로 바꿔 출력하는 함수를 작성하세요.

// 예시:

// translateRomanNumeral("LX"); // 60
// 로마 숫자에서는 큰 수 앞에 작은 수를 놓았을 때 큰 수에서 작은 수를 뺀 값을 표시한 것으로 판단합니다. (감산 표기법) 큰 수 앞에는 작은 수가 오직 하나만 올 수 있다고 가정합니다.

// 예시:

// translateRomanNumeral("IV"); // 4
// 로마 숫자 이외의 것들이 인자로 주어졌을 때는 null을 리턴해야 합니다.

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateRomanNumeral = function (romanNumeral) {
  //to do your code

  if (typeof romanNumeral !== 'string') {
    return null;
  }
  if (romanNumeral === '') {
    return 0;
  }
  //실행 자리 수
  var total = 0;
  //문자열을 숫자의 배열로 분할
  var romanNumerals = romanNumeral.split('');
  //반복
  for (var i = 0; i < romanNumerals.length; i++) {
    //현재 및 다음 로마숫자에 대해 변수 지정
    var singleRomanNumeral = romanNumerals[i];
    var nextSingleRomanNumeral = romanNumerals[i + 1];
    //DIGIT_VALUES 객체에서 숫자 얻기
    var numberFromRomanNumeral = DIGIT_VALUES[singleRomanNumeral];
    var nextNumberFromRomanNumeral = DIGIT_VALUES[nextSingleRomanNumeral];
    //숫자가 다음 숫자보다 작거나 숫자가 없는 경우
    if (
      numberFromRomanNumeral < nextNumberFromRomanNumeral &&
      i !== romanNumerals.length - 1
    ) {
      //total 에서 숫자를 뺀다.
      total -= numberFromRomanNumeral;
    } else {
      //total에서 숫자를 더한다.
      total += numberFromRomanNumeral;
    }
  }
  return total;
};
