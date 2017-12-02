export declare function Assert(condition: boolean, invert: boolean, value: any, assertion: string, details: string): void;
export declare function isSameType(target: any, value: any, invert?: boolean): void;
export declare function isSameTypeName(target: string, value: string, invert?: boolean): void;
export declare function isEqual(target: any, value: any, invert?: boolean): void;
export declare function isSymbol(value: string, invert?: boolean): void;
export declare function isBoolean(value: string, invert?: boolean): void;
export declare function isString(value: string, invert?: boolean): void;
export declare function isNumber(value: number, invert?: boolean): void;
export declare function isInt(value: number, invert?: boolean): void;
export declare function isFloat(value: number, invert?: boolean): void;
export declare function isEqualTo(target: number, value: number, invert?: boolean): void;
export declare function isGreaterThan(target: number, value: number, invert?: boolean): void;
export declare function isGreaterThanOrEqualTo(target: number, value: number, invert?: boolean): void;
export declare function isLessThanOrEqualTo(target: number, value: number, invert?: boolean): void;
export declare function isLessThan(target: number, value: number, invert?: boolean): void;
export declare function isArray(value: any[], invert?: boolean): void;
export declare function isNull(value: any, invert?: boolean): void;
export declare function isObject(value: any, invert?: boolean): void;
export declare function isUndefined(value: number, invert?: boolean): void;
export declare function isRegEx(regEx: RegExp, value: string, invert?: boolean): void;
