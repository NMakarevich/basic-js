import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    message = message.toLowerCase();

    if(key.length < message.length) {
      key = key.repeat(message.length / key.length + 1).slice(0, message.length)
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() > 123 || message[i].charCodeAt() < 97) {
        key = key.slice(0, i) + ' ' + key.slice(i)
      }
    }
    
    key = key.slice(0, message.length).toLowerCase()
    
    let result = message.split('').map((i, index) => {
      let start = 97;
      let shift = key.charCodeAt(index) - start;
      let code = start + (i.charCodeAt() - start + shift) % 26;
      console.log(shift)
      return shift > 26 || shift < 0 ? i : String.fromCharCode(code).toUpperCase();
    })

    return this.direction ? result.join('') : result.reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    
    message = message.toLowerCase();

    if(key.length < message.length) {
      key = key.repeat(message.length / key.length + 1).slice(0, message.length)
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() > 123 || message[i].charCodeAt() < 97) {
        key = key.slice(0, i) + ' ' + key.slice(i)
      }
    }
    
    key = key.slice(0, message.length).toLowerCase()
    
    let result = message.split('').map((i, index) => {
      let start = 97;
      let shift = key.charCodeAt(index) - start;
      let code = start + (i.charCodeAt() - start - shift + 26) % 26;
      console.log(shift)
      return shift > 26 || shift < 0 ? i : String.fromCharCode(code).toUpperCase();
    })

    return this.direction ? result.join('') : result.reverse().join('')
  }
}
