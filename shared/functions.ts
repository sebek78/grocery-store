export const snakeToCamel = (str: string): string =>
    str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
