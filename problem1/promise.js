const fs = require('fs');

function Promisetask() {
    JsonGenerator('file1.json', () => {
        JsonGenerator('file2.json', () => {
            JsonGenerator('file3.json', () => {
          Promise.all([
            // FileDeletor('file1.json'),
            // FileDeletor('file2.json'),
            // FileDeletor('file3.json'),
          ])
            .then(() => {
              console.log('Files deleted all with callbacks and promises');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        });
      });
    });
  }
  
  function JsonGenerator(filename, callback) {
    const data = JSON.stringify({ data: Math.random() });
    fs.writeFile(filename, data, (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        callback();
      }
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
  

  Promisetask()