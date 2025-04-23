// Modulo can't be negative
// and must be less than the divisor
// Quotient can be negative
// and can be positive or negative
// and can be zero
export function division(a: number, b: number): { modulo: number; quotient: number } {
  if (b === 0) {
      throw new Error("division by zero");
  }
  if (a === 0) {
      return { modulo: 0, quotient: 0 };
  }
  const isNegativeResult = (a < 0) !== (b < 0);
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  let quotient = 0;
  let modulo = absA;
  while (modulo >= absB) {
      modulo -= absB;
      quotient++;
  }

  if (isNegativeResult) {
      quotient = -quotient;
  }

  return { modulo, quotient };
}