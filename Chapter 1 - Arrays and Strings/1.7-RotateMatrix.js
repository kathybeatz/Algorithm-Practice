//1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

/*

---start--- 0                             ---start--- 1
----*i*---- 0 ----*i*---- 1 ----*i*---- 2 ----*i*---- 0
----*j*---- 0 ----*j*---- 0 ----*j*---- 0 ----*j*---- 0 
----*j*---- 1 ----*j*---- 1 ----*j*---- 1 ----*j*---- 1
----*j*---- 2 ----*j*---- 2 ----*j*---- 2 ----*j*---- 2
----*j*---- 3 ----*j*---- 2 ----*j*---- 2 ----*j*---- 3

*/

m = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
];

//SOLUTION: rotated in place, start out by rotating each corner, working way inward

//function takes in a matrix
var rotateMatrix = function ( matrix ) {
  //check if the matrix is valid (only NxN)
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }
  if (matrix.length < 2) {
    return matrix; // no need to do anything to rotate a 1,1 matrix
  }

  //set length to the value of the last index
  var len = matrix.length - 1,
    //set half to be half of the length of the matrix, rounded down
    half = Math.floor(matrix.length / 2);

  // loop through diagonal ( ~start < half )
  for (var start = 0; start < half; start++) {
    // console.log('---start---', start);

    // loop through x axis (each layer)
    for (var i = 0; i < len - (start * 2); i++) {
      // console.log('----*i*----', i);
      var y = start,
          x = start + i,
          prev = matrix[y][x];
      // console.log('----*y*----', y);
      // console.log('----*x*----', x);

      // loop through all 4 corners
      for (var j = 0; j < 4; j++) {
        // console.log('----*j*----', j);
        var nextY = x,
          nextX = len - y,
          next = matrix[nextY][nextX];
        matrix[nextY][nextX] = prev;
        prev = next;
        // console.log('----*nextY*----', nextY);
        // console.log('----*nextX*----', nextX);
        x = nextX;
        y = nextY;
        // console.log('----*y*----', y);
        // console.log('----*x*----', x);
      }
    }
  }
  //return the newly rotated matrix
  return matrix;
};


console.log('original matrix', m);
matrix1 = rotateMatrix(m);
console.log(matrix1);
matrix2 =rotateMatrix(matrix1);
console.log(matrix2);
matrix3 =rotateMatrix(matrix2);
console.log(matrix3);
matrix4 =rotateMatrix(matrix3);
console.log('should match original matrix', matrix4);