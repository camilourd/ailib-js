import { ActivationFunction } from "../ActivationFunction";

export class BinaryStep implements ActivationFunction {
	public activate(x: number): number {
		return x < 0 ? 0 : 1;
	}

	public derivate(x: number): number {
		return 0;
	}
}
