const {executeExpression} = require('./../src/parser');
jest.mock('./../src/math', () => ({
    sum: jest.fn(() => 25) 
}));


describe("When i try to parse an expression", () => {
    test("And the expression is an sum",() =>{
        let expression = "17+8";

        const { sum } = require('./../src/math');
        let result = executeExpression(expression);
        expect(sum).toHaveBeenCalledTimes(1);
    })
})