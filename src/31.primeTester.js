// primeTester
// 숫자를 받아서 소수일 경우 true를, 소수가 아닐 경우 false를 리턴하는 함수 primeTester를 작성하세요.
// 소수는 1과 자신 이외의 자연수로는 나눌 수 없는, 1보다 큰 자연수입니다.

// Advanced:
// 두 숫자를 받아서 첫 번째 숫자보다 크고, 두 번째 숫자보다 작은 숫자들 중 모든 소수를 리턴하는 함수 primeSieve를 작성하세요.
// (참고 : 에라토스테네스의 체 https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)

// Nightmare:
// 앳킨의 체(https://en.wikipedia.org/wiki/Sieve_of_Atkin)을 사용하여 primeSieve를 작성해 보세요.

const primeTester = function (n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // 이 if문은 n이 숫자가 아니거나, 1보다 작거나, 정수가 아닌 경우를 처리합니다.
    return false;
  }
  // TODO: 코드를 여기에 작성합니다.
  if (n === 1) {
    return false;
  }

  let num = Math.sqrt(n);

  for (let i = 2; i <= num; i++) {
    if (n % 1 === 0) {
      return false;
    }
  }
  return true;
};

const primeSieve = function (start, end) {};
