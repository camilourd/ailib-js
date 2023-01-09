import { ActivationFunction, Identity, BinaryStep, Sigmoid } from './../../dist/index';

describe('testing Scanner class', () => {
    test('Identity', () => {
        let activationFunction: ActivationFunction = new Identity();
        expect(activationFunction.activate(4)).toBe(4);
        expect(activationFunction.activate(4.8)).toBe(4.8);
        expect(activationFunction.derivate(4)).toBe(1);
        expect(activationFunction.derivate(4.8)).toBe(1);
    });
    test('Binary step', () => {
        let activationFunction: ActivationFunction = new BinaryStep();
        expect(activationFunction.activate(0)).toBe(1);
        expect(activationFunction.activate(4)).toBe(1);
        expect(activationFunction.activate(-4.8)).toBe(0);
        expect(activationFunction.derivate(0)).toBe(0);
        expect(activationFunction.derivate(4)).toBe(0);
        expect(activationFunction.derivate(-4.8)).toBe(0);
    });
    test('Sigmoid', () => {
        let activationFunction: ActivationFunction = new Sigmoid();
        expect(activationFunction.activate(0)).toBe(1 / (1 + Math.exp(0)));
        expect(activationFunction.activate(4)).toBe(1 / (1 + Math.exp(-4)));
        expect(activationFunction.activate(-4.8)).toBe(1 / (1 + Math.exp(4.8)));
        expect(activationFunction.derivate(0)).toBe(activationFunction.activate(0) * (1 - activationFunction.activate(0)));
        expect(activationFunction.derivate(4)).toBe(activationFunction.activate(4) * (1 - activationFunction.activate(4)));
        expect(activationFunction.derivate(-4.8)).toBe(activationFunction.activate(-4.8) * (1 - activationFunction.activate(-4.8)));
    });
});