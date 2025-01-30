console.log("Масив випадкових чисел:");
let mas1 = [];
for (let i = 0; i < 10; i++) {
    mas1[i] = Math.random();
    console.log(mas1[i]);
}

console.log("Масив після множення на 10:");
let mas2 = mas1.map(num => num * 10);
console.log(mas2);

console.log("Масив округлений (Math.floor, Math.round, Math.ceil):");

let mas3_floor = mas2.map(num => Math.floor(num));
let mas3_round = mas2.map(num => Math.round(num));
let mas3_ceil = mas2.map(num => Math.ceil(num));

console.log("Math.floor: ", mas3_floor);
console.log("Math.round: ", mas3_round);
console.log("Math.ceil: ", mas3_ceil);

// Используем метод filter: Оставляем числа больше 5
let filteredArray = mas2.filter(num => num > 5);
console.log("Числа більше 5:", filteredArray);

// Используем reduce: Считаем сумму элементов массива
let sum = mas2.reduce((acc, num) => acc + num, 0);
console.log("Сума елементів масиву:", sum);

// Используем find: Ищем первое число больше 8
let foundNumber = mas2.find(num => num > 8);
console.log("Перше число більше 8:", foundNumber);