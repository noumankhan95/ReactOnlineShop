import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../store/userState"
import { useCallback } from "react"
export default function Header() {
    const userState = useSelector(state => state.user)
    const dispatch = useDispatch()
    const UserLogout = useCallback(async () => {
        try {
            const res = dispatch(logoutUser())
            console.log('res', res)
        } catch (e) {
            console.log(e)
        }
    }, [])
    console.log("User", userState)
    return (<header className="bg-black text-white w-full fixed top-0 z-10">
        <div className="flex flex-row justify-between p-2">
            <div className="w-1/2 text-sm ">Free Shipping On Orders Above 50$</div>
            <div className="w-1/2">
                <ul className="w-full flex flex-row px-5 justify-around text-sm ">
                    <li>USD</li>
                    <li>My Account</li>
                </ul>
            </div>
        </div>
        <div className="bg-white w-full flex flex-row text-black items-center h-20 shadow">
            <div className="w-1/2 flex flex-row justify-center"><NavLink to={"/"}><h1 className="md:text-3xl uppercase ">Fashion<span className=" uppercase text-red-400">Cube</span></h1> </NavLink></div>
            <div className="w-1/2 flex flex-row justify-evenly w-full items-center">
                <div className="ml-6 flex flex-row w-1/2 justify-center">
                    <ul className="flex flex-row justify-end w-full md:text-md" >
                        <li className="pr-3 md:text-xl font-medium uppercase "><NavLink to={"/"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Home</NavLink> </li>
                        <li className="pr-3  md:text-xl font-medium uppercase "> <NavLink to={"/shop"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Shop</NavLink></li>
                        <li className="pr-3  md:text-xl font-medium uppercase "><NavLink to={"/contact"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Contact</NavLink></li>
                    </ul></div>
                <div className="flex flex-row w-1/2 items-center hidden sm:block">
                    <ul className="flex flex-row justify-center w-full w-1/2">
                        <li className="pr-3  text-xl font-medium uppercase ">Search</li>
                        <li className="pr-3  text-xl font-medium uppercase "><NavLink to={"/Profile"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Profile</NavLink></li>
                        <li className="pr-3  text-xl font-medium uppercase "><NavLink to={"/cart"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Cart</NavLink></li>
                        {userState.isadmin && <li className="pr-3  text-xl font-medium uppercase "><NavLink to={"/addproduct"} className={({ isActive }) => isActive ? "text-red-900" : ""}>Add Product</NavLink></li>}
                        {userState.isloggedin && <li className="pr-3  text-xl font-medium uppercase cursor-pointer" onClick={UserLogout}>Logout</li>}
                    </ul>
                </div>
            </div>
        </div>

    </header>)
}