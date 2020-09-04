// rotateMatrix
// NxN 매트릭스를 90도로 회전시키는 함수를 작성하세요.

// 매트릭스는 2차원 배열(배열의 배열)로 표현됩니다.

// 1x1 매트릭스 예시:
//   [ [1] ]

// 2x2 매트릭스 예시:
// [ [1,2],
//   [3,4] ]
// 참고: 수학, 그리고 컴퓨터 과학에서 행렬은 "행"을 뜻하는 m과 "열"을 뜻하는 n의 곱으로 설명됩니다. 따라서 행렬의 i 주소는 "세로축에서 i만큼 아래에 있고 가로축에서 j만큼 옆에 있다." 를 뜻합니다. 이 방식은 일반적으로 배열이 코드에서 처리되는 방식과 일치하지만, 기하학이나 컴퓨터 그래픽에서는 (x, y) 형식의 좌표가 "가로축에서 x만큼 옆에 있고 세로축에서 y만큼 아래에 있다"를 뜻합니다.

// 4x4 매트릭스 회전의 예시:

// const matrix = [
// [1,2,3,4],
// [5,6,7,8],
// [9,'A','B','C'],
// ['D','E','F','G']
// ];
// matrix[0][0]; // 1
// matrix[3][2]; // 'F'

// const rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
// // rotatedMatrix is:
// [ ['D',9,5,1],
// ['E','A',6,2],
// ['F','B',7,3],
// ['G','C',8,4]
// ]
// rotatedMatrix[0][0]; // 'D'
// rotatedMatrix[3][2]; // 8
// 추가 과제:

// 이 함수가 직사각형 매트릭스에서도 작동하도록 구현하세요. (NxN이 아닌 MxN)
// // 이 함수가 두 번째 전달인자로 회전의 방향을 달리할 수 있도록 구현하세요. (1 = 시계 방향, -1 = 반시계 방향)

const rotateMatrix = function (matrix, direction) {
  // Your code here.

  direction = direction || 1;
  var m = matrix.length,
    n = matrix[0] && matrix[0].length;
  var output = [];
  // We iterate with i,j in output order to transparently support rectangular arrays
  for (var i = 0; i < n; i++) {
    output[i] = [];
    for (var j = 0; j < m; j++) {
      if (direction > 0) {
        // rotate clockwise
        output[i][j] = matrix[m - j - 1][i];
      } else if (direction < 0) {
        // rotate counterclockwise
        output[i][j] = matrix[j][n - i - 1];
      }
    }
  }
  return output;
};
