export default function Deal() {
    return <section className="w-full flex flex-col relative my-8">
        <h1 className="text-slate-900 underline underline-offset-8 decoration-pink-800 text-center text-3xl mb-8">Weekend Sale On NOW !</h1>
        <div className="absolute right-28 bottom-28 flex flex-col">
            <h1 className="text-4xl">Deal Of The Week Valid Until</h1>
            <div className="flex flex-row w-full justify-around my-4">
                {/* <div className="text-4xl bg-slate-300 p-6 rounded-lg">{new Date().getDay()}</div> */}
                <div className="text-4xl bg-slate-200 p-6 rounded-lg" >{new Date().getDate()}</div>
                <div className="text-4xl bg-slate-300 p-6 rounded-lg">{new Date().getMonth()}</div>
                <div className="text-4xl bg-slate-200 p-6 rounded-lg">{new Date().getFullYear()}</div>
            </div>
            <button className="border-1 border-slate-800 rounded-md p-3 bg-slate-900 text-white hover:bg-slate-400 hover:text-black flex self-center">Shop Now</button>
        </div>
        <img src={require("../assets/purse.jpg")} className="object-cover" style={{ height: 420 }} />
    </section>
}