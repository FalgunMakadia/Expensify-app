// We used Class based component here as we want to maintain the state here apart from redux store because we 
// want to reflect these changes on store only when the form gets submitted. Until then we have to track changes
// and for that we have used state={}. In ExpenseListFilters, we did not use it because we want to change the
// filters live as we change the filter text or sort by value. Thus we reflected the changes directly to the store
// without tracking them locally using state={}.



import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '', // In video this is done using constructor and this.state
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? this.props.expense.amount.toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calenderFocused: false,
        error:''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }) )
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }) )
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(amount.match(/^\d{0,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }) )
        }
    }
    onDateChange = (createdAt) => {     // We get the date value, user chooses into this function argument (createdAt here)
        if(createdAt) {
            this.setState(() => ({ createdAt }) )
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }) )
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount) {
            return this.setState(() => ({ error: 'Description and Amount both are required.' }) )
        } else {
            this.setState(() => ({ error: '' }) )
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
        
    }
    render() {
        return (
            <div>
                {this.state.error && <h4>{this.state.error}</h4>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text' 
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /><br /><br />
                    <input 
                        type='text' 
                        placeholder='Amount'  
                        value={this.state.amount}
                        onChange={this.onAmountChange} 
                    /><br /><br />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    /><br /> <br />
                    <textarea 
                        placeholder='Add notes for your expense (Optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea><br /><br />
                    <button>{this.props.expense ? 'Save' : 'Add Expense'}</button>
                </form>
            </div>
        )
    }    
}