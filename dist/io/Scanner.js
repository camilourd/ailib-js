"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scanner = void 0;
class Scanner {
    constructor(line) {
        this.line = "";
        this.index = 0;
        this.line = line;
    }
    readNextWord() {
        let word = "";
        while (this.index < this.line.length && this.line[this.index] == " ")
            this.index++;
        while (this.index < this.line.length && this.line[this.index] != " ")
            word += this.line[this.index++];
        return word;
    }
    nextInt() {
        return parseInt(this.readNextWord());
    }
    nextDouble() {
        return parseFloat(this.readNextWord().replace(",", "."));
    }
    restart() {
        this.index = 0;
    }
}
exports.Scanner = Scanner;
//# sourceMappingURL=Scanner.js.map