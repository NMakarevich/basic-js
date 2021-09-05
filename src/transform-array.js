import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  console.log(arr)
  let array = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (array[i] === '--discard-next' && i + 1 <= arr.length) {
      array[i] = null;
      array[i + 1] = null;
    };
    if (array[i] === '--discard-prev') {
      array[i] = null;
      if (i - 1 >= 0) array[i - 1] = null;
    }
    if (array[i] === '--double-next' && i + 1 <= arr.length) {
      array[i] = array[i + 1];
    }
    if (array[i] === '--double-prev') {
      if (i - 1 >= 0) array[i] = array[i - 1]
      else array[i] = null
    }
  }
  return array.filter(item => item);
}
