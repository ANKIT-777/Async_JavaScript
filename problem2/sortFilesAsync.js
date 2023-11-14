const readFileAsync = require('./readAsync.js');
const writeFileAsync = require('./writeFileAsync.js');

const sortFilesAsync = async (filenames) => {
  const contents = await Promise.all(filenames.map(filename => readFileAsync(filename)));
  const sortedContent = contents.sort().join('\n');
  const sortedFilename = 'sorted.txt';
  await writeFileAsync(sortedFilename, sortedContent);
  return sortedFilename;
};

module.exports = sortFilesAsync;
