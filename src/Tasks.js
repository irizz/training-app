export const Tasks = [
  {
    id: 1,
    complexity: "basic",
    section: "basic-2",
    description: "Напишите функцию sum, возвращающую сумму a и b",
    preCode: `let a = 2;
let b = 5;
function sum(a,b) {
    //напишите тело функции
}`,
    codeReturn: "; return(sum(a,b));",
    test: `describe("sum", function () {              
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
    id: 2,
    complexity: "basic",
    section: "basic-2",
    description:
      "Напишите функцию isEven, возвращающую true, если число чётное, и false, если нечётное",
    preCode: `let num = 5;
function isEven(num) {
	//напишите тело функции
}`,
    codeReturn: "; return(isEven(num));",
    test: `describe("isEven", function () {
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
    id: 3,
    complexity: "basic",
    section: "basic-2",
    description:
      "Напишите функцию counter, возвращающую 1 при первом её вызове, 2 - при втором, 3 - при третьем и т.д.",
    preCode: `function counter() {
    //напишите тело функции
}
let fn = counter();
console.log(fn()); //1
console.log(fn()); //2
console.log(fn()); //3 `,
    codeReturn: "",
    test: ""
  },
  {
    id: 4,
    complexity: "advanced",
    section: "dom",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    preCode: `//some code`,
    codeReturn: "",
    test: ``
  }
];
