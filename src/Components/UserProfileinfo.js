import { useEffect, useState } from "react"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
export default function UserProfileInfo() {
    // let orders = [1, 2, 3, 4, 5, 6, 7]
    const userState = useSelector(state => state.user)
    const [orders, setorders] = useState([])
    useEffect(() => {
        if (!localStorage.getItem('token')) return
        fetch(`http://localhost:3000/api/user/getOrders?user=${userState.email}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        }).then(r => {
            if (!r.ok) throw "Error"
            return r.json()
        }).then(data => {
            console.log('data', data)
            setorders(p => [...data.data.orders])
        }
        ).catch(e => console.log(e))
    }, [])
    return <div className="flex flex-row w-full justify-evenly max-h-full overflow-hidden">
        <div className="w-1/3 sm:w-1/5 border-2 border-slate-200 rounded-md p-2 flex flex-col align-center max-h-80">
            <h1 className="text-2xl font-semibold text-center">About</h1>
            <div className="mx-1 my-5 h-full w-full p-2">
                <img src={require("../assets/user.png")} className="h-full w-full object-cover" />
            </div>
            <button className="my-3 border-2 border-slate-200 shadow-md text-blue-800 bg-white p-2 rounded-md font-bold hover:bg-slate-700 hover:text-white">Change Profile</button>
        </div>
        <div className="w-2/3 md:w-3/5 border-2 border-slate-200 rounded-md p-5 flex flex-col items-start">
            <div className="flex w-3/5 justify-between">
                <h1 className="w-1/2 text-slate-400 md:text-2xl">Name</h1>
                <h1 className="w-1/2 text-slate-800 md:text-xl font-semibold"> {userState.name}</h1>
            </div>
            <div className="flex w-3/5 justify-between">
                <h1 className="w-1/2 text-slate-400 md:text-2xl">Email</h1>
                <h1 className="w-1/2 text-slate-800 text-sm md:text-xl font-semibold">{userState.email}</h1>
            </div>
            <div className="flex flex-row w-2/5 justify-between">
                <button className="my-3 border-2 text-sm w-28 whitespace-nowrap p-2 border-slate-200 shadow-md text-blue-600 bg-white md:p-2 rounded-md font-bold hover:bg-slate-700 hover:text-white">Check Orders</button>
            </div>
            {orders.length > 0 && orders.map((i,ind)=> <h1 className="text-lg">{ind+1}-{i.slice(0,10)}</h1>)}

        </div>

    </div>
}