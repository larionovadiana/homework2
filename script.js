// 1
function checkNumber(number) {
    if (number > 0) {
        console.log("Число положительное");
    } else if (number < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Это ноль");
    }

    if (number % 2 == 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}

checkNumber(7);

// 2
const numbers = [4, 8, 15, 16, 23, 42];

let sum = 0;
let max = numbers[0];
let newArray = [];

for (let i = 0; i < numbers.length; i++) {

    sum = sum + numbers[i];

    if (numbers[i] > max) {
        max = numbers[i];
    }

    if (numbers[i] > 10) {
        newArray.push(numbers[i]);
    }
}

console.log("Сумма:", sum);
console.log("Самое большое число:", max);
console.log("Числа больше 10:", newArray);

let sum2 = numbers.reduce((a, b) => a + b, 0);

let max2 = Math.max(...numbers);

let newArray2 = numbers.filter(number => number > 10);

console.log("Сумма через методы:", sum2);
console.log("Максимум через методы:", max2);
console.log("Новый массив через методы:", newArray2);

// 3
const students = [
    { name: "Аня", grade: 5 },
    { name: "Маша", grade: 4 },
    { name: "Петя", grade: 3 },
    { name: "Катя", grade: 5 },
    { name: "Дима", grade: 4 }
];

let sumStudents = 0;

console.log("Ученики с оценкой выше 4:");

for (let i = 0; i < students.length; i++) {

    if (students[i].grade > 4) {
        console.log(students[i].name);
    }

    sumStudents = sumStudents + students[i].grade;
}

let average = sumStudents / students.length;

console.log("Средняя оценка:", average);

// 4
function guessNumber() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let answer = Number(prompt("Угадай число от 1 до 10"));

    if (answer === secretNumber) {
        alert("Ты угадал!");
    } else if (answer < secretNumber) {
        alert("Загаданное число больше. Ответ: " + secretNumber);
    } else {
        alert("Загаданное число меньше. Ответ: " + secretNumber);
    }
}

guessNumber();
