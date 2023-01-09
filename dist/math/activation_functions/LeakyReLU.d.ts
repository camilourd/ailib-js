import { ActivationFunction } from "../ActivationFunction";
export declare class LeakyReLU implements ActivationFunction {
    private leak;
    constructor(leak?: number);
    activate(x: number): number;
    derivate(x: number): number;
}
