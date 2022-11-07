import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from '../Slices/weatherSlice'



export const store = configureStore({

    reducer: {
        weath: weatherSlice,
    }
})