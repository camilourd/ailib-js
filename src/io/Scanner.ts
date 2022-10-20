export class Scanner {
	private line = "";
	private index = 0;

	constructor(line: string) {
		this.line = line;
	}

	protected readNextWord(): string {
		let word = "";
		while (this.index < this.line.length && this.line[this.index] == " ") this.index++;
		while (this.index < this.line.length && this.line[this.index] != " ")
			word += this.line[this.index++];
		return word;
	}

	public nextInt(): number {
		return parseInt(this.readNextWord());
	}

	public nextDouble(): number {
		return parseFloat(this.readNextWord().replace(",", "."));
	}

	public restart(): void {
		this.line = "";
		this.index = 0;
	}
}
