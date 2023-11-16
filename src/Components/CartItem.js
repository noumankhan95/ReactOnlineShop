export default function CartItem() {
    return <div className="w-full p-1 flex flex-row justify-between mt-1 h-32 items-center">
        <div className="w-1/2 flex flex-row h-full">
            <div className="w-1/6 h-full rounded-sm">
                <img src={require("../assets/blouse.jpg")} className="h-full object-cover rounded-lg"/>
            </div> 
            <div className="px-7">
                <h1 className="text-2xl text-black">Item Name</h1>
                <h1 className="text-lg text-slate-700">Quantity</h1>
                <h1 className="text-lg text-slate-700">Price</h1>
            </div>
        </div>
        <div className="w-1/6">
            <div className="text-lg text-black flex flex-col w-full justify-evenly items-center h-full">
                <div className="flex flex-row w-full justify-between items-center">
                    <h1 className="text-xl mx-3">Quantity</h1>
                    <div className="flex justify-between border-2 border-slate-200">
                        <h1 className="text-xl cursor-pointer p-3 text-xl border-black-200">-</h1>
                        <h1 className="text-xl cursor-pointer p-3 text-xl border-black-200">5</h1>
                        <h1 className="text-xl cursor-pointer p-3 text-xl border-black-200">+</h1></div>
                </div>
            </div>
        </div>

    </div>
}