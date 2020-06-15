import { createStore } from 'redux'

// Action Generators : Functions that returns action objects

const incrementCount = ( { incrementBy = 1 } = {} ) => ({ 
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ( { setTo = 7 } = {} ) => ({
    type: 'SET',
    setTo
})

// Reducer is the pure function which we pass into createStore()
const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET': 
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setTo
            }
        default: 
            return state
    }
})

const unsubscribe =  store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 5 }))

store.dispatch(setCount({ setTo: 147 }))

store.dispatch(resetCount())