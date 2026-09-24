const EventEmitter = require("events");

const data = new EventEmitter();

data.on("greet", (name, age) => {
  console.log(`Hello ${name}, You are ${age} years old.`);
});
data.emit("greet", "Parampreet", 25);
