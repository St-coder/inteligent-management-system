import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'userSlice',
    initialState: {
        userData: {},
    },
    reducers: {
        setUserData(state, action){
            state.userData = action.payload;
        },
    }
})

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;