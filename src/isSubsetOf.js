//isSubsetOf
// 특정 배열이 매개변수로 전달되는 배열의 부분집합인지를 판단하는 메소드를 만드세요. 비교 대상인 두 배열 모두 문자열로 이루어졌다고 가정합니다.

//let a = ['commit','push']
// a.isSubsetOf(['commit','rebase','push','blame']) // true

// 참고 : 배열 내의 중복값은 무시하세요.

// let b = ['merge','reset','reset']
// b.isSubsetOf(['reset','merge','add','commit']) // true
// 부분집합(subset)의 정의에 대한 자세한 정보는 여기를 참고하세요.

Array.prototype.isSubsetOf = function (array) {
  for (let i = 0; i < this.length; i++)
    if (!array.includes(this[i])) {
      return false;
    }
  return true;
};

// Advanced : 메소드가 문자열 이외의 자료형을 포함한 배열에도 작동하도록 개선해 보세요.

Array.prototype.isSubsetOf = function (array) {
  // Your code here
  /* START SOLUTION */

  var arrayContains = function (array, item) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) return true;
    }
    return false;
  };

  for (var i = 0; i < this.length; i++) {
    if (!arrayContains(array, this[i])) return false;
  }
  return true;
  /* END SOLUTION */
};

let a = ['commit', 'push'];
a.isSubsetOf(['commit', 'rebase', 'push', 'blame']);

let b = ['merge', 'reset', 'reset'];
b.isSubsetOf(['reset', 'merge', 'add', 'commit']);
