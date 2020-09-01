// rangeClass
// Range Class를 만드세요. Range Class가 받는 매개변수는 순서대로 다음과 같습니다.

// 시작 인덱스
// 마지막 인덱스 (optional)
// 마지막 인덱스가 주어지지 않으면 range는 시작 값만 가지게 됩니다.
// 인덱스 간 간격 (step, optional)
// range는 다음과 같은 유틸리티 메소드를 지닙니다.

// size() : range 내의 요소의 갯수를 return합니다.
// each(callback(index)) : range를 순회하며 각 요소를 콜백 함수에 넣어 실행합니다.
// includes(index) : 해당 인덱스 값이 포함되어 있는지를 return합니다.
// 참고 :

// 간격이 음수일 때에는 요소들의 크기가 작아지도록 작동해야 합니다.
// 간격이 주어지지 않을 경우 기본값은 1입니다.
// 시작 인덱스가 마지막 인덱스보다 클 경우, 요소들의 크기가 작아진다고 가정합니다.
// 시작 인덱스가 없을 경우 null을 return합니다.
// range는 일정한 공간을 사용해야 합니다. 즉, range의 저장 공간이 크기에 따라 변하지 않습니다. 예를 들어, each 메소드를 사용하는 경우에도 배열을 백업 저장소로 사용하면 안 됩니다. 주어진 range의 크기는 매우 길어질 수 있으므로, 각 요소를 저장하지 않고 표현할 방법을 찾아야 합니다.

// 사용 예시 :

// let myRange = new Range(0, 10); // 0과 10 사이의 새로운 range를 의미합니다.

// let evenNumbers = new Range(2, 8, 2); // evenNumbers라는 range가 포함하는 값은 2, 4, 6, 8 입니다.
// evenNumbers.each(function(val){
//   console.log(val+"!");
// });
// console.log("Who do we appreciate!?");

// evenNumbers.size() // 4
// evenNubmers.includes(2) // true
// evenNumbers.includes(3) // false

let Range = function (start, end, step) {
  if (start === undefined) {
    return null;
  }

  this.start = start;

  if (end === undefined) {
    this.end = this.start;
  } else {
    this.end = end;
  }

  if (step === undefined) {
    this.step = this.start < this.end ? 1 : -1;
  } else {
    this.step = step;
  }

  return this;
};

Range.prototype.size = function () {
  return Math.floor((this.end - this.start) / this.step) + 1;
};

Range.prototype.each = function (callback) {
  if (this.step > 0) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    for (var i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  return (
    val >= this.start && val <= this.end && (this.start - val) % this.step == 0
  );
};
