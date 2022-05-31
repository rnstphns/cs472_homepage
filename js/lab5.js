// Implement code for the following JavaScript functions, and be sure to use "use strict";
"use strict";
// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
    let maxof2 = max(num1, num2);
    return num3 > maxof2 ? num3 : maxof2;
}
// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(char) {
    let lc;
    lc = char.toLowerCase();
    if (lc == 'a' || lc == 'e' || lc == 'i' || lc == 'o' || lc == 'u')
        return true;
    else
        return false;
}
// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(array) {
    if (Array.isArray(array)) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    } else {
        return "input must be array";
    }
}

function multiply(array) {
    if (Array.isArray(array)) {
        let total = 1;
        for (let i = 0; i < array.length; i++) {
            total *= array[i];
        }
        return total;
    } else {
        return "input must be array";
    }
}
// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(string) {
    let reversed = "";
    for (let i = string.length; i >= 0; --i) {
        reversed += string.substring(i, i + 1);
    }
    return reversed;
}
// 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(strArray) {
    if (Array.isArray(strArray)) {
        let max = "";
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i].length > max.length) {
                max = strArray[i];
            }
        }
        return max.length;
        //return max;
    } else {
        return "input must be array";
    }
}
// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
function filterLongWords(strArray, lengthLimit) {
    if (Array.isArray(strArray)) {
        let filtered = [];
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i].length <= lengthLimit) {
                filtered.push(strArray[i]);
            }
        }
        return filtered;
    } else {
        return "input must be array";
    }
}
// 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
//imperitive
function computeSumOfSquares(numArr) {
    let sum = 0;
    
    if (Array.isArray(numArr)) {
        for (let i = 0; i < numArr.length; i++) {
            sum += numArr[i] * numArr[i];
        }
        return sum;
    } else {
        return "input must be array";
    }
 }

// recursive. doesn't work yet.
// function computeSumOfSquares(numArr) {
//     if (Array.isArray(numArr)) {
//         let total = 0;
//         numArr.forEach(num);{
//             total += square(num);
//         }
//         return total;
//     } else {
//         return "input must be array";
//     }
    
// }
// function square(num){
//     return num * num;
// }

// 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
function printOddNumbersOnly(arr) {
    if (Array.isArray(arr)) {
        let odds = [];
        arr.forEach((element) => {
            if(!(element % 2 == 0))
                odds.push(element);  
        });
        console.log(odds);
    } else {
        return "input must be array";
    }

}
// 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly(arr) {
    if (Array.isArray(arr)) {
        let sum = 0;
        arr.forEach((element) => {
           if(element % 2 == 0)
            sum += element * element; 
        });
        return sum;
    } else {
        return "input must be array";
    }
}
// 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. 
function reduceSum(arr) {
    if (Array.isArray(arr)) {
        const sumTotal = arr.reduce(
            (prev, current) => prev + current
        );
        return sumTotal;
    } else {
        return "input must be array";
    }
}

function reduceMult(arr) {
    if (Array.isArray(arr)) {
        const init = 1;
        const sumTotal = arr.reduce(
            (prev, current) => prev * current, init
        );
        return sumTotal;
    } else {
        return "input must be array";
    }
}

// 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
function findSecondBiggest(arr) {
    if (Array.isArray(arr)) {
        let max = Math.max.apply(null, arr),
            maxi = arr.indexOf(max);
        arr[maxi] = -Infinity;
        let secondMax = Math.max.apply(null, arr);
        return secondMax;
    } else {
        return "input must be array";
    }
}
// 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence,
// e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
// printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
//printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; 
//and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

//could use some validation that a and b are in the Fibonacci sequence, but not sure how to check that without generating/importing the entire sequence
function printFibo(n, a, b) {
    const fib = [a, b];
    if (n == 0) return;

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    for (let j = fib.indexOf(a); j < n; j++) {
        console.log(fib[j]);
    }
}
//Test Code section:
alert("Check the console for function test results");

console.log("Max of 3 and 5");
console.log(max(3, 5));
console.log("Max of 3, 5 and 7");
console.log(maxOfThree(3, 5, 7));
console.log("Is 'a' a vowel?");
console.log(isVowel("a"));
console.log("Is 'q' a vowel?");
console.log(isVowel("q"));
console.log("Is '123' a vowel?");
console.log(isVowel("123"));
console.log("Adding 1 + 2 + 3");
console.log(sum([1, 2, 3]));
console.log("Multiplying 4 * 5 * 6");
console.log(multiply([4, 5, 6]));
console.log("Adding garbage:");
console.log(sum(['garbage', 'man', ['garbange', 'truck']]));
console.log(sum('garbage'));
console.log("Reversing 'Hello'");
console.log(reverse('Hello'));
const peace = ['hello', 'we', 'come', 'in', 'peace'];
console.log("Longest Word out of ['hello','we','come','in','peace']");
console.log(findLongestWord(peace));
console.log("Filtered for words <5 letters")
console.log(filterLongWords(peace, 4));
console.log("Sum of Squares 1^2 + 2^2 + 3^2 = 14");
console.log(computeSumOfSquares([1, 2, 3]));
console.log("Odds from [1,2,3,4,5,6]");
printOddNumbersOnly([1, 2, 3, 4, 5, 6]);
console.log("Sum of Evens from [1,2,3,4,5] should be computed as 2^2 + 4^2 = 20");
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));
console.log("Sum using reduce [1,2,3,4,5,6]");
console.log(reduceSum([1, 2, 3, 4, 5, 6]));
console.log("Product using reduce [1,2,3,4,5,6]");
console.log(reduceMult([1, 2, 3, 4, 5, 6]));
console.log("Second biggest of [12,11,22,33,4]");
console.log(findSecondBiggest([12, 11, 22, 33, 4]));
console.log("printFibo(n=1, a=0, b=1), prints-out: '0'");
printFibo(1, 0, 1);
console.log("printFibo(n=6, a=0, b=1), prints-out: '0, 1, 1, 2, 3, 5  as output).");
printFibo(6, 0, 1);
console.log("printFibo(n=10, a=13, b=21)");
printFibo(10, 13, 21);
// 14. Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:

// a. Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
// b. New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.

//Embedded (inline) in the respective html files

// 15. Using JavaScript and HTML and CSS, implement a webpage that displays a working, ticking counter Clock, that counts/displays the current Date and time of the browser host, in the format: 2019-11-4 12:16:01  

//Embedded (inline) in scriptTest.html

// Please submit your code as a single zip file attachment to Sakai and also push it to your github repository.
//-- Enjoy! --//