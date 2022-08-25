import {createSlice} from '@reduxjs/toolkit'


export const PersonalDataSlice = createSlice({
    name: 'personal',
    initialState: {
        gender: "female",
        age: '',
        height: '',
        weight: '',
    },
    reducers: {
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        },
        setWeight: (state, action) => {
            state.weight = action.payload
        },

    },
})


export const {setGender, setAge, setHeight, setWeight} = PersonalDataSlice.actions

export default PersonalDataSlice.reducer