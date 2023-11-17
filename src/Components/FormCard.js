export default function FormCard({ children, customClass }) {
    return <div className={`m-auto w-2/5 bg-white border-2 border-slate-300 p-10 rounded-sm shadow-md flex flex-col ${customClass}`}>
        {children}
    </div>
}