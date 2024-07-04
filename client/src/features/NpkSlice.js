import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    N: 0,
    P: 0,
    K: 0,
}

export const npkSlice = createSlice({
    name: 'npk',
    initialState,
    reducers: {
        setN:(state, action) => {
            state.N = action.payload
        },
        setP:(state, action) => {
            state.P = action.payload
        },
        setK:(state, action) => {
            state.K = action.payload
        },
        
    }
})

export const {setN, setP, setK} = npkSlice.actions;

export const selectN = (state) => state.npk.N;

export const selectP = (state) => state.npk.P;

export const selectK = (state) => state.npk.K;

export default npkSlice.reducer;