import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'waiting',
  initialState: false,
  reducers: {
    setWaiting: () => true,
    setGarden: () => false,
    clearWaiting: () => false,
    updateEventVols: () => false,
  },
})

export const { setWaiting, setGarden, clearWaiting, updateEventVols } =
  slice.actions
export default slice.reducer
