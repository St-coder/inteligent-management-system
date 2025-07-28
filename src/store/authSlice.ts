import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name:'authSlice',
    initialState: {
        token: sessionStorage.getItem('token') || null,
        userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo') || '{}') : null,
        menuList: [],
    },
    reducers: {
        setToken(state, action){
            state.token = action.payload;
            sessionStorage.setItem('token', action.payload)
        },
        clearToken(state){
            state.token = null;
            sessionStorage.removeItem('token');
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
            sessionStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        clearUserInfo(state){
            state.userInfo = null;
            sessionStorage.removeItem('userInfo');
        },
        setMuneList(state, action){
            state.menuList=action.payload;
        },
        clearMuneList(state){
            state.menuList=[];
        },
    }
})

export const { setToken, clearToken, setUserInfo, clearUserInfo, setMuneList, clearMuneList } = authSlice.actions;

export default authSlice.reducer;