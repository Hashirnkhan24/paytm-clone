import { BottomWarning, Button, Heading, InputBox, SubHeading } from "../components"

const Signin = () => {
    
    return (
        <>
        <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 max-w-md max-h-lg bg-white rounded-md shadow-md py-2 px-8">
                <div className="flex flex-col items-center">
                    <Heading label="Sign In"></Heading>
                    <SubHeading label="Enter your credentials to access your account"></SubHeading>
                </div>
                <InputBox label={"Email:"} placeholder={"johndoe@example.com"}></InputBox>
                <InputBox label={"Passowrd:"} placeholder={" "}></InputBox>
                <Button label={"Sign In"}></Button>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
        </>
    )
}

export default Signin