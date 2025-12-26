import { validateDate } from "./validateDate";

describe("validateDate()", () => {
    test("пропускает корректную дату в формате ДД.ММ.ГГГГ", () => {
        const result = validateDate("12.03.2025");
        expect(result.isValid).toBe(true);
    });

    test("не пропускает спецсимволы", () => {
        const result = validateDate("12.@3.2025");
        expect(result.isValid).toBe(false);
        expect(result.error).toBeDefined();
    });

    test("не пропускает буквы", () => {
        const result = validateDate("aa.bb.cccc");
        expect(result.isValid).toBe(false);
    });

    test("выдаёт предупреждение, если дата раньше текущей", () => {
        const result = validateDate("01.01.2000");
        expect(result.isValid).toBe(false);
        expect(result.error).toMatch(/раньше текущей/i);
    });
});


import { validateCity } from "./validateCity";

describe("validateCity()", () => {
    test("выдаёт предупреждение при наличии экранирования (например, < или >)", () => {
        const result = validateCity("<script>");
        expect(result.isValid).toBe(false);
        expect(result.error).toBeDefined();
    });

    test("пропускает название с восклицательным знаком или дефисами (Saint-Louis-du-Ha! Ha!)", () => {
        const result = validateCity("Saint-Louis-du-Ha! Ha!");
        expect(result.isValid).toBe(true);
    });

    test("пропускает название со спецсимволами (например, Ağrı)", () => {
        const result = validateCity("Ağrı");
        expect(result.isValid).toBe(true);
    });

    test("пропускает название из одной буквы", () => {
        const result = validateCity("A");
        expect(result.isValid).toBe(true);
    });
});
