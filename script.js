'use strict';


let money = +prompt("Ваш бюджет на месяц?"); 
let time = +prompt("Введите дату в формате YYYY-MM-DD");
let stateOfExpens = prompt("Введите обязательную статью расходов в этом месяце");
let howManyMoney = +prompt("Во сколько обойдется?");
let expenses = {};
expenses[stateOfExpens] = howManyMoney;
let appData = {
    byuget : money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving: false
}


alert( money/30);