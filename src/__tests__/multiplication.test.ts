import {
    multiplication
} from "../modules/multiplication";
import { describe, expect, test } from "vitest";

describe("Multiplication", () => {
    describe("Classic", () => {
        test("small numbers", () => {
            expect(multiplication(2, 3)).toBe(6);
        });

        test("big numbers", () => {
            expect(multiplication(10, 10)).toBe(100);
        });
    });

    describe("same sign", () => {
        test("positives", () => {
            expect(multiplication(2, 3)).toBe(6);
        });

        test("negatives", () => {
            expect(multiplication(-2, -3)).toBe(6);
        });
    });

    describe("different sign", () => {
        test("positives", () => {
            expect(multiplication(2, -3)).toBe(-6);
        });

        test("negatives", () => {
            expect(multiplication(-2, 3)).toBe(-6);
        });
    });

    describe("zero", () => {
        test("start with zero", () => {
            expect(multiplication(0, 3)).toBe(0);
        });

        test("end with zero", () => {
            expect(multiplication(3, 0)).toBe(0);
        });

        test("zero only", () => {
            expect(multiplication(0, 0)).toBe(0);
        });
    });

    describe("one", () => {
        test("start with one", () => {
            expect(multiplication(1, 3)).toBe(3);
        });

        test("end with one", () => {
            expect(multiplication(3, 1)).toBe(3);
        });

        test("one only", () => {
            expect(multiplication(1, 1)).toBe(1);
        });
    });

});