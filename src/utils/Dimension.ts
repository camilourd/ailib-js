import { Scanner } from "../io/Scanner";

export class Dimension {
	public width: number;
	public height?: number;
	public length?: number;

	constructor(width: number, height?: number, length?: number) {
		this.width = width;
		this.height = height ?? 0;
		this.length = length ?? 0;
	}

	public read(scanner: Scanner): Dimension {
		let width = scanner.nextInt();
		let height = scanner.nextInt();
		let length = scanner.nextInt();
		return new Dimension(width, height, length);
	}

	public save(line: string): void {
		line += this.width + " " + this.height + " " + this.length;
	}
}
