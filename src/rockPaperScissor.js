'use strict';
// rockPaperScissors
// Basic
// 세 판의 가위바위보를 할 동안 낼 수 있는 모든 경우의 수를 return하는 함수를 작성하세요.
// 결과는 다음과 같을 것입니다.
//   [
//     ["rock", "rock", "rock"],
//     ["rock", "rock", "paper"],
//     ["rock", "rock", "scissors"],
//     ["rock", "paper", "rock"],
//     // ...etc ...
//   ]

// Advanced: 변수로 전달하는 판수에 맞는 정답을 return 하도록 작성한 함수를 바꿔 보세요.
// rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]

const rockPaperScissors = function () {
  let rps = ['rock', 'scissors', 'paper'];
  let result = [];

  for (let i = 0; i < rps.length; i++) {
    for (let j = 0; j < rps.length; j++) {
      for (let k = 0; k < rps.length; k++) {
        result.push([rps[i], rps[j], rps[k]]);
      }
    }
  }
  return result;
};

// Advanced: 변수로 전달하는 판수에 맞는 정답을 return 하도록 작성한 함수를 바꿔 보세요.
// rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]

const rockPaperScissors = function (rounds) {
  rounds = rounds || 3;
  var outcomes = [];

  var plays = ['rock', 'paper', 'scissors'];

  var combos = function (roundsToGo, playedSoFar) {
    if (roundsToGo === 0) {
      outcomes.push(playedSoFar);
      return;
    }

    for (var i = 0; i < plays.length; i++) {
      var currentPlay = plays[i];
      combos(roundsToGo - 1, playedSoFar.concat(currentPlay));
    }
  };
  combos(rounds, []);

  return outcomes;
};
