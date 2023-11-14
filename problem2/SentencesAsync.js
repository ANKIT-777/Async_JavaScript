const writeFileAsync = require('./writeFileAsync');

const writeSentencesAsync = async (sentences) => {
  const filenames = [];

  for (let i = 0; i < sentences.length; i++) {
    const filename = `sentence_${i + 1}.txt`;
    
    await writeFileAsync(filename, sentences[i]);
    filenames.push(filename);

  }
  return filenames;
};

module.exports = writeSentencesAsync;


