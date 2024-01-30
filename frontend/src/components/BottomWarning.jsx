import { Link } from "react-router-dom"

const BottomWarning = ({label, buttonText, to}) => {
    
    return (
        <div className="flex justify-center m-2">
            <div className=" m-1">
                {label}
            </div>
            <Link to={to} className="underline hover:cursor-pointer m-1 text-blue-800">
                {buttonText}
            </Link>
        </div>
    )
}

export default BottomWarning