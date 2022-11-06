function outerFun() {
    let count = 0

    function innerFun(){
        return ++count
    }

    return innerFun()
}


let ans = outerFun()
console.log(ans);



function personAccount (){
    let expenses = 0, incomes =21000, lastname, firstname

    function totalIncome() {
        incomes = incomes + 100
        return incomes
    }
    function totalExpense() {
        expenses = incomes - 200
        return expenses
    }

    return {
        firstname : 'Saptarshi',
        lastname : 'Chandra',
        totalIncome : totalIncome(),
        totalExpense : totalExpense(),
    }
}



console.log(personAccount())