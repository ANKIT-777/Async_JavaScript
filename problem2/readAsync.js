const fs = require('fs');

const readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

module.exports = readFileAsync;
