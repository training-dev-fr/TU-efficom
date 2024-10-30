const {executeExpression} = require('./../src/parser');
jest.mock('./../src/math', () => ({
    sum: jest.fn(() => 25),
    substract: jest.fn(() => 15),
    multiply: jest.fn(() => 20),
    divide: jest.fn(() => 0.25)
}));
const { sum,substract,multiply,divide } = require('./../src/math');

describe("When i try to parse an expression", () => {
    test("And the expression is a sum",() =>{
        let expression = "17+8";
        let result = executeExpression(expression);
        expect(sum).toHaveBeenCalledTimes(1);
        expect(result).toBe(25);
    });

    test("And the expression is a substract",() =>{
        let expression = "17-8";
        let result = executeExpression(expression);
        expect(substract).toHaveBeenCalledTimes(1);
        expect(result).toBe(15);
    });

    test("And the expression is a multiply",() =>{
        let expression = "5*4";
        let result = executeExpression(expression);
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(result).toBe(20);
    });

    test("And the expression is a divide",() =>{
        let expression = "1/4";
        let result = executeExpression(expression);
        expect(divide).toHaveBeenCalledTimes(1);
        expect(result).toBe(0.25);
    });

    test("And expression syntaxes is wrong",() =>{
        try{
        let expression = "azerty";
        let result = executeExpression(expression);
        }catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("expression parse failed");
        }
    });
});