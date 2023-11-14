async function asyncAwait() {
    try {
      await JsonGenerator('file1.json');
      await JsonGenerator('file2.json');
      await JsonGenerator('file3.json');
  
      await Promise.all([
        FileDeletor('file1.json'),
        FileDeletor('file2.json'),
        FileDeletor('file3.json'),
      ]);
  
      console.log('Files deleted concurrently with async/await.');
    } catch (err) {
      console.error('Error:', err);
    }
  }
  
  function JsonGenerator(filename) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ data: Math.random() });
      fs.writeFile(filename, data, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  
  function FileDeletor(filename) {
    return new Promise((resolve, reject) => {
      fs.unlink(filename, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  