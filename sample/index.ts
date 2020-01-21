import WildEventEmitter from "../dist/types";

const event = new WildEventEmitter();

event.on("*", (name, ...callback) => {
  console.log(`name: ${name} |`, ...callback);
});

event.emit("ready", "ready...");

event.emit("number", 1, 2, 3, 4);

event.emit("array", ["a", "b"]);

event.emit("object", { "abc": 123, "def": 456 });
