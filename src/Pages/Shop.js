import { useEffect, useState } from "react"
import Collection from "../Components/Collection"
import Sidebar from "../Components/Sidebar"
import { Outlet, redirect, useLocation, useMatches, useNavigate } from "react-router-dom"

export default function Shop() {
    const match = useLocation()
    let path = match.pathname.split('/')
    const navigate = useNavigate()
    console.log(match)
    useEffect(() => {
        if (match.pathname == "/shop")
            navigate("/shop/Men")
    })
    return <div className=" flex flex-col">
        <div className="shadow-md w-full px-36 py-4 flex flex-row fixed bg-white z-10">Home{path.map(p => <h1 key={Math.random()*1000} className="no-underline decoration-transparent">{isNaN(parseInt(p, 1)) ? p : parseInt(p)}&gt;</h1>)}</div>
        <div className="w-full flex flex-row justify-start min-h-full mt-20">
            <div className="shadow-lg p-4 fixed z-30 bg-white h-full"><Sidebar /></div>
            <div className="w-4/5 ml-72"><Outlet /></div>
        </div>
    </div>
}