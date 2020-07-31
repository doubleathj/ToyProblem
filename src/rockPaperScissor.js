"use strict";

const rockPaperScissors = function () {
  let rps = ["rock", "scissors", "paper"];
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
