import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    assemblyTypes: [],
    rodTypes: [],
    materialsRod: [],
    materialsHandle: [],
    reelSeat: [],
    inserts: []
}

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
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

export const fetchaAssemblyTypes = createAsyncThunk('countries/fetchaAssemblyTypes', async () => {
    const response = await fetch("browse/AssemblyType", {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
            "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchaRodTypes = createAsyncThunk('rodTypes/fetchaRodTypes', async () => {
    const response = await fetch("browse/RodTypes", {
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
    extraReducers(builder) {
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries.push(...action.payload)
        }).addCase(fetchaAssemblyTypes.fulfilled, (state, action) => {
            state.assemblyTypes.push(...action.payload)
        }).addCase(fetchaRodTypes.fulfilled, (state, action) => {
            state.rodTypes.push(...action.payload)
        })
    }
})

export default newRodPageSlice.reducer

export const countriesSelector = (state) => state.data.countries
export const assemblyTypesSelector = (state) => state.data.assemblyTypes
export const rodTypesSelector = (state) => state.data.rodTypes