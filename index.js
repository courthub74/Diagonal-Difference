//Diagonal Difference

//Below is the Matrix

let matrix = [[2, 3, 4], [5, 3, -1], [9, 8, -2]];

function calculateDiagonals(matrix) {
  var n = matrix.length;
  var diag1 = 0;
  var diag2 = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // main Diagonal
      if (i === j) {
        diag1 += matrix[i][j];
      }
      // second Diagonal
      if (i + j === n - 1) {
        diag2 += matrix[i][j];
      }
    }
  }
  //return the difference
  // return diag1 - diag2;
  //make it absolute
  return Math.abs(diag1 - diag2);
}

console.log(calculateDiagonals(matrix));
