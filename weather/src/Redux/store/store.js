import { configureStore } from '@reduxjs/toolkit'
import weathToDaySlice from '../Slices/weathToDaySlice'
import weathDayInfoSlice from '../Slices/weathDayInfoSlice'
import tabsSlice from '../Slices/tabsSlice'
import weathDayWeekSlice from '../Slices/weathDayWeekSlice'



export const store = configureStore({

    reducer: {
        weathToDay: weathToDaySlice,
        weathDayInfo:weathDayInfoSlice,
        tabs:tabsSlice,
        weathDayWeek:weathDayWeekSlice,
    }
})