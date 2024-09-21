const fs = require('fs')//load file system module-common js module
//import fs from "fs";//es6 module syntax
// fs.readFile("file.txt", "utf-8", (err, data) => {//error first calback
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(data);
//     }
// })
//utf 8 to understand type of char present in text file
//when u run it example.txt file is created
// const content = "this is new file created by nodejs";
// fs.writeFileSync("example.txt", content, "utf-8", (err, data) => {//error first calback
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(data);
//     }
// })
//read sync file
// const data = fs.readFileSync("example.txt", "utf-8");//block opeartion
// console.log(data);
// output
// first sync output is printed then async operation will be done
// this is new file created by nodejs
// hi shreya
// undefined


//-----------rename file-----------//
// fs.rename("example.txt", "new-example.txt", (err) => {//error first calback
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File rename sucessfilly");

// })
// fs.unlink("new-example.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File deleted sucessfully");
// })
// fs.stat("file.txt", (err, stat) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(stat.size);
//     console.log(stat.isFile());
// })
// fs.mkdir("my-directory", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// })
//check if directory exist
if (fs.existsSync("my-directory")) {
    console.log("directory exist")
}