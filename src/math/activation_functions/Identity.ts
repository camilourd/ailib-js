import { ActivationFunction } from "../ActivationFunction";

export class Identity implements ActivationFunction {
	public activate(x: number): number {
		return x;
	}

	public derivate(x: number): number {
		return 1;
	}
}
