import { sum } from "./addition";


export function multiplication(a: number, b: number): number {
    if(a < 0){
        return -multiplication(-a, b);
    }

    let result = 0;

    for(let i = 0; i < Math.abs(b); i++){
        result = sum(result, a)
    }

    if(b < 0){
        return -result;
    }
    else {
        return result;
    }
}