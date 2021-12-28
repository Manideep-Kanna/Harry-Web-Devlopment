const fs=require("fs");
let text=fs.readFileSync("hi.txt","utf-8");
text=text.replace("browser","new file");
fs.writeFileSync("new.txt",text);
console.log("creating a new file");
