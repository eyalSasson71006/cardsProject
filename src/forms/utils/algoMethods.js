
export const makeFirstLetterCapital = (string) => {
    if (typeof string !== "string" || string.length === 0) {
        return string;
    }
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

