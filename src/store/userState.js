import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const Signin = createAsyncThunk("UserState/signin", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        // console.log("values", payload)
        const { email, password, name } = payload.values

        let signinroute = `http://localhost:3000/api/user/userlogin`
        let signUproute = 'http://localhost:3000/api/admin/signUp'
        const res = await fetch(payload.mode == 'login' ? signinroute : signUproute, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ email, password, name })
        })
        if (!res.ok) throw "Please Enter Correct Information."

        let { data } = await res.json()
        return fulfillWithValue({ status: 1, data: { message: "Success", email: data.email, name: data.name, admin: data.admin, token: data.token, mode: payload.mode } })
    } catch (e) {
        // console.log("error", e)
        return rejectWithValue({ status: 0, data: { message: "Couldnt Authenticate " + e } })
    }
})
export const createOrder = createAsyncThunk("UserState/createOrder", async (payload, { fulfillWithValue, rejectWithValue, getState }) => {
    try {
        const mystate = getState()
        console.log(mystate, "mustate")
        const response = await fetch("http://localhost:3000/api/user/createOrder",
            {
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
                method: "POST",
                body: JSON.stringify({ products: mystate.user.cart, address: payload.address, totalamount: mystate.user.totalamount })
            })
        if (!response.ok) throw "Couldnt Order"
        let data = await response.json()
        return fulfillWithValue({ status: 1, data: { message: "Success" } })
    } catch (e) {
        return rejectWithValue({ status: 0, data: { message: "Failed to Order" } })
    }

})
export const AddProduct = createAsyncThunk("UserState/addproduct", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        
        const response = await fetch("http://localhost:3000/api/admin/createProduct",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                method: "POST",
                body: JSON.stringify({ name: payload.name, price: payload.price, imgurl: payload.imgurl })
            })
        if (!response.ok) throw "Couldnt Order"
        let data = await response.json()
        return fulfillWithValue({ status: 1, data: { message: "Success , Product Added " } })
    } catch (e) {
        return rejectWithValue({ status: 0, data: { message: "Couldnt Add Product " + e } })
    }

})
const userSlice = createSlice({
    name: "UserState",
    initialState: {
        name: "",
        email: "",
        cart: [],
        finalCart: [],
        totalamount: 0,
        isadmin: false,
        isloading: false,
        error: null,
        isloggedin: false
    },
    reducers: {
        loginUser: (state, action) => {
            console.log("action", action)
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isadmin = action.payload?.admin || false
            state.isloggedin = true
        },
        logoutUser: (state, action) => {
            state.name = "";
            state.email = "";
            state.isadmin = false
            state.isloading = false
            state.cart = []
            state.totalamount = 0
            state.isloggedin = false
            localStorage.removeItem('token');
        },
        addToCart: (state, action) => {
            // console.log(action.payload.item, 'action')
            let idx = state.cart?.findIndex(i => i.id == action.payload.item?.id)
            console.log(idx, 'idx')

            if (idx !== -1) {
                state.cart[idx].quantity += 1
            } else if (!idx || idx == -1) {
                state.cart.push({ ...action.payload.item, quantity: 1 })
            }
            state.totalamount += action.payload.item?.price
        },
        removeFromCart: (state, action) => {
            let idx = state.cart.findIndex(i => i.id == action.payload.item?.id)
            if (idx !== -1 && state.cart[idx].quantity == 1) {
                state.cart = state.cart.filter(i => i.id !== action.payload.item?.id)
            } else if (idx !== -1 && state.cart[idx].quantity > 1) {
                state.cart[idx].quantity -= 1
            } else if (idx == -1) return
            state.totalamount -= action.payload.item?.price
        },
        makeFinalCart: (state, action) => {
            state.finalCart = [...state.cart]
            state.cart = []
        }
    },
    extraReducers: {
        [createOrder.pending]: (state, action) => {
            // When data is being fetched
            state.isloading = true
        },
        [createOrder.fulfilled]: (state, action) => {
            // When data is fetched successfully
            state.isloading = false
            state.cart = [];
            state.finalCart = [];
            state.totalamount = 0
        },
        [createOrder.rejected]: (state, action) => {
            // When data is fetched unsuccessfully
            state.isloading = false
            state.error = action.payload.data.message
        },
        [Signin.pending]: (state, action) => {
            // When data is being fetched
            state.isloading = true
        },
        [Signin.fulfilled]: (state, action) => {
            // When data is fetched successfully
            state.name = action.payload.data.name;
            state.email = action.payload.data.email;
            state.isloggedin = action.payload.data.mode == 'login' ? true : false
            state.isloading = false
            state.isadmin = action.payload.data.admin || false
        },
        [Signin.rejected]: (state, action) => {
            // When data is fetched unsuccessfully
            console.log("action", action.payload)
            state.isloading = false
            state.error = action.payload.data.message
        },
    }
})

export const { loginUser, logoutUser, addToCart, removeFromCart, makeFinalCart } = userSlice.actions

export default userSlice.reducer