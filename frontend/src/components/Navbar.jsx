import { useEffect, useState } from "react";
import { useUserData } from "../CustomHooks/UseUserData";

const Navbar = () => {
    
    const [username, setUsername] = useState('User');
    const fetchUserFuntion = useUserData()
    
    useEffect(() => {
        const fetchUserData = async() => {
            try {
            const response = await fetchUserFuntion()
                setUsername(response.data.user.firstName)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    }, [])
    
    return (
        <nav className="fixed-top flex justify-between p-2 shadow-md">
            <div className="mx-3 font-bold text-xl text-blue-900">
                Payments App
            </div>
            <div className=" flex justify-end mx-3">
                <h3 className="px-1">Hello, {username}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 bg-blue-900 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
        </nav>
    )
}

export default Navbar