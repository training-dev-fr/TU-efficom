const {executeExpression} = require('./../src/parser');



describe("When i try to parse an expression", () => {
    test("And the expression is an sum",() =>{
        let expression = "17+8";
        jest.mock('./../src/math', () => ({
            sum: jest.fn(() => 25)
        }));
        const { sum } = require('./../src/math');
        let result = executeExpression(expression);
        expect(sum).toHaveBeenCalledTimes(1);
        expect(result).toBe(25);
    })
})