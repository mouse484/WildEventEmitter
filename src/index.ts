import defaultEventEmitter from "events";

class WildEventEmitter {
  constructor(EventEmitter: any) {
    if (!EventEmitter) EventEmitter = defaultEventEmitter;
    class ExtendEventEmitter extends EventEmitter {
      emit(name: string, ...args: [any, ...any[]]) {
        return super.emit('*', name, ...args);
      }
    }

    return new ExtendEventEmitter();
  }
}

export = WildEventEmitter;
