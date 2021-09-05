import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let addArr = new Array(options.additionRepeatTimes || 1);
  if (options.addition !== undefined) {
    addArr.fill(String(options.addition));
  }
  let oneRepeat = str + addArr.join(options.additionSeparator || '|');
  let strArr = new Array(options.repeatTimes);
  strArr.fill(oneRepeat);
  return strArr.join(options.separator || '+')
}
