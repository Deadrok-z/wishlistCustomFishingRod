import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    countries:[],
    assemblyTypes:[],
    rodTypes:[],
    materialsRod:[],
    materialsHandle:[],
    reelSeat:[],
    inserts:[]
}

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async ()=>{
    const response = await fetch("browse/Countries", {
        method: "GET",
        headers: {
          Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
          "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
    
})

export const newRodPageSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries.push(...action.payload)
        })
    }
})

export default newRodPageSlice.reducer

export const countriesSelector = (state) => state.data.countries