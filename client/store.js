import { configureStore, combineReducers } from '@reduxjs/toolkit'

import user from './slices/user'
import location from './slices/location'
import waiting from './slices/waiting'
import error from './slices/error'

export const reducers = combineReducers({
  user,
  location,
  waiting,
  error,
})

const store = configureStore({
  reducer: reducers,
})

export default store
export const dispatch = store.dispatch
export const getState = store.getState
