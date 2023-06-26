
const fs  = require("fs");

// fs.writeFile("amine.text","hey from fs file",(err,data)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


fs.readFile("./new.text","utf8",async (err,data)=>{
    if(err){
         await console.log(err);
    }else{
        await console.log(data);
    }
})

// fs.appendFile("./amine.text","This is my new content",(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log("data has been wrote succussfuly");
// })


// fs.rename('./amine.text', './new.text', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File renamed successfully.');
// });


// fs.unlink('path/file.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File deleted successfully.');
// });
