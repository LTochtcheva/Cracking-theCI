// Write a method such that if an element in NxM matrix is 0
// its row and column are set to 0

export default (matrix) => {

  let zeroJs = [];
  for (let i = 0; i < matrix.length; i ++) {
    let index = matrix[i].indexOf(0);
    if (index !== -1) {
      for (let j = 0; j < matrix[i].length; j ++) {
        if (matrix[i][j] === 0) {
          zeroJs.push(j);
        }
        else {
          matrix[i][j] = 0;
        }
      }
    }
  }

  for (let i = 0; i < zeroJs.length; i ++) {
    matrix.forEach(row => {
      row[zeroJs[i]] = 0;
    })
  }

  return matrix;
}
