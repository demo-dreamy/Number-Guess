let numbers = [];

for (let i = 1; i <= 100; i++) {

    numbers.push(i);
}

let possibleNumbers = [...numbers];

let currentFunction;

const questionText = document.getElementById("question");

const doneButton = document.getElementById("doneButton");

const yesButton = document.getElementById("yesButton");

const noButton = document.getElementById("noButton");

const playAgainButton = document.getElementById("playAgainButton");

const madeBy = document.getElementById("madeBy");


// QUESTION FUNCTIONS

function isDivBy2(n) {

    return n % 2 === 0;
}

function isDivBy3(n) {

    return n % 3 === 0;
}

function isDivBy5(n) {

    return n % 5 === 0;
}

function isPrime(n) {

    if (n < 2) {

        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {

            return false;
        }
    }

    return true;
}

function isGreaterThan50(n) {

    return n > 50;
}

function isPerfectSquare(n) {

    let squareRoot = Math.floor(Math.sqrt(n));

    return squareRoot * squareRoot === n;
}

function hasTwoDigits(n) {

    return String(n).length === 2;
}

function isDigitSumEven(n) {

    let digitSum = String(n)
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);

    return digitSum % 2 === 0;
}

function isReverseBigger(n) {

    let reversedNumber = Number(
        String(n).split("").reverse().join("")
    );

    return reversedNumber > n;
}

function hasRepeatedDigits(n) {

    let digits = String(n);

    return new Set(digits).size !== digits.length;
}

function isGreaterThan75(n) {

    return n > 75;
}

function isLessThan25(n) {

    return n < 25;
}

function startsWithT(n) {

    let word = numberToWords(n);

    return word.startsWith("t");
}

function startsWithF(n) {

    let word = numberToWords(n);

    return word.startsWith("f");
}

function startsWithS(n) {

    let word = numberToWords(n);

    return word.startsWith("s");
}

function endsWithVowel(n) {

    let word = numberToWords(n);

    let lastLetter = word[word.length - 1];

    return "aeiou".includes(lastLetter);
}

function onesDigitMultipleOf3(n) {

    let onesDigit = n % 10;

    return onesDigit % 3 === 0;
}


// SIMPLE NUMBER WORDS

function numberToWords(n) {

    const ones = [

        "",

        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];

    const teens = [

        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const tens = [

        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (n < 10) {

        return ones[n];
    }

    if (n < 20) {

        return teens[n - 10];
    }

    if (n < 100) {

        let tenDigit = Math.floor(n / 10);

        let oneDigit = n % 10;

        if (oneDigit === 0) {

            return tens[tenDigit];
        }

        return tens[tenDigit] + "-" + ones[oneDigit];
    }

    if (n === 100) {

        return "one hundred";
    }
}

// QUESTIONS

const questions = [

    ["Is it divisible by 2?", isDivBy2],
    ["Is it divisible by 3?", isDivBy3],
    ["Is it divisible by 5?", isDivBy5],
    ["Is it greater than 50?", isGreaterThan50],
    ["Is it a prime number?", isPrime],
    ["Is it a perfect square?", isPerfectSquare],
    ["Does your number have two digits?", hasTwoDigits],
    ["Is the sum of its digits even?", isDigitSumEven],
    ["Is the reverse of the number bigger?", isReverseBigger],
    ["Are the digits repeated?", hasRepeatedDigits],
    ["Is it greater than 75?", isGreaterThan75],
    ["Is it less than 25?", isLessThan25],
    ["Does your number start with the letter 't'?", startsWithT],
    ["Does your number start with the letter 'f'?", startsWithF],
    ["Does your number start with the letter 's'?", startsWithS],
    ["Does your number end with a vowel?", endsWithVowel],
    ["Is the ones digit a multiple of 3?", onesDigitMultipleOf3]
];


// GAME LOGIC

function askNextQuestion() {

    let remainingQuestions = [];

    for (let question of questions) {

        let questionFunction = question[1];

        let yesGroup = possibleNumbers.filter(x => questionFunction(x));

        let noGroup = possibleNumbers.filter(x => !questionFunction(x));

        if (yesGroup.length > 0 && noGroup.length > 0) {

            remainingQuestions.push(question);
        }
    }

    let question = remainingQuestions[
        Math.floor(Math.random() * remainingQuestions.length)
    ];

    questionText.innerText = question[0];

    currentFunction = question[1];
}

function checkGameStatus() {

    if (possibleNumbers.length === 1) {

        questionText.innerText =
            "Your number is: " + possibleNumbers[0];

        yesButton.style.display = "none";

        noButton.style.display = "none";

        playAgainButton.style.display = "inline-block";

        madeBy.style.display = "block";
    }

    else {

        askNextQuestion();
    }
}

function yesAnswer() {

    possibleNumbers = possibleNumbers.filter(x =>
        currentFunction(x)
    );

    checkGameStatus();
}

function noAnswer() {

    possibleNumbers = possibleNumbers.filter(x =>
        !currentFunction(x)
    );

    checkGameStatus();
}

function startGame() {

    doneButton.style.display = "none";

    yesButton.style.display = "inline-block";

    noButton.style.display = "inline-block";

    askNextQuestion();
}

function resetGame() {

    possibleNumbers = [...numbers];

    questionText.innerText =
        "Think of a number between 1 and 100";

    doneButton.style.display = "inline-block";

    yesButton.style.display = "none";

    noButton.style.display = "none";

    playAgainButton.style.display = "none";

    madeBy.style.display = "none";
}


// BUTTON EVENTS

doneButton.onclick = startGame;

yesButton.onclick = yesAnswer;

noButton.onclick = noAnswer;

playAgainButton.onclick = resetGame;