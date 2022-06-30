import { configureStore } from '@reduxjs/toolkit'

import reducers from './slices'

const store = configureStore({
  reducer: reducers,
})

export default store
export const dispatch = store.dispatch
export const getState = store.getState
