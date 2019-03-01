interface IOverloads {
    (param1: string, param2: object): string;
    (param2: object, param1: string): string;
}

export const overloadedArrFun: IOverloads = (param1: any, param2: any): any => {
    return param1;
};

const ret = overloadedArrFun({}, 'lala');

console.log(ret);

interface IOverloads2 {
    (param1: string, param2: object, param3?: number): object;
    (param1: string, param3: number): number;
}

export const overloadedArrFun2: IOverloads2 = (param1: any, param2: any, param3?: any): any => {
    return param2;
};

const ret2 = overloadedArrFun2('lala', 2);

console.log(ret2);
