import SingleCategory from "./SingleCategory"
export default function Sidebar() {
    const Categories = [{ cat: "Men" }, { cat: "Women" }, { cat: "Accessories" }, { cat: "New Arrivals" }]
    return <aside className="w-full h-full ">
        <h1 className="text-3xl text-pink-700">Product Category</h1>
        <ul>
            {Categories.map(c => <SingleCategory {...c} key={Math.random()*1000}/>)}
        </ul>
    </aside>
}