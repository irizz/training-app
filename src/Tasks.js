export const Tasks = [
    {
        'id': 1,
        'complexity': 'basic',
        'section': 'basic-2',
        'description': 'Напишите функцию sum, возвращающую сумму a и b',
        'preCode': 
`let a = 2;
let b = 5;
function sum(a,b) {
    //напишите тело функции
}`,
        'codeReturn': '; return(sum(a,b));',
        'test': 
            `describe("sum", function () {              
                it("выводит сумму 2 и 5 ", function () {
                    assert.equal(sum(2, 5), 7);
                }); 
                it("выводит сумму 20 и 10 ", function () {
                    assert.equal(sum(20, 10), 30);
                }); 
                it("тип данных sum - функция", function () {
                    assert.typeOf(sum, 'function');
                });
            })`
    },
    {
        'id': 2,
        'complexity': 'basic',
        'section': 'basic-2',
        'description': 'Напишите функцию isEven, возвращающую true, если число чётное, и false, если нечётное',
        'preCode': 
`let num = 5;
function isEven(num) {
	//напишите тело функции
}`,
        'codeReturn': '; return(isEven(num));',
        'test': 
            `describe("isEven", function () {
                it("2 - чётное", function () {
                    assert.equal(isEven(2), true);
                });
                it("1 - нечётное", function () {
                    assert.equal(isEven(1), false);
                });
                it("тип возвращаемого значения - boolean", function() {
                let result;
                function isEvenResult(){
                    result = isEven();
                    return result;
                };
                isEvenResult();
                assert.typeOf(result, 'boolean' )
                })
            })`
    },
    {
        'id': 3,
        'complexity': 'basic',
        'section': 'basic-2',
        'description': 'Напишите функцию counter, возвращающую 1 при первом её вызове, 2 - при втором, 3 - при третьем и т.д.',
        'preCode': 
`function counter() {
    //напишите тело функции
}
let fn = counter();
console.log(fn()); //1
console.log(fn()); //2
console.log(fn()); //3 `,
        'codeReturn': '',
        'test': ''
    }
]