import { describe, expect, test } from 'vitest';
import { division } from '../modules/division';

const anyNumber = 99999;

describe('division', () => {
  describe('specials cases', () => {
    describe("zeros", () => {
      test('division by zero should throw an error', () => {
        expect(() => division(anyNumber, 0)).toThrow(Error);
      });

      test('divisor is zero should throw an error', () => {
        expect(division(0, anyNumber)).toEqual({ modulo: 0, quotient: 0 });
      });
    });
    describe('ones', () => {
      test('dividing any number by one should return { modulo: 0, quotient: 1 }', () => {
        expect(division(anyNumber, 1)).toEqual({ modulo: 0, quotient: anyNumber });
      });
    })

  });

  test('positive division', () => {
    expect(division(5, 2)).toEqual({ modulo: 1, quotient: 2 });
  });
  
  test('exact division', () => {
    expect(division(9, 3)).toEqual({ modulo: 0, quotient: 3 });
  });
  
  describe("negative numbers", () => {
    test('negative dividend and divisor', () => {
      expect(division(-10, -3)).toEqual(division(10, 3));
    });

    describe('distinct signs', () => {
      test('negative dividend', () => {
        expect(division(-5, 2)).toEqual({ modulo: 1, quotient: -2 });
      });

      test('negative divisor', () => {
        expect(division(5, -2)).toEqual({ modulo: 1, quotient: -2 });
      });
    })
});
});