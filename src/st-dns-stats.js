import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let arr = domains.map(item => item.split('.').map(i => `.${i}`).reverse()).map(subarr => subarr.map((item,i) => subarr.slice(0, i + 1).join('')))
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(!obj[arr[i][j]]) obj[arr[i][j]] = 1;
      else obj[arr[i][j]]++
    }
  }
  return obj
}
