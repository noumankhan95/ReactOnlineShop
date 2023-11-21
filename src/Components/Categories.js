import { useNavigate } from "react-router-dom"
export default function Categories() {
    const navigate = useNavigate()
    const categories = [{ type: "Men", img: "man" }, { type: "Women", img: "woman" }, { type: "Accessories", img: "acc" }]
    return <section className="mt-12 sm:mt-2 w-full flex flex-row justify-between p-2 sm:p-8" >
        {categories.map(i => (
            <div className="w-1/2 overflow-hidden sm:w-1/3 relative mx-3" key={Math.random() * 100} onClick={() => navigate(`/shop/${i.type}`)}>
                <img src={require(`../assets/${i.img}.jpg`)} />
                <div className="sm:absolute w-full bottom-12 bg-slate-200 opacity-90 py-1 hover:scale-y-125">
                    <h2 className="text-lg sm:text-2xl text-center w-full">{i.type}</h2>
                </div>
            </div>))}
    </section>
}