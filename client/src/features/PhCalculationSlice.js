import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    ph:0,
}

export const phCalculationSlice = createSlice({

    name: 'ph',
    initialState,
    reducers:{
        setPH: (state,action) => {
            state.ph = action.payload;
        }
    }
})

export const {setPH} = phCalculationSlice.actions

export const selectPh = (state) => state.ph.ph;

export default phCalculationSlice.reducer