const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should return the value of name", () => {
        const item = 'fakename';
        const info = new Employee(item);
        expect(info.name).toEqual(item);
    })

    it("should return the value of id", () => {
        const item = 'fakeid';
        const info = new Employee( 'fakename',item);
        expect(info.id).toEqual(item);
    })

    it("should return the value of email", () => {
        const item = 'fakeemail';
        const info = new Employee('fakename','fakeid',item);
        expect(info.email).toEqual(item);
    })

    it("should return the value of role", () => {
        const item = 'fakerole';
        const info = new Employee('fakename','fakeid','fakeemail',item);
        expect(info.role).toEqual(item);
    })
})