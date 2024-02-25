import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {header: '', content: '', footer: '', showConfirmation: false};

const modalSlice = createSlice({
    name: 'modal',
    initialState: { modalProperties: defaultValue},
    reducers: {
        updateModalProprties(state, action) {
            state.modalProperties = action.payload
        },
        resetModalProprties(state) {
            state.modalProperties = defaultValue;
        }
    }
})

export const modalAction = modalSlice.actions;

export default modalSlice.reducer;