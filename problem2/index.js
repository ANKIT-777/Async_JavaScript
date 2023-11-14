const readFileAsync = require('./readAsync.js');

const main = async () => {
  try {
    // Step 1
    const originalContent = await readFileAsync('lipsum.txt');

  } catch (error) {
    console.error('Error:', error);
  }
};


main();
