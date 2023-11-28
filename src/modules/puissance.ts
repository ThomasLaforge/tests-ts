import { multiplication } from "./multiplication";

export function puissance(a: number, b: number): number {
  if (b === 0) {
    return 1;
  }

  if (b === 1) {
    return a;
  }

  if (b < 0) {
    throw new Error("negative exponent");
  }

  let result = a;

  for (let i = 1; i < b; i++) {
    result = multiplication(result, a);
  }

  return result;
}