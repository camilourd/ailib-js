import { ActivationFunction } from "../ActivationFunction";
export declare class Exponential implements ActivationFunction {
    activate(x: number): number;
    derivate(x: number): number;
}
