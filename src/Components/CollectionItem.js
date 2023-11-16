export default function CollectionItem({ navigateToDetail, img, type }) {
    return (<div className="w-1/4 flex flex-col m-3 bg-white shadow-lg h-80" onClick={navigateToDetail}>
        <img src={require(`../assets/${img}.jpg`)} className="m-auto" />
        <h2 className="text-2xl text-center w-full text-pink-800 py-1">Item Name</h2>
        <div className=" w-full bottom-12 bg-slate-200 bottom-0 opacity-90 py-1 hover:scale-y-125">
            <div className="flex flex-row py-1">
                <h2 className="text-2xl text-center w-full">Price</h2>
                <h2 className="text-2xl text-center w-full">Old Price</h2>
            </div>

        </div>
        <div className="flex flex-row justify-center bg-red-600 text-white py-3">Add To Cart</div>

    </div>)
}