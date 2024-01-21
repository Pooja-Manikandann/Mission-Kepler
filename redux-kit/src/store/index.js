import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament(state) {
            state.counter++
        },
        decreament(state) {
            state.counter--
        },
        increamentBy5(state, action) {
            state.counter =  state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const store = configureStore({
    reducer: counterSlice.reducer,
})
// const store = configureStore({
//     reducer: { counter: counterSlice.reducer },
// })

export const counterActions = counterSlice.actions;

export default store;