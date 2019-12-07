"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var defaultEventEmitter = require("events");
var WildEventEmitter = /** @class */ (function () {
    function WildEventEmitter(EventEmitter) {
        if (!EventEmitter)
            EventEmitter = defaultEventEmitter;
        var ExtendEventEmitter = /** @class */ (function (_super) {
            __extends(ExtendEventEmitter, _super);
            function ExtendEventEmitter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExtendEventEmitter.prototype.emit = function (name) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return _super.prototype.emit.apply(this, __spreadArrays(['*', name], args));
            };
            return ExtendEventEmitter;
        }(EventEmitter));
        return new ExtendEventEmitter();
    }
    return WildEventEmitter;
}());
module.exports = WildEventEmitter;
