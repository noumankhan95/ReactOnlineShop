import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../store/userState"
import { useCallback } from "react"
export default function CartItem(props) {
    const dispatch = useDispatch()
    const ChangeCartItems = useCallback(async (mode) => {
        try {
            let res = dispatch(mode == "add" ? addToCart({ item: { ...props } }) : removeFromCart({ item: { ...props } }))
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }, [props])

    return <div className="w-full p-1 flex flex-row justify-between mt-1 h-32 items-center">
        <div className="w-1/2 flex flex-row h-full">
            <div className="w-2/5 object-fit sm:w-1/6 h-full rounded-sm">
                <img src={require("../assets/blouse.jpg")} className="h-full object-cover rounded-lg" />
            </div>
            <div className="w-1/4 px-2 sm:px-7">
                <h1 className="sm:text-2xl text-black">Item Name</h1>
                <h1 className="sm:text-lg text-slate-700">X{props.quantity}</h1>
                <h1 className="sm:text-lg text-slate-700">Price ${props.price}</h1>
            </div>
        </div>
        <div className="w-1/2 sm:w-1/6">
            <div className="text-lg text-black flex flex-col w-full justify-evenly items-center h-full">
                <div className="flex flex-row w-full justify-between items-center">
                    <h1 className="sm:text-xl mx-3">Quantity</h1>
                    <div className="flex justify-between border-2 border-slate-200">
                        <h1 className="text-xl cursor-pointer p-3 text-xl border-black-200" onClick={ChangeCartItems.bind(null, 'remove')}>-</h1>
                        <h1 className="text-xl cursor-pointer p-3 text-xl border-black-200">{props.quantity}</h1>
                        <h1 className="text-xl cursor-pointer p-3 text-xl border-black-200" onClick={ChangeCartItems.bind(null, 'add')}>+</h1></div>
                </div>
            </div>
        </div>

    </div>
}