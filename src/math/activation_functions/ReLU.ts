import { ActivationFunction } from "../ActivationFunction";

export class ReLU implements ActivationFunction {
	public activate(x: number): number {
		return x > 0 ? x : 0;
	}

	public derivate(x: number): number {
		return x > 0 ? 1 : 0;
	}
}
