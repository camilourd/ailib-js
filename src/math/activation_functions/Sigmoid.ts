import { ActivationFunction } from "../ActivationFunction";

export class Sigmoid implements ActivationFunction {
	public activate(x: number): number {
		return 1 / (1 + Math.exp(-x));
	}

	public derivate(x: number): number {
		return this.activate(x) * (1 - this.activate(x));
	}
}
