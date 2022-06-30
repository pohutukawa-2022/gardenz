import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lat: null,
  lon: null,
}

const slice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (_, { payload }) => payload,
  },
})

export const { setLocation } = slice.actions
export default slice.reducer
