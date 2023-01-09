"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
class Location {
    constructor(x, y, z) {
        this.x = x;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.z = z !== null && z !== void 0 ? z : 0;
    }
}
exports.Location = Location;
Location.Zero = new Location(0);
//# sourceMappingURL=Location.js.map