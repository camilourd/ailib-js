"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimension = void 0;
class Dimension {
    constructor(width, height, length) {
        this.width = width;
        this.height = height !== null && height !== void 0 ? height : 0;
        this.length = length !== null && length !== void 0 ? length : 0;
    }
    read(scanner) {
        let width = scanner.nextInt();
        let height = scanner.nextInt();
        let length = scanner.nextInt();
        return new Dimension(width, height, length);
    }
    save(line) {
        line += this.width + " " + this.height + " " + this.length;
    }
}
exports.Dimension = Dimension;
//# sourceMappingURL=Dimension.js.map