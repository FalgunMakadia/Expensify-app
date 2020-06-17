import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={"/edit/"+props.expense.id} className="expense-description-link"><h3>{props.expense.description}</h3></Link>
            <h4>
                {'Rs '+numeral(props.expense.amount).format('0,0.00')} : {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
            </h4>
            <hr />
        </div>
    )
}

//const ConnectedExpenseListItem = connect()(ExpenseListItem)
// We just want to access dispatch() here. So we can call connect() without mapStateToProps function as we are not using any value from store
// Now we have removed Remove button from here and added it in EditExpensePage. So connect is no longer required

export default ExpenseListItem