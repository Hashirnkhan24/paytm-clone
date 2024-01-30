import { useState } from "react"
import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] =  useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSignUp = async () => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username : username,
            firstName : firstName,
            lastName : lastName,
            password : password,
        })
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
    }

    return (
        <>
        <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 max-w-md max-h-lg bg-white rounded-md shadow-md py-2 px-8">
                <div className="flex flex-col items-center">
                <Heading label="Sign Up"></Heading>
                <SubHeading label="Enter your inormation to create an account"></SubHeading>
                </div>
                <InputBox 
                    label={"First Name:"} 
                    placeholder={"John"} 
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}/>
                <InputBox 
                    label={"Last Name:"} 
                    placeholder={"Doe"}
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)} />
                <InputBox 
                    label={"Username"} 
                    placeholder={"user123"} 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}/>
                <InputBox 
                    label={"Password:"} 
                    placeholder={" "} 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                <Button label={"Sign Up"} onClick={onSignUp}></Button>
                <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/dashboard"}></BottomWarning>
            </div>
        </div>
        </>
    )
}

export default Signup