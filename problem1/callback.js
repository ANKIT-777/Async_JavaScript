const fs = require('fs');

function createAndDeleteFilesWithCallbacks() {
    JsonGenerator('ouput1.json', () => {
        console.log(`first file created`)
        JsonGenerator('output2.json',() =>{
            console.log(`second file created`)
            JsonGenerator('output3.json',()=>{
                console.log(`third file generated`)
                DeleteFile('output1.json',()=>{
                    console.log(`first file deleted`)
                    DeleteFile('output2.json',() =>{
                        console.log(`second file deleted`)
                        DeleteFile('output3.json', ()=>{
                            console.log(`3rd file deletd and completed all assingmet`)
                        })
                    })

                })

            })
        })
    });
}
  


function JsonGenerator(filename, callback) {
    const data = JSON.stringify({ data: Math.random() });
    fs.writeFile(filename, data, callback);
}
 
function DeleteFile(filename,callback){
    fs.unlink(filename, callback);
}



createAndDeleteFilesWithCallbacks()