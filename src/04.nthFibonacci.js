// nthFibonacci
// 피보나치 수는 첫째 및 둘째 항이 1입니다. 그 뒤의 모든 항은 바로 앞 두 항의 합인 수의 나열입니다.

// 다음과 같은 규칙을 가집니다.

//   1 1 2 3 ...
// 재귀를 이용하여 피보나치 수열의 n번째 항을 return하는 함수를 작성하세요.

// n이 4로 주어진다면, 작성한 함수는 3을 return해야 하고 5가 주어진다면 5를 return 해야 합니다.

// ex)

// nthFibonacci(2); // => 1
// nthFibonacci(3); // => 2
// nthFibonacci(4); // => 3

//재귀방법

const nthFibonacci = function (n) {
  if (n < 2) return n;
  return nthFibonacci(n - 2) + nthFibonacci(n - 1);
};

// Advanced : 재귀를 사용하지 않고 iterative하게 함수를 작성하세요. 참고 : https://techdifferences.com/difference-between-recursion-and-iteration-2.html

// for 문 해결
const nthFibonacci = function (n) {
  // TODO: implement me!
  if (n <= 1) return n;
  let sum = 0,
    last = 1,
    lastlast = 0;

  for (let i = 1; i < n; i++) {
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  return sum;
};

// 재귀 해결
function getNthFibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFibo(n - 1) + getNthFibo(n - 2);
  }
}
