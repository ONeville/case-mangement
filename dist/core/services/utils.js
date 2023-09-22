"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUtils = void 0;
class AppUtils {
    static generateRandomNumber(min, max) {
        const randomDecimal = Math.random();
        const randomInRange = min + randomDecimal * (max - min);
        return Math.floor(randomInRange);
    }
    static generateRandomWord(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomWord = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
        }
        return randomWord;
    }
    static generateRandomDOB(minAge, maxAge) {
        if (minAge >= maxAge) {
            throw new Error('Invalid age range: minAge should be less than maxAge.');
        }
        const currentYear = new Date().getFullYear();
        const minBirthYear = currentYear - maxAge;
        const maxBirthYear = currentYear - minAge;
        const randomBirthYear = Math.floor(Math.random() * (maxBirthYear - minBirthYear + 1) + minBirthYear);
        const randomMonth = Math.floor(Math.random() * 12) + 1;
        const randomDay = Math.floor(Math.random() * 28) + 1;
        const randomDOB = new Date(randomBirthYear, randomMonth - 1, randomDay);
        return randomDOB;
    }
}
exports.AppUtils = AppUtils;
//# sourceMappingURL=utils.js.map