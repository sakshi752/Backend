const fs = require("fs");
// sync write
// fs.writeFileSync('./text.txt',"hello write sync");

// async write
// fs.writeFile('./text.txt',"hello write async",(err)=>{});

// const res = fs.readFileSync("./readText.txt","utf-8");

// console.log("sync ",res)

// fs.readFile("./readText.txt","utf-8",(err,result)=>{
//     if (err) {
//         console.log("Error",err);
//     }else{
//         console.log(result);
        
//     }
// })

fs.appendFileSync("./text.txt","hey there");

// fs.cpSync("./text.txt","./copy.txt")

fs.unlinkSync("./copy.txt")