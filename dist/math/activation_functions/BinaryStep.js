"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryStep = void 0;
class BinaryStep {
    activate(x) {
        return x < 0 ? 0 : 1;
    }
    derivate(x) {
        return 0;
    }
}
exports.BinaryStep = BinaryStep;
//# sourceMappingURL=BinaryStep.js.map