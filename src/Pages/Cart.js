import CartItem from "../Components/CartItem"

export default function Cart() {
    const cartItems = [{ type: "Men", img: "man" }, { type: "Women", img: "woman" }, { type: "Accessories", img: "acc" }]
    return <section className="p-10 h-full">
        <div className="min-h-full p-3">
            {cartItems.map(i => <CartItem {...i} key={Math.random().toString()} />)}
        </div>
        <div className="cursor-pointer w-full justify-center flex w-full">
            <h1 className="text-center bg-pink-700 border-2 border-slate-200 px-4 py-2 rounded-lg text-white ">Add To Cart</h1>
        </div>

    </section>
}