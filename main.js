var money = +prompt("Ваш бюджет на месяц ?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

 var appData = {
    budget:money,   
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving : false
 };

 let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
 a2 = prompt("Во сколько обойдется?", ''),
 a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
 a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

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
};

// let i=0;
// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//      b = prompt("Во сколько обойдется?", '');
//      if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
//          appData.expenses[a] = b;
//          console.log('done');
//      }
//      else{
//         i--;
//      }
//      i++;
// }

// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
//         appData.expenses[a] = b;
//         console.log('done');
//     }
//     else{
//        i--;
//     }
//     i++;
// }while(i<2);


appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет' + appData.budget.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("min");
}
else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
    console.log('midle');
}
else if(appData.moneyPerDay > 2000){
    console.log('hight');
}
else { 
    console.log('ERROR');
}