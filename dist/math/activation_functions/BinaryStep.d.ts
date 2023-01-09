import { ActivationFunction } from "../ActivationFunction";
export declare class BinaryStep implements ActivationFunction {
    activate(x: number): number;
    derivate(x: number): number;
}
