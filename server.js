const http = require("http")

const server = http.createServer()
server.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
})