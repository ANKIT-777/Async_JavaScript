const fs = require('fs');
const writeFileAsync = require('./writeFileAsync.js');
const readFileAsync = require('./readAsync.js')

const deleteFilesAsync = async (filename) => {
  const filesToDelete = await readFileAsync(filename);
  const filenames = filesToDelete.split('\n').filter(filename => filename.trim() !== '');

  await Promise.all(filenames.map(filename => {
    return new Promise((resolve, reject) => {
      fs.unlink(filename, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }));

  return 'Files deleted successfully';
};

module.exports = deleteFilesAsync;
