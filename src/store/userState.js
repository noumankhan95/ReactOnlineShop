import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createOrder = createAsyncThunk("UserState/createOrder", async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        let state = getState()
        const response = await fetch("http://localhost:3000/user/createOrder",
            {
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ products: payload.products, address: payload.address, totalamount: payload.totalamount })
            })
        if (!response.ok) throw "Couldnt Order"
        return fulfillWithValue({ status: 1, data: { message: "Success" } })
    } catch (e) {
        return rejectWithValue({ status: 0, data: { message: "Failed to Order" } })
    }

})

const userSlice = createSlice({
    name: "UserState",
    initialState: {
        name: "",
        email: "",
        isadmin: false,
        isloading: false,
        error: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isadmin = action.payload.admin || false
        },
        logoutUser: (state, action) => {
            state.name = "";
            state.email = "";
            state.isadmin = false
        }
    },
    extraReducers: {
        [createOrder.pending]: (state, action) => {
            // When data is being fetched
            state.status = true
        },
        [createOrder.fulfilled]: (state, action) => {
            // When data is fetched successfully
            state.status = false

        },
        [createOrder.rejected]: (state, action) => {
            // When data is fetched unsuccessfully
            state.status = false
            state.error = action.payload.data.message
        },
    }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer