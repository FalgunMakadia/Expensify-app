import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../components/ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h2>Add your new Expenses here.</h2>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }}/>    
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

const ConnectedAddExpensePage = connect(mapStateToProps)(AddExpensePage)

export default ConnectedAddExpensePage
