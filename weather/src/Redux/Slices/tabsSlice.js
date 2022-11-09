import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        addTabs: (state, action) => {
            state.value = [action.payload]
            //  console.log(state.value)
        },
    }
})

export const { addTabs } = tabsSlice.actions;

export default tabsSlice.reducer