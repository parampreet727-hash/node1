const fs = require("fs").promises;

// fs.writeFile("data.txt", "Hello World NodeJS Promise!")
//   .then(() => {
//     console.log("File Written Successfully");
//   })
//   .catch((err) => {
//     console.log("Error Writting File", err);
//   });

// fs.readFile("data.txt", "utf-8")
//   .then((data) => {
//     console.log("File Read Successfully :-", data);
//   })
//   .catch((err) => {
//     console.log("Error Read File", err);
//   });

// fs.appendFile("data.txt", "\nThis is appended text.")
//   .then(() => {
//     console.log("File Appended Successfully");
//   })
//   .catch((err) => {
//     console.log("Error Appended File :-", err);
//   });

  fs.unlink("param.txt")
  .then(() => {
    console.log("File Deleted Successfully");
  })
  .catch((err) => {
    console.log("Error Deleted File :-", err);
  });