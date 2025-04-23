import { describe, expect, test } from 'vitest';
import { substraction } from '../modules/substraction';

describe('soustraction', () => { 
    describe('Classic', () => {
        test('result positive', () => {
            expect(substraction(3, 2)).toBe(1);
        })
        test('result negative', () => {
            expect(substraction(2, 3)).toBe(-1);
        });

        test('big numbers', () => {
            expect(substraction(20, 10)).toBe(10);
        });
    })

    describe('same sign', () => {
        test('positives', () => {
            expect(substraction(3, 2)).toBe(1);
        });

        test('negatives', () => {
            expect(substraction(-3, -2)).toBe(-(3-2));
        });
    });

    describe('different sign', () => {
        test('first positive', () => {
            expect(substraction(3, -2)).toBe(3 + 2);
        });

        test('first negative', () => {
            expect(substraction(-3, 2)).toBe(-(3 + 2));
        });
    });

    describe('zero', () => {
        test('start with zero', () => {
            expect(substraction(0, 3)).toBe(-3);
        });

        test('end with zero', () => {
            expect(substraction(3, 0)).toBe(3);
        });

        test('zero only', () => {
            expect(substraction(0, 0)).toBe(0);
        });
    });

    describe("retenues", () => {
        test("with one retenue", () => {
            expect(substraction(10, 1)).toBe(9);
        });

        test("with multiple retenues", () => {
            expect(substraction(100, 1)).toBe(99);
        });
    })

})