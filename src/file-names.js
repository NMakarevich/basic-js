const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    if (results.includes(names[i])) {
      const nameCount = names.slice(0, i).filter(name => name === names[i]).length;
      results.push(`${names[i]}(${nameCount === 0 ? 1 : nameCount})`);
    } else {
      results.push(names[i]);
    }
  }
  return results;
}

module.exports = {
  renameFiles
};
