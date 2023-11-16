import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CollectionItem from "./CollectionItem"

export default function Collection() {
    const params = useParams()
    const navigate = useNavigate()
    const [showitems, setshowitems] = useState(false)
    const [sortItems, setsortItems] = useState(false)

    console.log(params.cat)
    const categories = [{ type: "Men", img: "man" }, { type: "Women", img: "woman" }, { type: "Accessories", img: "acc" }, { type: "Men", img: "man" }, { type: "Women", img: "woman" }, { type: "Accessories", img: "acc" }, { type: "Men", img: "man" }, { type: "Women", img: "woman" }, { type: "Accessories", img: "acc" }]
    const toggleItemsNumber = () => {
        setshowitems(o => !o)
    }
    const togglesorting = () => {
        setsortItems(o => !o)
    }
    const navigateToDetail = (type, id) => {
        navigate(`/shop/${type}/${parseInt(id)}`, { state: { id: 6 } })
    }
    return <div className="">
        <div className="flex flex-row w-full my-3 justify-between px-6 relative">
            <div className="w-1/3 flex flex-row justify-between">
                <div>
                    <button className="p-3 border-2 border-slate-200 shadow-md" onClick={togglesorting}>
                        Default Sorting
                    </button>
                    {sortItems && (
                        <div className="absolute z-10 border-2 border-slate-200 text-center px-6 divide-y">
                            <p>Ascending</p>
                            <p>Descending</p>
                        </div>
                    )}
                </div>
                <div>
                    <button className="p-3 border-2 border-slate-200 shadow-md" onClick={toggleItemsNumber}>Show Items 9</button>
                    {showitems && (
                        <div className="absolute z-10 border-2 border-slate-200 text-center px-12 divide-y">
                            <p>3</p>
                            <p>6</p>
                            <p>9</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-1/3 flex flex-row justify-evenly">
                <button className="p-3 border-2 border-slate-200 shadow-md">1 of </button>
                <button className="p-3 border-2 border-slate-200 shadow-md">3</button>
            </div>
        </div>
        <section className="w-full flex-wrap flex flex-row justify-between p-8">

            {categories.map(i => <CollectionItem {...i} navigateToDetail={navigateToDetail.bind(null, i.type, 10)} key={Math.random()*1000}/>)}
        </section>
    </div>
}