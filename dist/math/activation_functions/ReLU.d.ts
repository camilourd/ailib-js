import { ActivationFunction } from "../ActivationFunction";
export declare class ReLU implements ActivationFunction {
    activate(x: number): number;
    derivate(x: number): number;
}
