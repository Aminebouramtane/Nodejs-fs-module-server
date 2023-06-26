const { log } = require("console");
const fs  = require("fs");

// fs.writeFile("amine.text","hey from fs file",(err,data)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


// fs.readFile("./amine.text","utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

fs.appendFile("./amine.text","This is my new content",(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("data has been wrote succussfuly");
})