import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    showError: (_, { payload }) => payload,
    hideError: () => null,
  },
})

export const { showError, hideError } = slice.actions
export default slice.reducer
