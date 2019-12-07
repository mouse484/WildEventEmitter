const defaultEventEmitter = require("events");

/** Class  WildEventEmitter */
class WildEventEmitter {
  /**
   * Create a WildEventEmitter.
   * @param {EventEmitter} [EventEmitter] - Your EventEmitter (If not, default EventEmitter).
   */
  constructor(EventEmitter) {

    if (!EventEmitter) EventEmitter = defaultEventEmitter;

    class ExtendEventEmitter extends EventEmitter {
      emit(name, ...args) {
        return super.emit("*", name, ...args);
      }
    }

    return new ExtendEventEmitter();
  }
}

module.exports = WildEventEmitter;
