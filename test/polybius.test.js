const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybus", () => {
    it("should encode a letter properly", () => {
        const expected = "11";
        const actual = polybius.polybius("a");
        expect(actual).to.equal(expected);
    });
    it("should decode a letter properly", () => {
        const expected = "a";
        const actual = polybius.polybius("11", false);
        expect(actual).to.equal(expected);
    });
    it("should return string in all cases", () => {
        const expected = typeof("11");
        const actual = polybius.polybius("11", false);
        expect(typeof(actual)).to.equal(expected);
    });
    it("spaces are maintained", () => {
        const expected = 'hello world'
        const actual = polybius.polybius("3251131343 2543241341", false);;
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = '3251131343';
        const actual = polybius.polybius("HeLlO");;
        expect(actual).to.equal(expected);
    });
    it("should show i/j for decoding 42", () => {
        const expected = "(i/j)";
        const actual = polybius.polybius("42", false);;
        expect(actual).to.equal(expected);
    });
    it("should show 42 for encoding i or j", () => {
        const expected = "42";
        const actual = polybius.polybius("i");
        const actual2 = polybius.polybius("j");;
        expect(actual).to.equal(expected);
        expect(actual2).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius.polybius("44324233521254134", false);
        expect(actual).to.be.false;
    })
})