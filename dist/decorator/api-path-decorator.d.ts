export declare const Path: (pathParameterName: string) => ParameterDecorator;
export declare const getPathParametersMeta: (target: any, propertyKey: string | symbol) => [{
    parameterIndex: number;
    pathParameter: string;
}];
