import { explodeNumbers } from "./utils";

export function sumSmallNumbers(a: number, b: number): number{
    if(a > 9 || a < 0 || b > 9 || b < 0){
        throw new Error("Your are cheating !")
    }
    return a + b;  
}

export function fastSum(a: number, b: number): number {
    if(a === -b){
        return 0;
    }
    
    if(Math.abs(a) === 0){
        return b;
    }
    else if(Math.abs(b) === 0){
        return a;
    }

    if(a < 0 && b < 0){
        return -sum(-a, -b);
    }

    if(a >= 0 && a < 10 && b >= 0 && b < 10){
        return sumSmallNumbers(a, b);
    }

    throw new Error("not a fast sum")
}

// For sum of infinite parameters
// export function sum(...args){
//     if(args.length < 2){
//         return args[0] || 0 
//     }
//     else if(args.length > 2){
//         return args.reduce(
//             (total, current) => sum(total, current)
//             , 0
//         )
//     }

//     const [numA, numB] = args;

// for sum of 2 numbers only
export function sum(numA: number, numB: number): number{
    if(Math.sign(numA) * Math.sign(numB) === -1){
        throw new Error("can't sum two number with distinct sign => substraction");
    }

    try {
        return fastSum(numA, numB);
    }
    catch(e){
        const explodes = explodeNumbers(numA, numB);
        let retenue = 0;
        const smallSumsConcat = explodes.map( ([a, b], i) => {
            let result = sumSmallNumbers(a, b) + retenue;
            if(result >= 10 && i < explodes.length - 1){
                retenue = 1;
                result = result % 10;
            }
            else {
                retenue = 0;
            }
            return result;
        });
    
        const stringResult = smallSumsConcat.reverse().join('');
        const intResult = parseInt(stringResult);

        return intResult;
    }
}