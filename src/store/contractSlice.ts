import { createSlice } from "@reduxjs/toolkit"

export const contractSlice = createSlice({
    name:'contractSlice',
    initialState: {
        data:[],
        total: 0
    },
    reducers: {
        setData(state, action){
            state.data=action.payload;
        },
        setTotal(state, action){
            state.total=action.payload;
        },
    }
})

export const { setData, setTotal } = contractSlice.actions;
export default contractSlice.reducer;
