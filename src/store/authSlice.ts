import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name:'authSlice',
    initialState: {
        token: sessionStorage.getItem('token') || null,
    },
    reducers: {
        setToken(state, action){
            state.token = action.payload;
            sessionStorage.setItem('token', action.payload)
        },
        clearToken(state, action){
            state.token = null;
            sessionStorage.removeItem('token');
        }
    }
})

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;