export default function ItemDetail() {
    return <section className="flex flex-row justify-between w-full">
        <div className="w-3/5 rounded-sm">
            <img src={require("../assets/purse.jpg")} className="rounded-lg" />
        </div>
        <div className="flex flex-col w-2/5 px-4 my-4">
            <div><h1 className="text-2xl">Name Of Product</h1><p>Description about Product</p></div>
            <div className="my-6"><button className="text-center bg-slate-200 w-full py-2 rounded-lg">Free Delivery</button></div>
            <div>
                <h1 className="line-through text-slate-400">Old Price</h1>
                <div className="w-full flex flex-row justify-between items-center my-6">
                    <h1 className="text-red-600 text-3xl">New Price </h1>
                    <span>Ratings</span>
                </div>
            </div>
            <div className="mt-3 flex flex-row justify-start items-center">
                <h1 className="pr-4 text-xl"> Select Color</h1>
                <span className="flex flex-row justify-end w-2/4 items-center">
                    <div className="bg-red-400 text-red w-3 h-3 rounded-lg mx-5"></div>
                    <div className="bg-orange-900 text-red w-3 h-3 rounded-lg mx-5"></div>
                    <div className="bg-blue-900 text-red w-3 h-3 rounded-lg mx-5"></div>
                </span>
            </div>
            <div className="flex flex-row justify-between items-center mt-8">
                <div className="text-2xl text-black flex flex-row w-full justify-between items-center">
                    <h1>Quantity</h1>
                    <h1 className="text-4xl cursor-pointer">-</h1>
                    <h1 className="text-4xl cursor-pointer">5</h1>
                    <h1 className="text-4xl cursor-pointer">+</h1>
                    <div className="bg-red-500 border-2 border-slate-200 px-4 py-2 rounded-lg text-white cursor-pointer">Add To Cart</div>
                </div>
            </div>
        </div>
    </section>
}