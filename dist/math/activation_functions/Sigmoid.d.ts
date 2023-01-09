import { ActivationFunction } from "../ActivationFunction";
export declare class Sigmoid implements ActivationFunction {
    activate(x: number): number;
    derivate(x: number): number;
}
