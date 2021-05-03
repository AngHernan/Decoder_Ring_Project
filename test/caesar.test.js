const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

console.log(caesar.caesar('thinkful',0))


describe("caesar", () => {
    describe("should return given phrase decoded/encoded by shifting the letters of the alphabet to the left(negative) or righ(positive) by the given value", () => {
        it("should return false if shift amount is 0", () =>{
            const expected = false;
            const actual = caesar.caesar("thinkful", 0);
            expect(actual).to.equal(expected);
        });
        it("should return false if shift value is greater than 25", () => {
            const expected = false;
            const actual = caesar.caesar("thinkful", 26);
            expect(actual).to.equal(expected);
        });
        it("should return false if shift value is less than -25", () => {
            const expected = false;
            const actual = caesar.caesar("thinkful", -26);
            expect(actual).to.equal(expected);
        });
        it("should encode any letter correctly", () => {
            const expected = 'w';
            const actual = caesar.caesar("t", 3);
            console.log(actual);
            expect(actual).to.equal(expected);
        });
        it("should decode if false or encode if true for encode parameter", () => {
            const expected = 'wklqnixo';
            const actual = caesar.caesar("thinkful", 3);
            console.log(actual)
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const expected = 'wklqnixo';
            const actual = caesar.caesar("Thinkful", 3);
            console.log(actual)
            expect(actual).to.equal(expected);
        });
        it("should wrap around the alphabet", () => {
            const expected = 'bpqvsnct';
            const actual = caesar.caesar("thinkful", 8);
            console.log(actual)
            expect(actual).to.equal(expected);
        });
        it("should ignore spaces and maintain punctuation", () => {
            const expected = 'qefkh cri!';
            const actual = caesar.caesar("think ful!", -3);
            console.log(actual)
            expect(actual).to.equal(expected);
        });
        it("should return phrase decoded properly", () => {
            const expected = 'this is a secret message!';
            const actual = caesar.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
            console.log(actual)
            expect(actual).to.equal(expected);
        });
        it("should encode correctly to the left if given negative number", () => {
            const expected = 'qefkhcri';
            const actual = caesar.caesar("thinkful", -3);
            console.log(actual)
            expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift to the left", () => {
            const expected = 'zebra magazine';
            const actual = caesar.caesar('gliyh thnhgpul' , -7);
            expect(actual).to.equal(expected);
        });
    })
})