import { useEffect, useState } from "react"
import Collection from "../Components/Collection"
import Sidebar from "../Components/Sidebar"
import { Outlet, redirect, useLocation, useMatches, useNavigate } from "react-router-dom"

export default function Shop() {
    const match = useLocation()
    let path = match.pathname.split('/')
    const navigate = useNavigate()
    console.log(path)
    useEffect(() => {
        if (match.pathname == "/shop")
            navigate("/shop/Men")
    })
    return <div className="flex flex-col w-full">
        <div className="shadow-md w-full pl-4 md:px-36 py-4 flex flex-row fixed bg-white z-10">Home
            {path.map(p => <h1 key={Math.random() * 1000} className="no-underline decoration-transparent">{p.replace("%20", " ")}&gt;</h1>)}
        </div>
        <div className="w-full mt-16">
            <div className="shadow-lg p-4 fixed z-30 bg-white h-full w-28 md:w-1/5"><Sidebar /></div>
            <div className="z-70 w-4/5 float-right"><Outlet /></div>
        </div>
    </div>
}