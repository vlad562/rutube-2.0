import { baseApi } from "@/share/api/baseApi"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer> // состояние
export type AppStore = typeof store // тип самого store
export type AppDispatch = typeof store.dispatch // тип dispatchя