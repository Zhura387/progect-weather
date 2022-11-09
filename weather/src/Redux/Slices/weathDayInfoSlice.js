import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const weathDayInfoSlice = createSlice({
        name: 'weathDayInfo',
        initialState,
        reducers: {
        addDayInfo: (state, action) => {
            state.value = action.payload
            // console.log(state.value)
        }}
})

export const {addDayInfo} = weathDayInfoSlice.actions;

export default weathDayInfoSlice.reducer