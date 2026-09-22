const fs = require("fs");

// //Asych
// fs.readFile("text.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//   }
//   console.log("File read data:", data);
// });

// //Sych
// const data = fs.readFileSync("text.txt", "utf8");
// console.log("File Read Content :", data);

// //Write File
// fs.writeFile("text1.txt", "Hello , I'm Parampreet Dhatt", (err) => {
//   if (err) {
//     console.error("Error Writing File :", err);
//   } else {
//     console.log("File Written Successfully");
//   }
// });

// //Append File
// fs.appendFile("text1.txt", "\nI'm Parampreet Dhatt", (err) => {
//   if (err) {
//     console.error("Error Appending File :", err);
//   } else {
//     console.log("File Appended Successfully");
//   }
// });

// //Delete File
// fs.unlink("text1.txt", (err) => {
//   if (err) {
//     console.log("Error Deleting File :", err);
//   } else {
//     console.log("File Deleted Successfully");
//   }
// });

// //Rename File
// fs.rename("text1.txt", "text2.txt", (err) => {
//   if (err) {
//     console.log("Error Rename File :", err);
//   } else {
//     console.log("File Rename Successfully");
//   }
// });

