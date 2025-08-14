import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type intersectionProps = {
    home: boolean
    about: boolean
    projects: boolean
    backdropMenu: boolean
    heightHeader: number
}

const initialState: intersectionProps = {
    home: true,
    about: false,
    projects: false,
    backdropMenu: true,
    heightHeader: 0
}

const intersectionSlice = createSlice({
    name: 'intersection',
    initialState,
    reducers: {
        home: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.home = action.payload
                state.about = false
                state.projects = false
            } else {
                state.home = action.payload
            }
        },
        about: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.about = action.payload
                state.home = false
                state.projects = false
            } else {
                state.about = action.payload
            }
        },
        projects: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.projects = action.payload
                state.home = false
                state.about = false
            } else {
                state.projects = action.payload
            }
        },
        changeBackdropMenu: (state, action: PayloadAction<boolean>) => {
            state.backdropMenu = action.payload
        },
        updateHeightHeader: (state, action: PayloadAction<number>) => {
            state.heightHeader = action.payload
        }
    }
})

export const { home, about, projects, changeBackdropMenu, updateHeightHeader } = intersectionSlice.actions
export default intersectionSlice.reducer
