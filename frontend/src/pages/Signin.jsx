import axios from "axios"
import { BottomWarning, Button, Heading, InputBox, SubHeading } from "../components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onSignIn = async() => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
            username : username,
            password : password
            })
            console.log(localStorage.setItem("token", response.data.token))
            navigate("/dashboard")
        } catch (error) {
            console.log("Error signing in", error.response)
                if(error.response && error.response.status === 411) {
                    alert("Error signing in: Length Required")
                } else if (error.response && error.response.status === 401) {
                    alert("Invalid credentials");
                } else {
                    alert("An unexpected error occurred while signing in");
            }
        }
    }
    return (
        <>
        <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 max-w-md max-h-lg bg-white rounded-md shadow-md py-2 px-8">
                <div className="flex flex-col items-center">
                    <Heading label="Sign In"></Heading>
                    <SubHeading label="Enter your credentials to access your account"></SubHeading>
                </div>
                <InputBox 
                    label={"Username:"} 
                    placeholder={"john123"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}></InputBox>
                <InputBox 
                    label={"Password:"} 
                        placeholder={" "}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></InputBox>
                <Button label={"Sign In"} onClick={onSignIn}></Button>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
        </>
    )
}

export default Signin