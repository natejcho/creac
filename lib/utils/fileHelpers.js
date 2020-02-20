const fs = require('fs');
const mkdirp = require('mkdirp');

/**
 * Native async / await for writing file in node
 * @param {String} path - fs.readFile path
 * @param {String} data - file content
 * @param {String} opts - fs.readFile options
 */
function writeFileAsync(path, data, opts = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, opts, err => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}

/**
 * Native async / await for checking if file exists in node
 * @param {String} path - fs.readFile path
 */
function existsSyncAsync(path) {
  return new Promise((resolve, reject) => {
    const exists = fs.existsSync(path);
    return !exists ? resolve(true) : reject(new Error(false));
  });
}

/**
 * Native async / await for creating directorys in node
 * @param {String} dir - directorys path
 */
function createDirectorys(dir) {
  return new Promise((resolve, reject) => {
    try {
      return fs.exists(dir, exists => {
        if (!exists) {
          return mkdirp(dir, err => {
            if (err) {
              return reject(new Error(err));
            }

            return resolve(dir);
          });
        }
        return resolve(dir);
      });
    } catch (error) {
      return reject(new Error(`Failed to create directory ${dir}`));
    }
  });
}

module.exports = {
  writeFileAsync,
  existsSyncAsync,
  createDirectorys,
};
