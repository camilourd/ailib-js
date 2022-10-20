import { ActivationFunction } from "../ActivationFunction";

export class Sigmoid implements ActivationFunction {
	public activate(x: number): number {
		return 1 / (1 + Math.exp(-x));
	}

	public derivate(x: number): number {
		let val = Math.exp(-x);
		return val / Math.pow(1 + val, 2);
	}
}
