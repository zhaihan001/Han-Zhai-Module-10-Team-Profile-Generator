const Manager = require("../lib/manager");

describe("Manager", () => {
    it("should return the value of name", () => {
        const item = 'fakename';
        const info = new Manager(item);
        expect(info.name).toEqual(item);
    })

    it("should return the value of id", () => {
        const item = 'fakeid';
        const info = new Manager('fakename',item);
        expect(info.id).toEqual(item);
    })

    it("should return the value of email", () => {
        const item = 'fakeemail';
        const info = new Manager('fakename','fakeid',item);
        expect(info.email).toEqual(item);
    })

    it("should return the value of role", () => {
        const item = 'Manager';
        const info = new Manager('fakename','fakeid','fakeemail',item);
        expect(info.role).toEqual(item);
    })

    it("should return the value of role", () => {
        const item = 'fakeofficenumber';
        const info = new Manager('fakename','fakeid','fakeemail','fakerole',item);
        expect(info.officeNumber).toEqual(item);
    })
})