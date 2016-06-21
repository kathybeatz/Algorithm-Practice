//1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

m = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1]
];

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:
var zeroMatrix = function ( matrix ) {
  if (!matrix) {
    throw new Error ('invalid matrix');
  }

  if (matrix.length === 0) {
    return matrix;
  }

  //create the layers of the matrix (y axis)
  var rows = new Array(matrix.length);
  //create the cols of the matrix (x axis)
  var cols = new Array(matrix[0].length);

  //set all rows and column to false
  rows.fill(false);
  cols.fill(false);

  //iterate through each row
  for ( var y = 0; y < rows.length; y++ ) {
    //iterate through each column
    for ( var x = 0; x < cols.length; x++ ) {
      //check if the original matrix has a 0 at that position
      if ( matrix[y][x] === 0 ) {
        //mark the row and column to be true at this point
        rows[y] = true;
        cols[x] = true;
      }
    }
  }

  //iterate through the tagged rows
  for ( var y = 0; y < rows.length; y++ ) {
    //iterate through the tagged columns
    for ( var x = 0; x < cols.length; x++ ) {
      //if a row or column is marked true
      if ( rows[y] || cols[x] ) {
        //set the original point on the matrix to be 0
        matrix[y][x] = 0;
      }
    }
  } 

  //return the matrix
  return matrix;
};

console.log(zeroMatrix(m));

/*

//Resulting zero matrix

[ [ 0, 1, 0, 1 ], 
  [ 0, 0, 0, 0 ],
  [ 0, 1, 0, 1 ], 
  [ 0, 0, 0, 0 ] 
]

*/