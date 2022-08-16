import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    dateRods: [{
        "AssemblyType_ID": "P",
        "Country_ID": "RU",
        "ID": 0,
        "Owner": "Fisherman",
        "Status": "A",
        "Inserts_ID": "S",
        "Knee": 3,
        "MaterialHandle_ID": "E",
        "MaterialRod_ID": "C",
        "Weight": 100,
        "Name": "Volzhanka",
        "Price": 45,
        "Length": 3,
        "ReelSeat_ID": "R",
        "Rings": 7,
        "Type_ID": "F",
        "MinTest": 40,
        "MaxTest": 250,
        "LengthKnee": 100,
        "LengthHandle": 20,
        "createdBy": "admin"
    }, {
        "AssemblyType_ID": "P",
        "Country_ID": "RU",
        "ID": 1,
        "Owner": "Fisherman",
        "Status": "C",
        "Inserts_ID": "H",
        "Knee": 2,
        "MaterialHandle_ID": "C",
        "MaterialRod_ID": "F",
        "Weight": 100,
        "Name": "Maximus",
        "Price": 25,
        "Length": 2,
        "ReelSeat_ID": "R",
        "Rings": 7,
        "Type_ID": "S",
        "MinTest": 5,
        "MaxTest": 15,
        "LengthKnee": 100,
        "LengthHandle": 20,
        "createdBy": "admin"
    }, {
        "AssemblyType_ID": "T",
        "Country_ID": "US",
        "ID": 2,
        "Owner": "Fisherman",
        "Status": "A",
        "Inserts_ID": "G",
        "Knee": 2,
        "MaterialHandle_ID": "P",
        "MaterialRod_ID": "F",
        "Weight": 500,
        "Name": "Crocodile",
        "Price": 15,
        "Length": 2,
        "ReelSeat_ID": "S",
        "Rings": 7,
        "Type_ID": "R",
        "MinTest": 50,
        "MaxTest": 500,
        "LengthKnee": 100,
        "LengthHandle": 20,
        "createdBy": "admin"
    }]
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