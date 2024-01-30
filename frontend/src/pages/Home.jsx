import { useNavigate } from "react-router-dom"
import { Button } from "../components"

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>

            <h1 className="text-3xl font-bold">Payments</h1>
            <h2 className="text-xl font-semibold">Your Daily Wallet</h2>
            <div className="text-md">Payments made simplified and secured!</div>
            <div className="flex justify-center items-center full">
                <button className="m-2 text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800 dark:border-blue-800" onClick={() => navigate("/signup")} >Sign Up</button>
                <button className="m-2 text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800 dark:border-blue-800" onClick={() => navigate("/signin")} >Sign In</button>
            </div>
        </div>
        </>
    )
}

export default Home