import { NavLink } from "react-router-dom"
export default function SingleCategory({ cat }) {
    return <li className="text-lg text-red-800 mt-4"><NavLink to={`/shop/${cat}`}>{cat}</NavLink> </li>
}