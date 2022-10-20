import { ActivationFunction } from "../ActivationFunction";

export class Exponential implements ActivationFunction {
	public activate(x: number): number {
		return Math.exp(x);
	}

	public derivate(x: number): number {
		return Math.exp(x) * x;
	}
}
