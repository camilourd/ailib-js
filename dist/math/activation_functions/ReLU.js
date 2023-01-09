"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReLU = void 0;
class ReLU {
    activate(x) {
        return x > 0 ? x : 0;
    }
    derivate(x) {
        return x > 0 ? 1 : 0;
    }
}
exports.ReLU = ReLU;
//# sourceMappingURL=ReLU.js.map