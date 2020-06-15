import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ConnectedExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (        //ES6 Short hand - removed function body {} and return keyword
    <div>
        <br /><br />
        <ConnectedExpenseListFilters />
        <ConnectedExpenseList />
    </div>
)

export default ExpenseDashboardPage