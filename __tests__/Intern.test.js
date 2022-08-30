const Intern = require("../lib/intern");

describe("Intern", () => {
    it("should return the value of name", () => {
        const item = 'fakename';
        const info = new Intern(item);
        expect(info.name).toEqual(item);
    })

    it("should return the value of id", () => {
        const item = 'fakeid';
        const info = new Intern('fakename',item);
        expect(info.id).toEqual(item);
    })

    it("should return the value of email", () => {
        const item = 'fakeemail';
        const info = new Intern('fakename','fakeid',item);
        expect(info.email).toEqual(item);
    })

    it("should return the value of role", () => {
        const info = new Intern();
        expect(info.role).toEqual('Intern');
    })

    it("should return the value of role", () => {
        const item = 'fakeschool';
        const info = new Intern('fakename','fakeid','fakeemail','fakerole',item);
        expect(info.school).toEqual(item);
    })
})