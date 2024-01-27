const Button = ({label, onClick}) => {
    return (
        <div className="mt-2">
            <button type="button" onClick={onClick} className="w-full text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-800 dark:border-gray-800">{label}</button>
        </div>
    )
}

export default Button