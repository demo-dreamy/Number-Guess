let numbers = [];

for(let i = 1; i <= 1000; i++){

    numbers.push(i);
}

let possibleNumbers = [...numbers];

let currentFunction = null;



function numberToWords(n){

    const ones = [
        "", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];

    const teens = [
        "ten", "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy",
        "eighty", "ninety"
    ];

    if(n < 10){

        return ones[n];
    }

    if(n < 20){

        return teens[n - 10];
    }

    if(n < 100){

        let t = Math.floor(n / 10);
        let o = n % 10;

        return tens[t] + (o ? "-" + ones[o] : "");
    }

    if(n < 1000){

        let h = Math.floor(n / 100);
        let remainder = n % 100;

        return ones[h] + " hundred " +
        (remainder ? numberToWords(remainder) : "");
    }

    if(n === 1000){

        return "one thousand";
    }
}



function is_div_by_2(n){

    return n % 2 === 0;
}

function is_div_by_3(n){

    return n % 3 === 0;
}

function is_div_by_5(n){

    return n % 5 === 0;
}

function is_div_by_7(n){

    return n % 7 === 0;
}

function is_prime(n){

    if(n < 2){

        return false;
    }

    for(let i = 2; i < n; i++){

        if(n % i === 0){

            return false;
        }
    }

    return true;
}

function is_greater_than_50(n){

    return n > 50;
}

function is_perfect_square(n){

    let root = Math.floor(Math.sqrt(n));

    return root * root === n;
}

function has_two_digits(n){

    return n.toString().length === 2;
}

function is_digit_sum_even(n){

    let sum = n.toString()
    .split("")
    .reduce((a,b)=>a + Number(b),0);

    return sum % 2 === 0;
}

function is_reverse_bigger(n){

    let reversed =
    Number(n.toString().split("").reverse().join(""));

    return reversed > n;
}

function has_repeated_digits(n){

    let digits = n.toString();

    return new Set(digits).size !== digits.length;
}

function is_greater_than_75(n){

    return n > 75;
}

function is_lesser_than_25(n){

    return n < 25;
}

function starts_with_t(n){

    return numberToWords(n).startsWith("t");
}

function starts_with_f(n){

    return numberToWords(n).startsWith("f");
}

function starts_with_s(n){

    return numberToWords(n).startsWith("s");
}

function ends_with_vowel(n){

    let word = numberToWords(n);

    let last = word[word.length - 1];

    return "aeiou".includes(last);
}

function ones_digit_multiple_of_3(n){

    let digit = n % 10;

    return digit % 3 === 0;
}

function tens_digit_multiple_of_5(n){

    let digit = Math.floor(n / 10) % 10;

    return digit % 5 === 0;
}

function hundreds_digit_multiple_of_2(n){

    let digit = Math.floor(n / 100) % 10;

    return digit % 2 === 0;
}

function is_digit_sum_prime(n){

    let sum = n.toString()
    .split("")
    .reduce((a,b)=>a + Number(b),0);

    return is_prime(sum);
}

function is_greater_than_500(n){

    return n > 500;
}

function is_greater_than_700(n){

    return n > 700;
}

function is_lesser_than_200(n){

    return n < 200;
}

function has_three_digits(n){

    return n.toString().length === 3;
}

function is_greater_than_900(n){

    return n > 900;
}

function is_ones_digit_greater(n){

    if(n < 10){

        return false;
    }

    let ones = n % 10;

    let tens = Math.floor(n / 10) % 10;

    return ones > tens;
}

function is_tens_digit_lesser(n){

    if(n < 100){

        return false;
    }

    let tens = Math.floor(n / 10) % 10;

    let hundreds = Math.floor(n / 100) % 10;

    return tens < hundreds;
}

function is_hundreds_digit_greater(n){

    if(n < 100){

        return false;
    }

    let hundreds = Math.floor(n / 100) % 10;

    let ones = n % 10;

    return hundreds > ones;
}

function has_prime_digits(n){

    let primeDigits = [2,3,5,7];

    for(let digit of n.toString()){

        if(primeDigits.includes(Number(digit))){

            return true;
        }
    }

    return false;
}



let questions = [

["Is it a multiple of 2?", is_div_by_2],

["Is it divisible by 3?", is_div_by_3],

["Is it greater than 50?", is_greater_than_50],

["Is it a prime number?", is_prime],

["Is it a perfect square?", is_perfect_square],

["Does your number have two digits?", has_two_digits],

["Is the sum of its digits even?", is_digit_sum_even],

["Is the reverse of the number bigger?", is_reverse_bigger],

["Are the digits repeated?", has_repeated_digits],

["Is it greater than 75?", is_greater_than_75],

["Is it less than 25?", is_lesser_than_25],

["Does your number start with the letter 't'?", starts_with_t],

["Does your number start with the letter 'f'?", starts_with_f],

["Does your number start with the letter 's'?", starts_with_s],

["Does your number end with a vowel?", ends_with_vowel],

["Is the ones digit a multiple of 3?", ones_digit_multiple_of_3],

["Is it a multiple of 5?", is_div_by_5],

["Is the sum of the digits a prime number?", is_digit_sum_prime],

["Is it greater than 500?", is_greater_than_500],

["Is it greater than 700?", is_greater_than_700],

["Is it lesser than 200?", is_lesser_than_200],

["Does your number have 3 digits?", has_three_digits],

["Is it greater than 900?", is_greater_than_900],

["Is the ones digit greater than the tens digit?", is_ones_digit_greater],

["Is the tens digit lesser than the hunderds digit?", is_tens_digit_lesser],

["Is the hundreds digit greater than the ones digit?", is_hundreds_digit_greater],

["Is it divisible by 7?", is_div_by_7],

["Are any of the digits prime numbers?", has_prime_digits],

["Is the tens digit a multiple of 5?", tens_digit_multiple_of_5],

["Is the hundreds digit a multiple of 2?", hundreds_digit_multiple_of_2]

];



function askNextQuestion(){

    let remainingQuestions = [];

    for(let question of questions){

        let func = question[1];

        let yesGroup =
        possibleNumbers.filter(x => func(x));

        let noGroup =
        possibleNumbers.filter(x => !func(x));

        if(yesGroup.length > 0 &&
           noGroup.length > 0){

            remainingQuestions.push(question);
        }
    }

    let randomQuestion =
    remainingQuestions[
        Math.floor(Math.random()
        * remainingQuestions.length)
    ];

    document.getElementById("question")
    .innerText = randomQuestion[0];

    currentFunction = randomQuestion[1];
}



function yesAnswer(){

    possibleNumbers =
    possibleNumbers.filter(x =>
    currentFunction(x));

    checkGameStatus();
}



function noAnswer(){

    possibleNumbers =
    possibleNumbers.filter(x =>
    !currentFunction(x));

    checkGameStatus();
}



function checkGameStatus(){

    if(possibleNumbers.length === 1){

        document.getElementById("question")
        .innerText =
        "Your number is: " + possibleNumbers[0];

        document.getElementById("gameButtons")
        .style.display = "none";

        document.getElementById("playAgainButton")
        .style.display = "inline-block";
    }

    else{

        askNextQuestion();
    }
}



function startGame(){

    document.getElementById("startButton")
    .style.display = "none";

    document.getElementById("gameButtons")
    .style.display = "block";

    askNextQuestion();
}



function resetGame(){

    possibleNumbers = [...numbers];

    document.getElementById("question")
    .innerText =
    "Think of a number between 1 and 1000";

    document.getElementById("startButton")
    .style.display = "inline-block";

    document.getElementById("gameButtons")
    .style.display = "none";

    document.getElementById("playAgainButton")
    .style.display = "none";
}



document.getElementById("startButton")
.addEventListener("click", startGame);
