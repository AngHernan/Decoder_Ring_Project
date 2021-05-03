const substitution = require("../src/substitution")
const { expect } = require("chai");

describe("substitution", () => {
    it("should encode input by given alphabet", () => {
        const expected = 'jrufscpw'; 
        const actual = substitution.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    });
    it("should maintain spaces", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    });
    it("should decode input by given alphabet", () => {
        const expected = 'thinkful'
        const actual = substitution.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
    it("should encode with special symbols", () => {
        const expected = "y&ii$r&";
        const actual = substitution.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });
    it("should decode with special symbols", () => {
        const expected = "message";
        const actual = substitution.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });
    it("return false if given alphabet less than 26 characters", () => {
        const expected = false;
        const actual = substitution.substitution("thinkful", "short"); 
        expect(actual).to.equal(expected);
    });
    it("should return false if given alphabet reapeats characters", () => {
        const expected = false;
        const actual = substitution.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.equal(expected);
    });
    })