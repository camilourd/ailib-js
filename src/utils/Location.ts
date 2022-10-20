export class Location {
	public x: number;
	public y?: number;
	public z?: number;
	public static Zero = new Location(0);

	constructor(x: number, y?: number, z?: number) {
		this.x = x;
		this.y = y ?? 0;
		this.z = z ?? 0;
	}
}
