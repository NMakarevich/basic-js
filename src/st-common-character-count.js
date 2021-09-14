import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;

  let args = Array.from(arguments).map(arg => {
    return Array.from(new Set(arg.split('')))
    .map(i => {
      let count = 0
      for (let j = 0; j < arg.length; j++) {
        if(arg[j] == i) count++
      }
      return [i, count]
    })
  })
  
  for (let i = 0; i < args[0].length; i++) {
    for (let j = 0; j < args[1].length; j++){
      if (args[1][j][0] == args[0][i][0]) {
        count += Math.min(args[0][i][1], args[1][j][1])
      }
    }
  }

  return count
}
