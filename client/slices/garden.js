import { createSlice } from '@reduxjs/toolkit'
import { updateVolCount } from './gardenReducerHelper'

const initialState = {
  name: '',
  description: '',
  url: '',
  events: [],
  address: '',
  lat: 0,
  lon: 0,
}

const slice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    setGarden: (_, { payload }) => payload,
    updateEventVols: (state, { payload }) => updateVolCount(state, payload),
  },
})

export const { setGarden, updateEventVols } = slice.actions
export const selectGarden = (state) => state.garden
export default slice.reducer
