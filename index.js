const defaultEventEmitter = require("events");

class WildEvenEmitter {
  constructor(EventEmitter) {

    if (!EventEmitter) EventEmitter = defaultEventEmitter;

    class ExtendEvenEmitter extends EventEmitter {
      emit(name, ...args) {
        return super.emit("*", name, ...args);
      }
    }

    return new ExtendEvenEmitter();
  }
}

module.exports = WildEvenEmitter;
