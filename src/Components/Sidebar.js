import SingleCategory from "./SingleCategory"
export default function Sidebar() {
    const Categories = [{ cat: "Men" }, { cat: "Women" }, { cat: "Accessories" }, { cat: "New Arrivals" }]
    return <aside>
        <h1 className="text-md text-pink-800 font-bold">Product Category</h1>
        <ul>
            {Categories.map(c => <SingleCategory {...c} key={Math.random() * 1000} />)}
        </ul>
    </aside>
}