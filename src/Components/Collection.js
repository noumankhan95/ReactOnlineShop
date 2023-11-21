import { useState, useCallback, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CollectionItem from "./CollectionItem"

export default function Collection() {
    const params = useParams()
    const navigate = useNavigate()
    const [showitems, setshowitems] = useState(false)
    const [sortItems, setsortItems] = useState(false)
    const [products, setproducts] = useState([])
    console.log(params, "params")
    useEffect(() => {
        fetch(`http://localhost:3000/api/shop/getproducts/${params.cat}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
            }
        }).then(r => {
            if (!r.ok) throw "Couldnt Fetch Products"
            return r.json()
        }).then(data => {
            console.log(data)
            setproducts(p => [...data.data.docs])
        }).catch(e => console.log(e))
    }, [params])
    // const categories = [{ type: "Men", img: "man", price: 20, id: 1 }, { type: "Women", img: "woman", price: 30, id: 2 }, { type: "Accessories", img: "acc", price: 10, id: 3 }, { type: "Men", img: "man", price: 120, id: 12 }, { type: "Women", img: "woman", price: 30, id: 13 }, { type: "Accessories", img: "acc", price: 20, id: 11 }, { type: "Men", img: "man", price: 20, id: 18 }, { type: "Women", img: "woman", price: 90, id: 21 }, { type: "Accessories", img: "acc", price: 20, id: 31 }]
    const toggleItemsNumber = useCallback(() => {
        setshowitems(o => !o)
    }, [])
    const togglesorting = useCallback(() => {
        setsortItems(o => !o)
    }, [])
    const navigateToDetail = useCallback((type, item) => {
        console.log(item)
        navigate(`/shop/${type}/${item._id}`, { state: { ...item } })
    }, [])
    return <div className="w-full">
        <div className="flex flex-row w-full my-3 justify-between px-6">
            <div className="md:w-1/3 flex flex-row justify-between">
                <div className="md:w-1/3 flex flex-row justify-between hidden sm:block">
                    <button className="p-1 md:p-3 border-2 border-slate-200 shadow-md text-sm md:text-lg" onClick={togglesorting}>
                        Default Sorting
                    </button>
                    {sortItems && (
                        <div className="absolute z-10 border-2 border-slate-200 text-center px-6 divide-y ">
                            <p className="text-sm md:text-lg">Ascending</p>
                            <p className="text-sm md:text-lg">Descending</p>
                        </div>
                    )}
                </div>
                <div className="md:w-1/3 flex flex-row justify-between hidden sm:block">
                    <button className=" p-1 md:p-3 border-2 border-slate-200 shadow-md text-sm" onClick={toggleItemsNumber}>Show Items 9</button>
                    {showitems && (
                        <div className="absolute z-10 border-2 border-slate-200 text-center px-12 divide-y">
                            <p>3</p>
                            <p>6</p>
                            <p>9</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-row justify-evenly">
                <button className="p-1 md:p-3 border-2 border-slate-200 shadow-md">1 of </button>
                <button className="p-1 md:p-3 border-2 border-slate-200 shadow-md">3</button>
            </div>
        </div>
        <section className="w-full flex-wrap flex flex-row  p-8">
            {products.length > 0 && products.map(i => <CollectionItem {...i} navigateToDetail={navigateToDetail.bind(null, i.category || "clothing", i)} key={Math.random() * 1000} />)}
        </section>
    </div>
}