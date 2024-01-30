const InputBox = ({label, placeholder, onChange, value}) => {
    return (
        <div className="mb-2">
            <div className="text-sm font-medium p-2">{label}</div>
            <div className="border border-slate-300 rounded-md p-2 shadow-sm">
                <input type="text" className="focus:outline-none" placeholder={placeholder} onChange={onChange} value={value} />
            </div>
        </div>
    )
}

export default InputBox