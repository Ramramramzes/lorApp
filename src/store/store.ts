import { combineReducers, configureStore } from '@reduxjs/toolkit'
import globalReducer from './global'

const rootReducer = combineReducers({
  global: globalReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch