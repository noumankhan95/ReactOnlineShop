import { NavLink } from "react-router-dom"
export default function Header() {
    return (<header className="bg-black text-white w-full fixed top-0 z-10">
        <div className="flex flex-row justify-between p-2">
            <div className="w-1/2 ">Free Shipping On Orders Above 50$</div>
            <div className="w-1/2">
                <ul className="w-full flex flex-row px-5 justify-around">
                    <li>USD</li>
                    <li>My Account</li>
                </ul>
            </div>
        </div>
        <div className="bg-white w-full flex flex-row text-black items-center h-20 shadow">
            <div className="w-1/2 flex flex-row justify-center"><NavLink to={"/"}><h1 className="text-3xl uppercase ">Fashion<span className=" uppercase text-red-400">Cube</span></h1> </NavLink></div>
            <div className="w-1/2 flex flex-row justify-evenly w-full">
                <div className="ml-6 flex flex-row w-1/2 justify-center">
                    <ul className="flex flex-row justify-end w-full">
                        <li className="pr-3 text-xl font-medium uppercase "><NavLink to={"/"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Home</NavLink> </li>
                        <li className="pr-3  text-xl font-medium uppercase "> <NavLink to={"/shop"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Shop</NavLink></li>
                        <li className="pr-3  text-xl font-medium uppercase "><NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Contact</NavLink></li>
                    </ul></div>
                <div className="flex flex-row w-1/2">
                    <ul className="flex flex-row justify-center w-full">
                        <li className="pr-3  text-xl font-medium uppercase ">Search</li>
                        <li className="pr-3  text-xl font-medium uppercase "><NavLink to={"/Profile"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Profile</NavLink></li>
                        <li className="pr-3  text-xl font-medium uppercase "><NavLink to={"/cart"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    </header>)
}