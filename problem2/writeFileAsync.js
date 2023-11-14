const fs = require('fs');

const writeFileAsync = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, 'utf8', (err) => {
      if (err) reject(err);
      else resolve(filename);
    });
  });
};

module.exports = writeFileAsync;
