import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PropsContato = {
    IsInside: number
}

const initialState: PropsContato = {
    IsInside: 0
}

const intersectionSlice = createSlice({
    name: 'intersection',
    initialState,
    reducers: {
        home: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.IsInside = 1
            }
        },
        about: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.IsInside = 48
            }
        },
        projects: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.IsInside = 95
            }
        }
    }
})

export const { home, about, projects } = intersectionSlice.actions
export default intersectionSlice.reducer
