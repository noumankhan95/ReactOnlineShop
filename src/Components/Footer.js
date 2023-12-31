export default function Footer() {
    return <footer className="w-full bg-slate-200 text-black p-2 absolute z-50 bottom-0">
        <section className="flex flex-col items-start">
            <div className="flex flex-row justify-between w-full md:px-20">
                <div className="flex flex-row flex-wrap md:flex-nowrap">
                    <ul className="flex flex-row w-full flex-wrap md:flex-nowrap">
                        <li className="text-lg px-4">Blogs</li>
                        <li className="text-lg px-4">FAQS</li>
                        <li className="text-lg px-4">Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-row flex-wrap md:flex-nowrap">
                    <ul className="flex flex-row flex-wrap md:flex-nowrap">
                        <li className="text-lg px-4">Facebook</li>
                        <li className="text-lg px-4">Twitter</li>
                        <li className="text-lg px-4">Instagram</li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
            <div className="py-5 md:px-20">
                <h1 className="md:text-2xl"> &copy;2023 All Rights Reserved By <span className="text-red-500">Muhammad Nouman Sajid</span></h1>
            </div>
        </section>
    </footer>
}