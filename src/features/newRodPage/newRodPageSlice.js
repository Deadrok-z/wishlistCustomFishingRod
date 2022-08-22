import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    assemblyTypes: [],
    rodTypes: [],
    materialsRod: [],
    materialsHandle: [],
    reelSeat: [],
    inserts: [],
    newId:'',
}

export const fetchNewId = createAsyncThunk('newRod/fetchNewId', async ()=>{
    const response = await fetch('/browse/getNewId', {
        method: "POST",
        headers: {
          Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
          "Content-Type": "application/json"
        }
    })

    const result = await response.json()
    return result.ID
})

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

export const fetchaMaterialsRod = createAsyncThunk('materialsRod/fetchaMaterialsRod', async () => {
    const response = await fetch("browse/MaterialRod", {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
            "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchaMaterialsHandle = createAsyncThunk('materialsHandle/fetchaMaterialsHandle', async () => {
    const response = await fetch("browse/MaterialHandle", {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
            "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchaReelSeat = createAsyncThunk('reelSeat/fetchaReelSeat', async () => {
    const response = await fetch("browse/ReelSeat", {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
            "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchaInserts = createAsyncThunk('inserts/fetchaInserts', async () => {
    const response = await fetch("browse/Inserts", {
        method: "GET",
        headers: {
            Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
            "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchAddNewRod = createAsyncThunk('rods/fetchAddNewRod', async (newRod)=>{
    const response = await fetch('/admin/Rods', {
        method: "POST",
        headers: {
          Authorization: "Basic YWRtaW46ZHNnc2RnZHM=",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRod)
    })
    return await response.json()
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
        }).addCase(fetchaMaterialsRod.fulfilled, (state, action) => {
            state.materialsRod.push(...action.payload)
        }).addCase(fetchaMaterialsHandle.fulfilled, (state, action) => {
            state.materialsHandle.push(...action.payload)
        }).addCase(fetchaReelSeat.fulfilled, (state, action) => {
            state.reelSeat.push(...action.payload)
        }).addCase(fetchaInserts.fulfilled, (state, action) => {
            state.inserts.push(...action.payload)
        }).addCase(fetchNewId.fulfilled, (state, action)=>{
            state.newId = action.payload
        })
    }
})

export default newRodPageSlice.reducer

export const countriesSelector = (state) => state.data.countries
export const assemblyTypesSelector = (state) => state.data.assemblyTypes
export const rodTypesSelector = (state) => state.data.rodTypes
export const materialsRodSelector = (state) => state.data.materialsRod
export const materialsHandleSelector = (state) => state.data.materialsHandle
export const reelSeatSelector = (state) => state.data.reelSeat
export const insertsSelector = (state) => state.data.inserts
export const newIdSelector = state => state.data.newId