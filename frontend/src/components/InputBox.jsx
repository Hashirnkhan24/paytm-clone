const InputBox = ({label, placeholder}) => {
    return (
        <div className="mb-2">
            <div className="text-sm font-medium p-2">{label}</div>
            <div className="border border-slate-300 rounded-md p-2">
                <input type="text" placeholder={placeholder}  />
            </div>
        </div>
    )
}

export default InputBox