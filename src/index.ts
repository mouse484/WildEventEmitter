import { EventEmitter as defaultEventEmitter } from "events";

class WildEventEmitter extends defaultEventEmitter {
  emit(name: string, ...args: [any, ...any[]]) {
    return super.emit('*', name, ...args);
  }
}

export = WildEventEmitter;
