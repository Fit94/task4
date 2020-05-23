let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц");
    time = prompt("введите дату");

    while(isNaN(money) || money =='' || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
}
start();



let appData = {
    timeData: time,
    savings: true,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
        
            if (( typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {   
                console.log("done");
                appData.expenses[a] =  b;  
            } else {
                i = i - 1;
            }  
        }        
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Еждневний бюджет " + appData.moneyPerDay);        
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальний ур дост");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Сер ур дост");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Виск ур дост");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сума накоплений"),
                percent = +prompt("Под какой процент");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);    
        }   
    },
    chooseOptExpenses: function() {
        for(let i = 1; i <= 3; i++) {
            let c = prompt("Статья необязательних расходов?");

            if (( typeof(c)) === 'string' && (typeof(c)) != null && c != '' && c.length < 50) {
                console.log("done2");
                appData.optionalExpenses[i] = c;
            } else {
                i = i - 1; 
            }
        }   
    },
    chooseIncome: function() {
        let items = prompt('что принесет доп доход?(через запяту)','');
        while(items =="" || items == null) {
            items = prompt('что принесет доп доход?(через запяту)','');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что то еще'));
        appData.income.sort();
        appData.income.forEach(function(item, i, mass) {
            console.log("Способы доп. заработка:"+ (i + 1) + "." + item);
        })
    },
    aboutObj: function() {
        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + key);
        }
    }
};





