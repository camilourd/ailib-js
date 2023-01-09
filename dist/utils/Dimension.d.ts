import { Scanner } from "../io/Scanner";
export declare class Dimension {
    width: number;
    height?: number;
    length?: number;
    constructor(width: number, height?: number, length?: number);
    read(scanner: Scanner): Dimension;
    save(line: string): void;
}
