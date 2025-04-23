import { describe, expect, test } from "vitest";
import {
  fastSum,
  sum,
  sumSmallNumbers,
} from "../modules/addition";

describe("Sum only for small numbers", () => {
  describe("errors on parameters", () => {
    test("Too big numbers ", () => {
      expect(() => sumSmallNumbers(10, 0)).toThrow(Error);
    });

    test("Too small numbers ", () => {
      expect(() => sumSmallNumbers(-10, 0)).toThrow(Error);
    });

    test("zero ", () => {
      expect(() => sumSmallNumbers(0, 0)).not.toThrow(Error);
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

describe("Sum of big numbers", () => {
  describe("result", () => {
    test("with two small numbers", () => {
      expect(sum(1, 1)).toEqual(2);
    });

    test("with one small numbers", () => {
      expect(sum(1, 10)).toEqual(11);
      expect(sum(10, 1)).toEqual(11);
    });

    test("same length", () => {
      expect(sum(10, 10)).toEqual(20);
    });

    test("differents length without retenue", () => {
      expect(sum(10, 100)).toEqual(110);
    });

    test("negatives", () => {
      expect(sum(-10, -100)).toEqual(-110);
    });

    test("differents sign", () => {
      expect(() => sum(-10, 9)).toThrowError();
    });

    describe("retenues", () => {
      test("simple avec dernier chiffre = 0", () => {
        expect(sum(15, 15)).toEqual(30);
      })
      test("simple avec dernier chiffre = 1", () => {
        expect(sum(15, 16)).toEqual(31);
      })
      test("retenue avec nombres négatifs", () => {
        expect(sum(-15, -16)).toEqual(-31);
      })
      test("double retenue", () => {
        expect(sum(1, 99)).toEqual(100);
      })
    });
  });
});

describe("special capacities with fast sum", () => {
  describe("deux nombres égaux à 0", () => {
    test("deux nombres égaux à 0 positifs", () => {
      expect(fastSum(0, 0)).toEqual(0);
    });

    test("deux nombres égaux à 0 négatifs", () => {
      expect(fastSum(-0, -0)).toEqual(0);
    });

    test("deux nombres égaux à 0 avec un premier 0 négatif", () => {
      expect(fastSum(-0, 0)).toEqual(0);
    });
    
    test("deux nombres égaux à 0 avec un deuxième 0 négatif", () => {
      expect(fastSum(0, -0)).toEqual(0);
    });
  });

  describe("zero sum", () => {
    test("zero en première position", () => {
      expect(fastSum(0, 10)).toEqual(10);
    });
    test("zero en deuxième position", () => {
      expect(fastSum(10, 0)).toEqual(10);
    })
  });

  describe("nombres contraires", () => {
    const nombre = 89283
    test("nombres contraires premier positif", () => {
      expect(fastSum(nombre, -nombre)).toEqual(0);
    });

    test("nombres contraires premier négatif", () => {
      expect(fastSum(-nombre, nombre)).toEqual(0);
    });
  });

  test("negatives", () => {
    const nombreNégatif = -1
    const sommeDuNombreEnPositif = 1 + 1
    const sommeNégative = -sommeDuNombreEnPositif
    expect(fastSum(nombreNégatif, nombreNégatif)).toEqual(sommeNégative);

    // expect(fastSum(-1, -1)).toEqual(-(1 + 1));

  });

  test("mixed", () => {
    expect(() => fastSum(10, -11)).toThrowError();
  });

  test("not possible", () => {
    expect(() => fastSum(10, 11)).toThrowError();
  });
});
