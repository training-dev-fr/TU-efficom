const {connect} = require("./../src/user.js");

describe('When i try to connect', () => {
    test('by login and password valid, then i should be connected', () => {
        expect(connect("Aurélien","123456")).toStrictEqual({success :false});
    });
    test('by login invalid, then i should have an error', () => {
        expect(connect("Aurlien","123456")).toStrictEqual({success :false});
    });
    test('by password invalid, then i should have an error', () => {
        expect(connect("Aurélien","12346")).toStrictEqual({success :false});
    });
})