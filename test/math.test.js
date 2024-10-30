let {sum,divide,executeExpression,checkNumber} = require("./../src/math.js");

test('When i try to add 2 numbers, then i should have the sum result',() =>{
    expect(sum(1,5)).toBe(6);
});

describe('When i try to divide', () => {
    test('by zero, then i should have the result false', () => {
        expect(divide(5, 0)).toBe(false);
    });
    
    test('with non zero divisor, then i should have the operation result.', () => {
        expect(divide(10, 2)).toBe(5);
    });
})

describe('When checking a number', () => {
    test('entier, pair, négatif',()=>{
        expect(checkNumber(-4)).toEqual({ integer: true, positiv: false, even: true });
        expect(checkNumber(-6)).toEqual({ integer: true, positiv: false, even: true });
        expect(checkNumber(-154)).toEqual({ integer: true, positiv: false, even: true });
    })
    test('entier, impair, négatif',()=>{
        expect(checkNumber(-3)).toEqual({ integer: true, positiv: false, even: false });
    })
    test('entier, pair, positif',()=>{
        expect(checkNumber(2)).toEqual({ integer: true, positiv: true, even: true });
    })
    test('entier, impair, positif',()=>{
        expect(checkNumber(7)).toEqual({ integer: true, positiv: true, even: false });
    })
    test('décimal, positif',()=>{
        expect(checkNumber(8.5)).toEqual({ integer: false, positiv: true, even: null });  
    })
    test('décimal, négatif',()=>{
        expect(checkNumber(-8.5)).toEqual({ integer: false, positiv: false, even: null });  
    })
    test('NaN',()=>{
        try{
            let result = checkNumber("t");
        }
        catch(e){
            expect(e).not.toBeNull();
            expect(e.message).toBe("pas un nombre");
        }
    });
})

