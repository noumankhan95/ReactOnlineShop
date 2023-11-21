import { Outlet } from "react-router-dom"
import Categories from "../Components/Categories"
export default function Home() {
    return <div className="w-full">
        <div className="w-full relative">
            <div className="absolute p-1 bottom-8 m-12 w-full ">
                <h1 className="my-3 text-xl md:text-4xl text-slate-200">Spring Summer Collection</h1>
                <h3 className="my-3 md:text-2xl text-slate-900">Get Upto 30% Off On New Arrivals</h3>
                <button className="my-3 bg-pink-600 rounded-lg border-red-400 border-1 text-white p-3 hover:bg-red-500 hover:text-white">Shop Now</button>
            </div>
            <img src={require("../assets/blouse.jpg")} alt="Blouses" className="w-full object-cover md:h-96"  />
        </div>
        <div className="w-full flex justify-center">
            <h1 className="text-center text-3xl mt-3 underline underline-offset-8 decoration-pink-400 uppercase ">Categories</h1>
        </div>
        <Categories />
        <Outlet />
    </div>
}