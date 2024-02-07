import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const userActivate = createSlice({
    name: 'userActivate',
    initialState,
    reducers: {
        activate: (state) => {
            state.value = true
        },
        disabled: (state) => {
            state.value = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { activate, disabled } = userActivate.actions

export default userActivate.reducer