import {createSlice} from '@reduxjs/toolkit'


export const NutritionMonitoringSlice = createSlice({
    name: 'nutritionMonitor',
    initialState: {
        meals: [
            {type: 'בוקר', calories: '', name: ''},
            {type: 'צהריים', calories: '', name: ''},
            {type: 'ערב', calories: '', name: ''},
            {type: 'ביניים', calories: '', name: ''}],

    },
    reducers: {
        setBreakfast: (state, action) => {
            state.meals[0].calories = action.payload
        },
        setLunch: (state, action) => {
            state.meals[1].calories = action.payload
        },
        setDinner: (state, action) => {
            state.meals[2].calories = action.payload
        },
        setSnack: (state, action) => {
            state.meals[3].calories = action.payload
        },
    },
})


export const {setBreakfast, setLunch, setDinner, setSnack} = NutritionMonitoringSlice.actions

export default NutritionMonitoringSlice.reducer