const { NotImplementedError } = require('../lib');

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
class VigenereCipheringMachine {
  codeStart = 96;
  codeEnd = 122;
  mode = {
    encrypt: 1,
    decrypt: -1,
  }

  constructor(direction = true) {
    this.direction = direction;
  }

  checkArgs(text,key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!')
    }
  }

  convertChar(letter, shift, mode) {
    const letterCode = this.getCharCode(letter);
    if (letterCode > this.codeEnd || letterCode <= this.codeStart) return letter;
    const shiftedCode = letterCode + shift * mode;
    return mode === 1 ?
      String.fromCharCode((shiftedCode - this.codeStart) % 26 + this.codeStart) :
      String.fromCharCode(this.codeEnd - (this.codeEnd - shiftedCode) % 26);
  }

  getCharCode(letter) {
    return letter.charCodeAt(0)
  }


  getShiftTable(text, key) {
    const keyRepeat = Math.ceil(text.length / key.length);
    return Array(keyRepeat)
      .fill(key)
      .join('')
      .split('')
      .map((char) => char.charCodeAt(0) - (this.codeStart + 1));
  }

  getCharIndexes(text) {
    const charIndexes = [];
    let index = 0;
    for (let char of text) {
      if (this.getCharCode(char) > this.codeEnd || this.convertChar(char) <= this.codeStart) {
        charIndexes.push(index);
      } else {
        charIndexes.push(index);
        index += 1;
      }
    }
    return charIndexes;
  }

  encrypt(text, key) {
    this.checkArgs(text, key);
    const lowerCaseText = text.toLowerCase();
    const lowerCaseKey = key.toLowerCase();
    const shiftTable = this.getShiftTable(lowerCaseText, lowerCaseKey);
    const encrypted = this.getCharIndexes(lowerCaseText)
      .reduce((result, idx, index) => result += this.convertChar(lowerCaseText[index], shiftTable[idx], this.mode.encrypt),'')
      .toUpperCase();
    return this.direction ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(text, key) {
    this.checkArgs(text, key);
    const lowerCaseText = text.toLowerCase();
    const shiftTable = this.getShiftTable(lowerCaseText, key);
    const decrypted = this.getCharIndexes(lowerCaseText)
      .reduce((result, idx, index) => result += this.convertChar(lowerCaseText[index], shiftTable[idx], this.mode.decrypt),'')
      .toUpperCase();
    return this.direction ? decrypted : decrypted.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
