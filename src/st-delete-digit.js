import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n.toString();
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    let substr = str.slice(0, i) + str.slice(i + 1);
    if (num < Number(substr)) num = Number(substr);
  }
  return num;
}
