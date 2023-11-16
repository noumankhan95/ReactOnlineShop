import { NavLink } from "react-router-dom"
import Deal from "../Components/Deal"
export default function Arrivals() {
    const arrivals = [{ type: "Price", img: "woman" }, { type: "Price", img: "acc" }, { type: "Price", img: "man" }, { type: "Price", img: "woman" }, { type: "Price", img: "acc" }, { type: "Price", img: "man" }, { type: "Price", img: "woman" }, { type: "Price", img: "acc" }]

    return <div className="w-full">
        <div className="w-full flex flex-col justify-center">

            <h1 className="text-center text-3xl mt-3 underline underline-offset-8 decoration-pink-400">Arrivals</h1>
            <div className="w-full flex flex-row justify-center mt-4"><ul className="w-full flex flex-row justify-center p-2">
                <li className="border-2 border-slate-600 p-3 text-2xl rounded-lg mx-2 cursor-pointer"> Men</li><li className="cursor-pointer rounded-lg mx-2 border-2 border-slate-600 p-3 text-2xl">Women</li><li className="cursor-pointer rounded-lg mx-2 border-2 border-slate-600 p-3 text-2xl">All</li></ul></div>
        </div>
        <section className="flex flex-row justify-center mx-32 flex-wrap">
            {arrivals.map(i => (<div className="w-1/5 relative m-3 mx-6 rounded-lg">
                <img src={require(`../assets/${i.img}.jpg`)} className="object-cover" />
                <div className="absolute w-full bottom-12 bg-slate-200 opacity-90 py-1 hover:scale-y-125">
                    <h2 className="text-2xl text-center w-full">{i.type}</h2>
                </div>
            </div>))}
        </section>
        <Deal />
    </div>
} 