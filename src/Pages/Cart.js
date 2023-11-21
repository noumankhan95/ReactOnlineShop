import CartItem from "../Components/CartItem"
import { useSelector, useDispatch } from "react-redux"
import { createOrder } from "../store/userState"
import { useCallback, useEffect, useState } from "react"
export default function Cart() {
    const dispatch = useDispatch()
    const [address, setadress] = useState("")
    const userState = useSelector(state => state.user)
    const [message, setMessage] = useState({ status: 0, message: "" })
    console.log(userState)
    useEffect(() => {
        let timer
        if (message?.message) {
            timer = setTimeout(() => {
                setMessage(p => ({ status: 0, message: '' }))
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [message])
    const setaddressText = useCallback((e) => {
        console.log(e.target.value)
        setadress(p => e.target.value)
    })
    const OrderFunction = useCallback(async () => {
        try {
            if (userState.cart.length <= 0) return alert("Add Some Items To Cart First")
            if (address.length == 0 || address.length < 5) return alert("Please Enter Full Address")
            let res = await dispatch(createOrder({ products: [...userState.cart], address, totalamount: userState.totalamount })).unwrap()
            setMessage(p => ({ message: "Order Placed", status: 1 }))
        } catch (e) {
            setMessage(p => ({ status: 0, message: "Couldnt Place Your Order.Try Later" }))
        }

    }, [address])
    return <section className="p-3 md:p-10 h-full flex flex-col">
        <div className="min-h-full p-3">
            {userState.cart?.map(i => <CartItem {...i} key={Math.random().toString()} />)}
        </div>
        <h1 className="text-right text-2xl font-medium">Total: ${Math.round(userState.totalamount)}</h1>
        <div className="flex flex-col my-5 justify-between self-center w-full items-center">
            <label htmlFor="address" className="text-center w-2/5">Type In Your Address</label>
            <input type="text" name="address" value={address} onChange={setaddressText} className="border-2 border-slate-400 p-1 rounded-md w-2/5 my-4 focus:outline-none" />
        </div>
        <div className=" w-full justify-center flex w-full my-2">
            <h1 className="text-center bg-pink-700 border-2 border-slate-200 px-4 py-2 rounded-lg text-white cursor-pointer" onClick={OrderFunction}>Order</h1>
        </div>
        {message?.message && <h1 className={`text-3xl text-semibold text-center text-${message.status == 0 ? 'red' : 'green'}-800`}>{message.message}</h1>}
    </section>
}