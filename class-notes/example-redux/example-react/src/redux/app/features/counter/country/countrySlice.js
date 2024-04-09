import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    country: []

}


export const countrySlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        getCountry: async (state) => {
            const { data } = await axios('https://restcountries.com/v3.1/all')
            state.country = data
        },

    }
})

export const { decreament, increment, incrementCustom } = countrySlice.actions
export default countrySlice.reducer