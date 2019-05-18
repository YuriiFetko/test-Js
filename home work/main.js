let money , time;

function start (){
    money = +prompt("Ваш бюджет на месяц ?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц ?");
    }
}
start();

var appData = {
    budget:money,   
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving : true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
             b = prompt("Во сколько обойдется?", '');
             if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                 appData.expenses[a] = b;
                 console.log('done');
             }
             else{
                i--;
             }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ежедневный бюджет ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка");
        }
        else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
            console.log('Средний уровень достатка');
        }
        else if(appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        }
        else { 
            console.log('Полизошла ошибка');
        }
    },
    checkSaving: function(){
        if (appData.saving == true) {
            let save = +prompt('какова сумма накопления ?');
            let percent = +prompt('Под какой процент ?');
            
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита : ' + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++) {
            let optExp = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = optExp;
        }
    },
    chooseIncome: function(){
            let items = prompt('Что принесет допольнительный доход? (Перечислите через запятую)', '');
            
            if (typeof(items) != 'string' || typeof(items) == null || items == '') {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            }
            else{
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
            }   
        
        appData.income.forEach( function(item, i){
            alert("Способы доп. заработка: " + (i+1) + ': ' + item);
        });
    }
 };
 console.log(appData);

 for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
 }
