const path = require("path");
const fs = require("fs");
const name = path.join("folder", "sub");
console.log(name)
//create absolute path
const name1 = path.resolve("folder", "sub");
console.log(name1)
//extract filename and extension from path
const name2 = path.basename("./dir/file.txt");
const ext = path.extname("./dir/file.txt");
console.log(name2, ext)
//Normalize path
const np = path.resolve("/path/to/../file.txt");
console.log(np);
//copy content from src.txt to dest.txt
//craere streams
const srcpath = "./my-directory/src.txt";
const destpath = "./my-directory/dest.txt";
const readstream = fs.createReadStream(srcpath);
const writestream = fs.createWriteStream(destpath);
readstream.pipe(writestream);
//handle any error
readstream.on("error", (err) => {
    console.log(err, "error reading file");
})
writestream.on("error", (err) => {
    console.log(err, "error writing file");
})
writestream.on("finish", () => {
    console.log("content copied sucessfully");
})