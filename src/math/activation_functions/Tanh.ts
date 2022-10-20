import { ActivationFunction } from "../ActivationFunction";

export class Tanh implements ActivationFunction {
	public activate(x: number): number {
		return Math.tanh(x);
	}

	public derivate(x: number): number {
		return Math.tanh(x);
	}
}
