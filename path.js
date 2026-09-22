// console.log(__dirname);
// console.log(__filename);

// const filePath = "/Users/DELL/Downloads/CodeRunnerFile.js";
// console.log(path.basename(filePath));
// console.log(path.basename(filePath, ".js"));

// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));

// const finalPath = path.join("/User/Param/Desktop", "NodeJs", "app.js");
// console.log(finalPath);

// console.log(path.resolve("Param", "preet", "dhatt"));

// console.log(path.parse(finalPath));

// Real World Example
const path = require("path");
const fs = require("fs");

const fileData = path.join(__dirname, "data", "Text1.txt");
fs.writeFileSync(fileData, "Hello, Parampreet !");
const data = fs.readFileSync(fileData, "utf-8");
console.log(data);
