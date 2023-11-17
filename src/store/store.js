import { configureStore } from "@reduxjs/toolkit"
import rootreducer from "./Allreducers"
const store = configureStore({
    reducer: rootreducer
})

export default store