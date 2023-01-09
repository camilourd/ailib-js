"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sigmoid = void 0;
class Sigmoid {
    activate(x) {
        return 1 / (1 + Math.exp(-x));
    }
    derivate(x) {
        return this.activate(x) * (1 - this.activate(x));
    }
}
exports.Sigmoid = Sigmoid;
//# sourceMappingURL=Sigmoid.js.map