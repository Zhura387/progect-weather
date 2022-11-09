import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const weathToDaySlice = createSlice({
    name: 'weathToDay',
    initialState,
    reducers: {
        addWeatherToDay: (state, action) => {
            state.value = action.payload
            // console.log(state.value)
        },
    }
})

export const { addWeatherToDay } = weathToDaySlice.actions;

export default weathToDaySlice.reducer