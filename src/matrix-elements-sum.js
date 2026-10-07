const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    const col = [];
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }
    const indexOfZero = col.indexOf(0);
    sum += col.slice(0, indexOfZero >= 0 ? indexOfZero : col.length).reduce((a, b) => a + b, 0);
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
