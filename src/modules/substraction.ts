import { sum } from "./addition";
import { explodeNumbers } from "./utils";

function smallNumberSubstraction(a: number, b: number) {
  if (a < b) {
    throw new Error("sorry you can't substract to get a negative result");
  }

  const result = a - b;

  if (result < 0 || result > 9) {
    throw new Error("you are cheating tring to substract big numbers here");
  }

  return result;
}

export function substraction(a: number, b: number) : number {
  if (a < 0 && b < 0) {
    return substraction(-b, -a);
  }
  try {
    // Si a et b sont de signes opposés
    return sum(a, -b);
  } catch (e) {
    // a et b de même signe. On fera toujours la soustraction du plus par le plus petit.
    // Et si a < b on effectuera l'échange des paramètres en retournant un nombre négatif
    // ex: 80 - 100 = -(-80 + 100) = -(100 - 80) = -20
    if (a < b) {
      return -substraction(b, a);
    }

    // Soustraction de a >= b
    const explodes = explodeNumbers(a, b);
    let retenue = 0;

    const smallSubsConcat = explodes.map(([numA, numB]) => {
      const substractor = numB + retenue;
      const valueToSubstract = numA < substractor ? numA + 10 : numA;
      retenue = valueToSubstract > 9 ? 1 : 0;
      return smallNumberSubstraction(valueToSubstract, substractor);
    });

    const stringResult = smallSubsConcat.reverse().join("");
    const intResult = parseInt(stringResult);

    return intResult;
  }
}
