import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../components/ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
 
const EditExpensePage = (props) => {
    console.log(props)
    return(
            <div>
                <h2>Edit Expense</h2><br />
                <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    console.log('Expense Updated!', expense)
                    props.history.push('/')
                }}/>
                <button onClick={
                    (e) => {
                        props.dispatch(removeExpense({id: props.expense.id}))
                        props.history.push('/')
                    }
                }>
                Remove
                </button>
            </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage)

export default ConnectedEditExpensePage