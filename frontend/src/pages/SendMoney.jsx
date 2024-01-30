import {useState } from "react"
import {Heading, InputBox } from "../components"
import axios from "axios"
import { useNavigate, useSearchParams } from "react-router-dom"

const SendMoney = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const [amount, setAmount] = useState(0)
    const authToken = localStorage.getItem('token')
    const [transferBtn, setTransferBtn] = useState("Initiate Transfer")
    const [color, setColor] = useState("w-full text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-900 dark:hover:bg-blue-800 dark:focus:ring-blue-800 dark:border-blue-800")
    const navigate = useNavigate()

        const transferReq = async() => {
            const response = await axios.post('http://localhost:3000/api/v1/account/transfer', {
                    to : id,
                    amount : amount
                },{
                    headers : {
                        'Authorization': `Bearer ${authToken}`
                    }
                }
            )
            setTransferBtn(response.data.message)
            if(response.data.message === "Transaction Successful!") {
                setColor("w-full text-white bg-green-900 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-900 dark:hover:bg-green-800 dark:focus:ring-green-800 dark:border-green-800")
            } else {
                setColor("w-full text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-red-800 dark:focus:ring-red-800 dark:border-red-800")
            }
        }
        const backToDash = () => {
            navigate('/dashboard')
        }
    return (
        <>
        <div className="flex justify-center items-center h-screen w-full bg-gray-100">
            <div className="bg-white max-w-md w-max m-2 p-6  shadow-md">
            <Heading label={"Send Money"}></Heading>
            <br />
            <div className="flex justify-start items-center my-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
            <div className="text-center font-medium text-md px-2">{name}</div>
            </div>
            <InputBox 
                label={"Amount (in Rs)"} 
                placeholder={"Enter amount"}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}></InputBox>
            <button className={color} onClick={transferReq}>{transferBtn}</button>
            <button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:ring-slate-800 dark:border-slate-800" onClick={backToDash}>Go to dashboard</button>
            </div>
        </div>
        </>
    )
}

export default SendMoney