const WildEventEmitter = require("./index.js");

const EventEmitter = require("events");

const event = new WildEventEmitter(EventEmitter);

event.on("*", (name, ...callback) => {
  console.log(`name: ${name} |`, ...callback);
});


event.emit("ready", "ready...");

event.emit("number", 1, 2, 3, 4);

event.emit("array", ["a", "b"]);

event.emit("object", { "abc": 123, "def": 456 });