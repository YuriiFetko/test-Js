var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var expensesInMonth = prompt("Введите обязательную статью расходов в этом месяце");
var res = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        expensesInMonth: res
    },
    optionalExpenses: {

    },
    income: [],
    savings : false
};

alert( money / 30 );