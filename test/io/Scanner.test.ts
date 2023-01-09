import { Scanner } from './../../dist/index';

describe('testing Scanner class', () => {
    test('reading integer values', () => {
        let line: string = "1 4 -5 -3 3.5 -2.5";
        let scanner: Scanner = new Scanner(line);
        expect(scanner.nextInt()).toBe(1);
        expect(scanner.nextInt()).toBe(4);
        expect(scanner.nextInt()).toBe(-5);
        expect(scanner.nextInt()).toBe(-3);
        expect(scanner.nextInt()).toBe(3);
        expect(scanner.nextInt()).toBe(-2);
    });
    test('reading float values', () => {
        let line: string = "1 4 -5 -3 3.5 -2.5 1e-9";
        let scanner: Scanner = new Scanner(line);
        expect(scanner.nextDouble()).toBe(1);
        expect(scanner.nextDouble()).toBe(4);
        expect(scanner.nextDouble()).toBe(-5);
        expect(scanner.nextDouble()).toBe(-3);
        expect(scanner.nextDouble()).toBe(3.5);
        expect(scanner.nextDouble()).toBe(-2.5);
        expect(scanner.nextDouble()).toBe(1e-9);
    });
    test('reading non-valid characters', () => {
        let line: string = "A15 b *";
        let scanner: Scanner = new Scanner(line);
        expect(scanner.nextInt()).toBeNaN();
        expect(scanner.nextDouble()).toBeNaN();
        expect(scanner.nextDouble()).toBeNaN();
    });
    test('restart scanner', () => {
        let line: string = "1 2 3.5";
        let scanner: Scanner = new Scanner(line);
        expect(scanner.nextInt()).toBe(1);
        scanner.restart();
        expect(scanner.nextInt()).toBe(1);
        expect(scanner.nextInt()).toBe(2);
        scanner.restart();
        expect(scanner.nextInt()).toBe(1);
        expect(scanner.nextInt()).toBe(2);
        expect(scanner.nextDouble()).toBe(3.5);
        scanner.restart();
        expect(scanner.nextInt()).toBe(1);
        expect(scanner.nextInt()).toBe(2);
        expect(scanner.nextDouble()).toBe(3.5);
    });
});