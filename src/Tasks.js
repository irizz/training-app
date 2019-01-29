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
    test: `describe("sum", function() {
        function sumTest(a,b) {
          let expected = a + b;
          it('при а = ' + a + ' и b = ' + b + ', сумма = ' + expected , function() {
            assert.equal(sum(a,b), expected);
        });
      }
      for(let a = 1; a <= 3; a++) {
        for(let b=1; b <= 2; b++) {
          sumTest(a,b);
        }
      }
    });`
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
    test: `describe("isEven", function() {
        function isEvenTest(num) {
          let expected;
          if (num % 2 == 0) {
            expected = true;
          } else {
            expected = false;
          }
          it("при num = " + num + " вернуть " + expected, function() {
            assert.equal(isEven(num), expected);
          });
        };
        for (let num = 1; num <= 5 ; num++) {
          isEvenTest(num);
        };
  
        it("тип возвращаемого значения - boolean", function() {
          let result;
          function isEvenResult() {
            result = isEven();
            return result;
          }
          isEvenResult();
          assert.typeOf(result, "boolean");
        });
      });`
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
    test: `describe('fn', function() {
        let fn = counter();
        function counterTest() {
          let count = 1;
          return function() {
            return count++
          };
        }
        let fun = counterTest();
        let res1 = fun();
        let res2 = fun();
        let res3 = fun();
        it("1-й вызов функции возвращает " + res1, function() {
          assert.equal(fn(), res1);
        });
        it("2-й вызов функции возвращает " + res2, function() {
          assert.equal(fn(), res2);
        });
        it("3-й вызов функции возвращает " + res3, function() {
          assert.equal(fn(), res3);
        });
      })`
  },
  {
    id: 4,
    complexity: "basic",
    section: "basic-2",
    description: "Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.",
    preCode: 
`function min(a,b) {
  //напишите тело функции
}`,
    codeReturn: "; return (min(a,b));",
    test: ``
  },
  {
    id: 5,
    complexity: "basic",
    section: "basic-2",
    description: "Напишите функцию countChar, которая принимает строку и символ в качестве аргумента, и возвращает количество символов, содержащихся в строке.",
    preCode: 
`function countChar(string,symbol) {
  //напишите тело функции
}`,
    codeReturn: "; return (countChar(string,symbol));",
    test: ``
  },
  {
    id: 6,
    complexity: "basic",
    section: "basic-2",
    description: "Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.",
    preCode: 
`function range(start,end) {
  //напишите тело функции
}`,
    codeReturn: "; return (range(start,end));",
    test: ``
  }
];
