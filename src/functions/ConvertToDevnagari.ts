import { nepaliUnicodes } from "@config/constant/unicode";

export const ConvertToDevanagari = (input: string): string => {
    return input.split('').map(char => nepaliUnicodes[char] || char).join('');
};
