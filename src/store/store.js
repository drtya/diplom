import { configureStore } from '@reduxjs/toolkit'
import userActivateReducer from './userActivate'

export const store = configureStore({
    reducer: {
        UserActivate: userActivateReducer,
    },
})