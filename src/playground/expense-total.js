const expenses = [{
    name: 'Pizza',
    amount: 200
}, {
    name: 'Sandwich',
    amount: 80
}, {
    name: 'Burger',
    amount: 120
}]

const getExpensesTotal = (expenses) => {
    let total = 0
    expenses.map((expense) => {
        total += expense.amount
    })
    return total
}

const total = getExpensesTotal(expenses)
console.log(total) // 400

const total2 = expenses.reduce((sum ,expense) => {
    return sum + expense.amount
}, -200) // 200
console.log(total2)