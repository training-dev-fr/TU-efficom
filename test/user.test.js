const { connect, auth } = require("./../src/user.js");

describe('When i try to connect', () => {
    test('by login and password valid, then i should be connected', () => {
        expect(connect("Aurélien", "123456")).toEqual({ success: true });
    });
    test('by login invalid, then i should have an error', () => {
        expect(connect("Aurlien", "123456")).toStrictEqual({ success: false });
    });
    test('by password invalid, then i should have an error', () => {
        expect(connect("Aurélien", "12346")).toStrictEqual({ success: false });
    });
})

beforeEach(() => {
    jest.resetAllMocks();
    global.localStorage = {};
    global.localStorage.addItem = jest.fn();
})

describe('When i try to authentified', () => {
    test('with valid login and password', async () => {
        global.fetch = jest.fn();
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                firstname: "Aurélien",
                lastname: "Vaast",
                login: "avaast"
            }),
            ok: true
        });
        let spyStorage = jest.spyOn(localStorage,'addItem');
        await auth("aurelien", "123456");
        expect(global.fetch).toHaveBeenCalled();
        expect(spyStorage).toHaveBeenCalled();
});

test('with invalid login and/or password', () => {

});

test('with error during fetch', () => {

});
})