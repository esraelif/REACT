import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    productData: [],
    loading: false,
    error: false,
};

export const getProductsData = createAsyncThunk(
    "getProducts",
    async () => {
        const { data } = await axios("https://dummyjson.com/products")
        return data.products

    }
)

const productSlice = createSlice({
    name: "productsApi",
    initialState,
    reducers: {
        clearProductsData: (state) => {
            state.productData = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsData.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(getProductsData.fulfilled, (state, { payload }) => {
            state.loading = false
            state.productData = payload
        }).addCase(getProductsData.rejected, (state) => {
            state.loading = false
            state.error = true
        })
    }



}

)
export const { clearProductsData } = productSlice.actions
export default productSlice.reducer;