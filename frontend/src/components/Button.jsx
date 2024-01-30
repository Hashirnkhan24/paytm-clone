const Button = ({label, onClick}) => {
    return (
        <div className="mt-2">
            <button type="button" onClick={onClick} className="w-full text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800 dark:border-blue-800">{label}</button>
        </div>
    )
}

export default Button