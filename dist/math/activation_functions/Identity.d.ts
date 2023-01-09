import { ActivationFunction } from "../ActivationFunction";
export declare class Identity implements ActivationFunction {
    activate(x: number): number;
    derivate(x: number): number;
}
