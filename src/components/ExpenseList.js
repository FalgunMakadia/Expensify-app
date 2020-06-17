import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

// connnect is used to connect the component with the store --> We need to use connect with the component when we want that component to fetch data from the store

const ExpenseList = (props) => {
    let total = 0
    props.expenses.map((expense) => {
        total += expense.amount
    })
    return (
        <div>
            <h2>Currently showing {props.expenses.length} {props.expenses.length <= 1 ? 'expense' : 'expenses'} totalling {'Rs '+numeral(total).format('0,0.00')}</h2>
            <h2>Your Expenses:</h2><hr />
            {props.filterLessExpenses.length === 0 ? <h3>No Expenses so far! </h3> : (props.expenses.length === 0 ? <h3>No expense satisfies current filter.</h3> : props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} expense={expense} />
            }))}
        </div>
    )
}

// This function helps us get the data from the store and pass it in the form of props to the componenet specified in the second () in connect()(here)
const mapStateToProp = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters), // To parse expenses as per the filter
        filterLessExpenses: state.expenses
    }
}

const ConnectedExpenseList = connect(mapStateToProp)(ExpenseList)
// This is a new componet which is just ExpenseList component with the props

export default ConnectedExpenseList