import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, makeFinalCart } from "../store/userState"
import { useLocation, useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
export default function ItemDetail(props) {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.user)
    const params = useLocation()
    const [showMessage, setshowMessage] = useState(false)
    console.log(params, "params")
    const [productColor, setproductColor] = useState(params.state.colors[0])
    console.log(userState, "userState")
    const SelectColor = useCallback((color) => {
        setproductColor(p => color)
    })
    let item = userState.cart?.find(i => i.id == params.state._id)
    useEffect(() => {
        let timer
        if (showMessage) {
            timer = setTimeout(() => {
                setshowMessage(p => false)
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [showMessage])
    const ChangeCartItems = useCallback(async (mode) => {
        try {
            let res = dispatch(mode == "add" ? addToCart({ item: { ...params.state, id: params.state._id, colors: productColor } }) : removeFromCart({ item: { ...params.state, id: params.state._id, colors: productColor } }))
            setshowMessage(p => true)
        } catch (e) {
            console.log(e)
        }
    }, [params])
    const AddtoFinalCart = useCallback(() => {
        dispatch(makeFinalCart())
    }, [])
    return <section className="flex flex-row justify-between w-full no-wrap">
        <div className="w-3/5 rounded-sm">
            <img src={require("../assets/purse.jpg")} className="rounded-lg" />
        </div>
        <div className="flex flex-col w-2/5 px-4 my-4">
            <div><h1 className="text-lg sm:text-2xl">{params.state.name}</h1><p className="text-sm md:text-lg">Description about Product</p></div>
            <div className="my-6">
                <button className="text-center bg-slate-200 w-full py-1 md:py-2 rounded-lg">Free Delivery</button>
            </div>
            <div>
                {/* <h1 className="line-through text-slate-400">Old Price</h1> */}
                <div className="w-full flex flex-col items-start sm:flex-row sm:justify-between items-center sm:my-6">
                    <h1 className="text-red-600 text-xl sm:text-3xl">${params.state.price}</h1>
                    <span className="text-left">Ratings</span>
                </div>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row justify-start items-center w-full">
                <h1 className="pr-4 text-lg sm:text-xl"> Select Color</h1>
                <span className="flex flex-col sm:flex-row justify-start items-between w-full items-center">
                    {params.state.colors.map(c => <label key={c.toString()} className={`w-2/5 flex flex-row items-center justify-around`}>
                        <input type="radio" value={c}
                            onChange={SelectColor.bind(null, c)} checked={productColor == c}
                        />     {c}
                        <div className={`flex items-center bg-${c.toLowerCase()}-500 ${c == "Black" ? "bg-black" : ""} text-red w-3 h-3 rounded-lg mx-5`}>
                        </div>
                    </label>)}
                </span>
            </div>
            <div className="flex flex-row justify-between items-center sm:mt-8">
                <div className="text-2xl text-black flex flex-col sm:flex-row w-full justify-between items-center">
                    <h1 className="text-md sm:text-2xl">Quantity</h1>
                    <h1 className="text-2xl sm:text-4xl cursor-pointer" onClick={ChangeCartItems.bind(null, 'remove')}>-</h1>
                    <h1 className="text-4xl" >{item ? item.quantity : 0}</h1>
                    <h1 className="text-2xl sm:text-4xl cursor-pointer" onClick={ChangeCartItems.bind(null, 'add')}>+</h1>
                    {/* <div className="bg-red-500 border-2 border-slate-200 px-4 py-2 rounded-lg text-white cursor-pointer" onClick={AddtoFinalCart}>Add To Cart</div> */}
                </div>

            </div>
            {showMessage && <h3 className="text-green-900 text-2xl text-center">Success</h3>}

        </div>
    </section>
}