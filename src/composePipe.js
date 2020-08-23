// composePipe
// 합성 함수(Compose function, Pipe function)를 작성하세요.

// Step 1 : Compose function을 작성하세요:

// Compose function은 다수의 함수가 합성된 함수를 return해야 합니다. 각 함수의 return값은 다음 함수의 매개변수가 됩니다.

// Compose 함수는 매개변수들이 오른쪽에서 왼쪽으로 이동합니다.

// Compose 예시:

// let greet = function(name){ return 'hi: ' + name;}
// let exclaim = function(statement) { return statement.toUpperCase() + '!';}
// let welcome = compose(greet, exclaim);
// welcome('phillip'); // 'hi: PHILLIP!'

const compose = function () {
  const args = Array.prototype.slice.call(arguments);

  return function (value) {
    for (let i = args.length - 1; i >= 0; i--) {
      value = args[i](value);
    }
    return value;
  };
};

// Step 2 : Pipe function을 작성하세요:

// Pipe function은 Compose function과 같은 기능을 가졌지만 매개변수들이 반대방향(왼쪽에서 오른쪽)으로 이동합니다.

// Pipe 예시:

// let add2 = function (number) { return number + 2; }
// let multiplyBy3 = function (number) { return number 3; }
// pipe(add2, multiplyBy3)(5) // 21
// pipe(add2, multiplyBy3, multiplyBy3)(5) // 63

const pipe = function () {
  const args = Array.prototype.slice.call(arguments);

  return function (value) {
    for (let i = 0; i <= args.length - 1; i++) {
      value = args[i](value);
    }
    return value;
  };
};
