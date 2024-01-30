import { useEffect, useState } from "react";
import { useUserData } from "../CustomHooks/UseUserData";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    
    const [username, setUsername] = useState('User');
    const fetchUserFuntion = useUserData()
    const navigate = useNavigate()
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
    const onLogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <nav className="fixed-top flex justify-between items-center p-2 shadow-md">
            <div className="mx-3 font-bold text-2xl text-blue-900">
                Payments App
            </div>
            <div className="flex justify-end items-center">
                <div className=" flex justify-end mx-3">
                    <h3 className="px-1 text-xl font-medium">Hello, {username}</h3>

                </div>
                <Button onClick={onLogOut} label={"Log Out"}></Button>
            </div>
        </nav>
    )
}

export default Navbar