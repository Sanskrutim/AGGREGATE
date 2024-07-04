import { combineReducers } from "@reduxjs/toolkit";

import areaReducer from '../features/AreaCalculatipnSlice';
import phReducer from '../features/PhCalculationSlice';
import npkReducer from '../features/NpkSlice';

const rootReducer = combineReducers({
    area: areaReducer,
    ph: phReducer,
    npk: npkReducer,
});

export default rootReducer;