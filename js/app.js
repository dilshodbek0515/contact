// N1

// {
//     function age(num) {
//         if (num >= 18) {
//             return "Kattasiz"
//         } else {
//             return "Kichigsiz"
//         }
//     }

//     console.log(age(10));

// }


// N2

// {
//     function age(mus, man) {
//         let a = 0
//         if (mus > 0) a++
//         if (man < 0) a++
//         return a
//     }

//     console.log(age(10, -8));
// }


// N3

// {
//     function age(a, b, d) {
//         let musbat = 0
//         if (a > 0) musbat++
//         if (b > 0) musbat++
//         if (d > 0) musbat++
//         return musbat
//     }

//     console.log(age(10, -8, 10));
// }


// N4

// {
//     function checkOddEven(numbers) {
//         return numbers.map(num => {
//             if (num % 2 === 0) {
//                 return ${ num } - juft;
//             } else {
//                 return ${ num } - toq;
//             }
//         }).join(', ');
//     }

//     const inputNumbers = [1, 6];
//     const result = checkOddEven(inputNumbers);
//     console.log(result);

// }


// N5

// {
//     function processNumber(num) {
//         if (num % 2 === 0) {
//             return num / 2
//         } else {
//             return num * 2;
//         }
//     }

//     const inputNumbers = [7, 6];
//     const results = inputNumbers.map(processNumber);

//     console.log(results);

// }


// N6

// {
//     function processNumber(num) {
//         if (num === 0) {
//             return 10;
//         } else if (num > 0) {
//             return num + 1;
//         } else {
//             return num - 2;
//         }
//     }

//     const inputNumbers = [0, 5, -3];
//     const results = inputNumbers.map(processNumber);

//     console.log(results);

// }


// N7
// {
//     function compareNumbers(num1, num2) {
//         if (num1 > num2) {
//             return [num1, num2];
//         } else {
//             return [num2, num1];
//         }
//     }

//     const num1 = 7;
//     const num2 = 3;
//     const result = compareNumbers(num1, num2);

//     console.log(result);

// }



// N8

// {
//     function processNumber(num) {
//         if (num > 0 && num % 2 === 0) {
//             return num + 1;
//         } else {
//             return num;
//         }
//     }

//     const inputNumbers = [8, 7, -6];
//     const results = inputNumbers.map(processNumber);
//     console.log(results);
// }



// N9

// {
//     function value(a, b) {
//         let max = (a > b) ? a : b;
//         return max * 10;
//     }

//     let a = 5;
//     let b = 8;
//     console.log(value(a, b));
// }


// N10

// {
//     function countOddEven(a, b, c) {
//         let numbers = [a, b, c];
//         let evenCount = numbers.filter(num => num % 2 === 0).length;
//         let oddCount = 3 - evenCount;
//         return { odd: oddCount, even: evenCount };
//     }

//     let result = countOddEven(7, 1, 3);
//     console.log(`Toq sonlar: ${result.odd}, Juft sonlar: ${result.even}`);
// }
