type WhenTypeNull<TCheck, TReturn> = TCheck extends null ? null : TReturn;
export declare const awaitToError: <E = Error, T = unknown>(p: Promise<T>) => Promise<[WhenTypeNull<T, E>, WhenTypeNull<E, T>]>;
export {};
