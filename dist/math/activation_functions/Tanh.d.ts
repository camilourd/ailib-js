import { ActivationFunction } from "../ActivationFunction";
export declare class Tanh implements ActivationFunction {
    activate(x: number): number;
    derivate(x: number): number;
}
