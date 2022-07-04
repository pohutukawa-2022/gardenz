import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'waiting',
  initialState: false,
  reducers: {
    setWaiting: () => true,
    setGarden: () => false,
    clearWaiting: () => false,
    showError: () => false,
    updateEventVols: () => false,
  },
})

export const {
  setWaiting,
  setGarden,
  showError,
  clearWaiting,
  updateEventVols,
} = slice.actions
export default slice.reducer
