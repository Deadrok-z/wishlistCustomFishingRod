import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rodTypes: [{
        "ID": "All",
        "Text": "All"
    }, {
        "ID": "F",
        "Text": "Fider"
    }, {
        "ID": "S",
        "Text": "Spinning"
    }, {
        "ID": "P",
        "Text": "Rod P"
    }, {
        "ID": "R",
        "Text": "Rod"
    }],
    filterValue: 'All'
}

export const buttonTabBarSlice = createSlice({
    name: 'buttonTabBars',
    initialState,
    reducers: {
        updateFilterValue(state, action) {
            state.filterValue = action.payload
        }
    }
})

export default buttonTabBarSlice.reducer

export const { updateFilterValue } = buttonTabBarSlice.actions
export const rodTypesSelector = (state) => state.buttonTabBar.rodTypes
export const filterValueSelector = (state) => state.buttonTabBar.filterValue
