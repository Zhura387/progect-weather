import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const weathDayWeekSlice = createSlice({
    name: 'weathDayWeek',
    initialState,
    reducers: {
        addDayWeek: (state, action) => {
            state.value = action.payload
            //  console.log(state.value)
        },
    }
})

export const { addDayWeek } = weathDayWeekSlice.actions;

export default weathDayWeekSlice.reducer