import { configureStore } from '@reduxjs/toolkit'
import intersectionReducer from './reducers/intersection'

const store = configureStore({
    reducer: {
        intersection: intersectionReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
