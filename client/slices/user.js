import { createSlice } from '@reduxjs/toolkit'

const emptyUser = {
  id: null,
  isAdmin: false,
  firstName: '',
  gardenId: null,
  token: '',
}

const slice = createSlice({
  name: 'user',
  initialState: emptyUser,
  reducers: {
    setUser: (_, { payload }) => payload,
    clearUser: () => emptyUser,
  },
})

export const { setUser, clearUser } = slice.actions
export default slice.reducer
