const readFileAsync = require('./readAsync.js');
const writeFileAsync = require('./writeFileAsync.js');

const main = async () => {
  try {
    // Step 1
    const originalContent = await readFileAsync('lipsum.txt');

    // Step 2
    const uppercaseContent = originalContent.toUpperCase();
    await writeFileAsync('uppercase.txt', uppercaseContent);

   

  } catch (error) {
    console.error('Error:', error);
  }
};

main();
