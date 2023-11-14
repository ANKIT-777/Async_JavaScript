const readFileAsync = require('./readAsync');

const processFileAsync = async (filename) => {
  const data = await readFileAsync(filename);
  const lowercaseData = data.toLowerCase();
  const sentences = lowercaseData.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
  return sentences;
};

module.exports = processFileAsync;
