import axios from "axios"

const useUserData = () => {
    const fetchUser = async() => {
        const authToken = localStorage.getItem("token")
        const response = await axios.get('http://localhost:3000/api/v1/user/',{
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }})
            return response
    } 
    return fetchUser
}
    
    

export { useUserData }