import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    area:0,
}

export const areaCalculationSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        setArea: (state, action) => {
            state.area = action.payload;
        },
    }
})

export const {setArea} = areaCalculationSlice.actions;

export const selectArea = (state) => state.area.area;

export default areaCalculationSlice.reducer;