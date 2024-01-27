import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components"

const Signup = () => {
    
    return (
        <>
        <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 max-w-md max-h-lg bg-white rounded-md shadow-md py-2 px-8">
                <div className="flex flex-col items-center">
                <Heading label="Sign Up"></Heading>
                <SubHeading label="Enter your inormation to create an account"></SubHeading>
                </div>
                <InputBox label={"First Name:"} placeholder={"John"}></InputBox>
                <InputBox label={"Last Name:"} placeholder={"Doe"}></InputBox>
                <InputBox label={"Email:"} placeholder={"johndoe@example.com"}></InputBox>
                <InputBox label={"Passowrd:"} placeholder={" "}></InputBox>
                <Button label={"Sign Up"}></Button>
                <BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}></BottomWarning>
            </div>
        </div>
        </>
    )
}

export default Signup