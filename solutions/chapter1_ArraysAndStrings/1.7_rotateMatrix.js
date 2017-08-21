// Write a method to rotate given NxN matrix by 90 degrees

export default (matrix) => {

  let result = [];

  for (let j = 0; j < matrix.length; j ++) {
    let row = [];
    for (let i = matrix.length -1; i >= 0; i --) {
      row.push(matrix[i][j]);
    }
    result[j] = row;
  }
  return result;
}
