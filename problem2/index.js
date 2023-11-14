const readFileAsync = require('./readAsync.js');
const writeFileAsync = require('./writeFileAsync.js');
const loweCase = require('./loweCase.js')
const SentencesAsync = require('./SentencesAsync.js')
const sortFilesAsync = require('./sortFilesAsync.js')
const deleteFilesAsync = require('./deleteFilesAsync');

const main = async () => {
  try {
    // Step 1
    const originalContent = await readFileAsync('lipsum.txt');

    // Step 2
    const uppercaseContent = originalContent.toUpperCase();
    const uppercaseFilename = await writeFileAsync('uppercase.txt', uppercaseContent);

     // Step 3
    const sentences = await loweCase(uppercaseFilename);

    // Step 4
    const sentenceFilenames = await SentencesAsync(sentences);

    // Step 5
    const sortedFilename = await sortFilesAsync(sentenceFilenames);

    // Step 6
    await writeFileAsync('filenames.txt', `${uppercaseFilename}\n${sentenceFilenames.join('\n')}\n${sortedFilename}`);
    const deletionResult = await deleteFilesAsync('filenames.txt');

    console.log(deletionResult);

  } catch (error) {
    console.error('Error:', error);
  }
};

main();
