export const TASKS = Object.freeze([
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
      "Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.",
    preCode: `function min(a,b) {
  //напишите тело функции
}`,
    codeReturn: "; return (min(a,b));",
    test: `describe('min', function() {
      function minTest(a,b) {
        let res;
        (a-b) < 0 ?
        res = a :
        res = b;
        it('при a = ' + a + ' и b = ' + b + ', меньшее ' + res, function() {
          assert.equal(min(a,b), res);
        });
      }
    for(let a = -1; a <= 2; a++) {
      for(let b = -1; b <= 1; b++) {
        minTest(a,b);
      }
    }
  });`
  },
  {
    id: 4,
    complexity: "basic",
    section: "basic-2",
    description:
      "Напишите функцию countChar, которая принимает строку и символ в качестве аргумента, и возвращает количество символов, содержащихся в строке.",
    preCode: `function countChar(string,symbol) {
  //напишите тело функции
}`,
    codeReturn: "; return (countChar(string,symbol));",
    test: `describe('countChar', function() {
      function countCharTest(string,symbol) {
        let res = 0;
        for(let i=0; i<string.length; i++) {
          if(string.charAt(i) == symbol) {
            res++
          }
        }
        it('количество символов "' + symbol + '" в строке "' + string + '" равно ' + res, function() {
          assert.equal(countChar(string,symbol), res);
        });
      }
      countCharTest('I love cookies', 'o');
      countCharTest('I love cookies', ' ');
      countCharTest('8-800-555-35-35', '5');
      countCharTest('8-800-555-35-35', '-');
    
  });`
  },
  {
    id: 5,
    complexity: "basic",
    section: "basic-2",
    description:
      "Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.",
    preCode: `function range(start,end) {
  //напишите тело функции
}`,
    codeReturn: "; return (range(start,end));",
    test: `describe('range', function() {
      function rangeTest(start,end) {
        let arr = [];
        if (end - start > 0) {
          for(let i=start; i<end+1; i++) {
            arr.push(i);
          }
        } else {
          for(let i = end; i< start+1; i++) {
            arr.unshift(i);
          }
        }
        it('при start равном ' + start + ' и end равном ' + end + ', результат равен [' + arr + ']', function() {
          assert.sameOrderedMembers(range(start,end), arr);
        });
      }
      rangeTest(-1,5);
      rangeTest(5, 0);
      rangeTest(100, 96);
      rangeTest(12, 15);  
  });`
  }
]);
