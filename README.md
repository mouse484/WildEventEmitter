# WildEventEmitter
Add wildcard to EventEmitter

# How to Use

### Install
```
npm install mouse484/WildEventEmitter
```
or
```
yarn add mouse484/WildEventEmitter
```
### coding

```js
const WildEventEmitter = require("WildEventEmitter");

const event = new WildEventEmitter();

event.on("*", (name, ...callback) => {
  console.log(`name: ${name} |`, ...callback);
});
```
Look at the [sample](https://github.com/mouse484/WildEventEmitter/blob/master/sample.js)

# API

## new WildEventEmitter([EventEmitter]);
Extend EventEmitter to return WildEventEmitter that can use wildcar.

- `EventEmitter`(optional):Accept your EventEmitte, If not specified, empty EventEmitter is extended.
