/*
    let a = prompt("Введите число:");
    a = Number(a);

    if (a > 100) {
        alert("Вы ввели число больше 100");
    } else if (a == 100) {
        alert("Вы ввели число 100");
    } else {
        alert("Число меньшe 100");
    }
    
    // alert("End program!");
*/

/*
    let age = prompt("Введите свой возраст:");
    age = Number(age);
    let text;


    if (age >= 18) {
        text = "Пользователь совершеннолетний";
    } else {
        text = "Пользователь ребенок";
    }

    // text = (age >= 18) ? "Пользователь совершеннолетний" : "Пользователь ребенок";

    alert(text);
*/

/*
    let a = prompt("Введите число");

    // a = a ?? "не указанно";

    if (a === undefined || a === null) {
        a = "не указанно";
    }

    alert("Вы ввели число: " + a);
*/

let a = +prompt("Число 1:");
let b = +prompt("Число 2:");
let o = prompt("Укажите оператор (+, -, *, /):");

// if (o == "+") {
//     alert(a + b);
// } else if (o == "-") {
//     alert(a - b);
// } else if (o == "*") {
//     alert(a * b);
// } else {
//     alert(a / b);
// }

switch (o) {
    case "+":
        alert(a + b);
        break;
    case "-":
        alert(a - b);
        break;
    case "*":
        alert(a * b);
        break;
    default:
        alert(a / b);
        break;
}