import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import { Provider } from 'react-redux'
import { addExpense } from './actions/expenses'
import { setTextFilter, sortByAmount } from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

// store.dispatch(addExpense({ description: 'Water Bill', amount: 1000, createdAt: 5758965 }))
store.dispatch(addExpense({ description: 'Light Bill', amount: 2000}))
// store.dispatch(addExpense({description: 'Pizza', amount: 250, createdAt: 5263974}))
store.dispatch(addExpense({description: 'Exam Fees', amount: 350}))
store.dispatch(addExpense({description: 'BoAt HandsFree', amount: 450}))

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)
// Provider lets us define a store that we want to provide to all of out components

ReactDOM.render(jsx, document.getElementById('app'))