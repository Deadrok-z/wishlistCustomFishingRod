import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    dateRods: []
}

export const fetchRods = createAsyncThunk('rods/fetchRods', async ()=>{
    const response = await fetch("admin/Rods", {
        method: "GET",
        headers: {
          Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
          "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
    
})

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchRods.fulfilled, (state, action) => {
            state.dateRods.push(...action.payload)
        })
    }
})

export default tableSlice.reducer

export const tableSelector = (state) => state.table.dateRods