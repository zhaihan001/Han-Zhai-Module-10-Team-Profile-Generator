const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("should return the value of name", () => {
        const item = 'fakename';
        const info = new Engineer(item);
        expect(info.name).toEqual(item);
    })

    it("should return the value of id", () => {
        const item = 'fakeid';
        const info = new Engineer('fakename',item);
        expect(info.id).toEqual(item);
    })

    it("should return the value of email", () => {
        const item = 'fakeemail';
        const info = new Engineer('fakename','fakeid',item);
        expect(info.email).toEqual(item);
    })

    it("should return the value of role", () => {
        const info = new Engineer();
        expect(info.role).toEqual('Engineer');
    })

    it("should return the value of role", () => {
        const item = 'fakegithub';
        const info = new Engineer('fakename','fakeid','fakeemail','fakerole',item);
        expect(info.github).toEqual(item);
    })
})