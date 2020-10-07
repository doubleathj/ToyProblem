// treeMap
// Tree 클래스 객체의 map 메소드를 구현하세요.

// map 메소드는 매핑 함수를 인자로 받은 다음, Tree 객체를 반복하여
// 각 노드의 value가 매핑 함수에 전달된 결과를 value로 하는 새 Tree를 생성합니다.

// 즉, map은 기존 Tree와 같은 구조, 다른 값을 가진 Tree를 반환해야 합니다. (이 과정에서 기존 Tree를 수정하면 안 됩니다!)

// 예시:

// let root1 = new Tree(1);
// let branch2 = root1.addChild(2);
// let branch3 = root1.addChild(3);
// let leaf4 = branch2.addChild(4);
// let leaf5 = branch2.addChild(5);
// let leaf6 = branch3.addChild(6);
// let leaf7 = branch3.addChild(7);
// let newTree = root1.map(function (value) {
//   return value * 2;
// });
// newTree.value; // 2
// newTree.children[0].value; // 4
// newTree.children[1].value; // 6
// newTree.children[0].children[1].value; // 10
// newTree.children[1].children[1].value; // 14
// root1.value; // 여전히 1
// Advanced: mapInPlace 메소드도 구현해 보세요.

// mapInPlace는 map과 달리 새로운 Tree를 반환하지 않고 기존 Tree를 변경합니다.

// 어떤 경우에 map 대신 mapInPlace를 사용하는 것이 좋을까요?

const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  // TODO: 코드를 여기에 작성합니다.
  let NewTree = new Tree(callback(this.value));
  for (let i = 0; i < this.children.length; i++) {
    NewTree.addChild(this.children[i].map(callback));
  }
  return NewTree;
};

Tree.prototype.mapInPlace = function (callback) {
  // TODO: 코드를 여기에 작성합니다.
  this.value = callback(this.value);
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].mapInPlace(callback);
  }
};

/**
 * 이 밑의 코드들을 수정할 필요는 없습니다. 그러나 마음껏 참고하셔도 됩니다!
 */

/**
 * child를 추가합니다.
 * (Tree가 아닌 값이 들어올 경우, Tree 객체로 변환 후 추가합니다)
 */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // 편의를 위해 추가된 child node를 return합니다.
  return child;
};

/**
 * 주어진 tree가 이미 해당 tree 혹은 sub tree의 child인지 확인합니다.
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child`는 해당 트리와 연결된 하위 노드를 의미합니다.
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

/**
 * child를 삭제합니다.
 */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // child를 삭제합니다.
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
