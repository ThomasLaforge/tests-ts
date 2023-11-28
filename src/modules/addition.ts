export function sumSmallNumbers(a: number, b: number){
    if(a > 9 || a < 0 || b > 9 || b < 0){
        throw new Error("Your are cheating !")
    }
    return a + b;  
};

export function sum(numA: number, numB: number){
    return sumSmallNumbers(numA, numB);
};