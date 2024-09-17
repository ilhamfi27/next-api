export function getCaller() {
    const indexAppRoute = __dirname.indexOf('/app/') ;
    const indexApiRoute = __dirname.indexOf('/pages/api/');
    const n = __dirname.substring(indexAppRoute !== -1 ? indexAppRoute+5 : indexApiRoute+11, __dirname.length);
    return n;
}