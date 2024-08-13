import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PropsContato = {
    isInsideNumber: number
}

const initialState: PropsContato = {
    isInsideNumber: 0
}

const intersectionSlice = createSlice({
    name: 'intersection',
    initialState,
    reducers: {
        home: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.isInsideNumber = 1
            }
        },
        about: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.isInsideNumber = 48
            }
        },
        projects: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.isInsideNumber = 95
            }
        }
    }
})

export const { home, about, projects } = intersectionSlice.actions
export default intersectionSlice.reducer
