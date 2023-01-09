export declare class Scanner {
    private line;
    private index;
    constructor(line: string);
    protected readNextWord(): string;
    nextInt(): number;
    nextDouble(): number;
    restart(): void;
}
