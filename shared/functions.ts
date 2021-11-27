export const snakeToCamel = (str: string): string =>
    str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));

export const shuffle = <T>(arr: T[]): T[] =>
    arr
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
