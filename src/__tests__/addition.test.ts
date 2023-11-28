import { describe, expect, test } from 'vitest'
import { sumSmallNumbers } from '../modules/addition';

describe("Sum only for small numbers", () => {
  describe("errors on parameters", () => {
    test("Too big numbers ", () => {
      expect(() => sumSmallNumbers(10, 2)).toThrow(Error);
    });

    test("Too small numbers ", () => {
      expect(() => sumSmallNumbers(-10, 2)).toThrow(Error);
    });

    test("zero ", () => {
      expect(() => sumSmallNumbers(0, 1)).not.toThrow(Error);
    });
  });

  describe("Small sum of valid numbers", () => {
    test("positives", () => {
      expect(sumSmallNumbers(0, 0)).toBe(0);
      expect(sumSmallNumbers(0, 9)).toBe(9);
      expect(sumSmallNumbers(1, 9)).toBe(10);
      expect(sumSmallNumbers(9, 9)).toBe(18);
    });
  });
});