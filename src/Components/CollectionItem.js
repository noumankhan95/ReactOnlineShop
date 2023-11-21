export default function CollectionItem({ navigateToDetail, img, price, ...p }) {
    console.log('p', p)
    return (<div className="w-2/5 md:w-1/3 flex flex-col p-4 bg-white shadow-lg overflow-hidden md:h-120" onClick={navigateToDetail}>
        <img src={require(`../assets/${img || "man"}.jpg`)} className="m-auto" />
        <h2 className="text-lg sm:text-2xl whitespace-nowrap text-center w-full text-pink-800 py-1">{p.name || 'Shirt'}</h2>
        <div className=" w-full bg-slate-200  opacity-90 py-1 hover:scale-y-125">
            <div className="flex flex-row py-1">
                <h2 className="text-lg sm:text-2xl text-center w-full">${price}</h2>
                {/* <h2 className="text-2xl text-center w-full">Old Price</h2> */}
            </div>

        </div>
        {/* <div className="flex flex-row justify-center bg-red-600 text-white py-3">Add To Cart</div> */}

    </div>)
}