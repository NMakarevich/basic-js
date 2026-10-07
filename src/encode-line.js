const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let count = 1;
  let curr = str[0];
  let result = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === curr) {
      count += 1;
    } else {
      result += `${count === 1 ? '' : count}${curr}`;
      count = 1;
      curr = str[i];
    }
    if (i === str.length - 1) {
      result += `${count === 1 ? '' : count}${curr}`;
    }
  }
  return result
}

module.exports = {
  encodeLine
};
