import { useEffect, useState } from "react";
import { Navbar } from "../components";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ balance }) => {
    const [userList, setUserList] = useState({
        user: [],
    });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/user/bulk')
            .then((response) => response.json())
            .then((data) => setUserList(data))
            .catch((error) => console.error("Error fetching userList:", error));
        }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredUsers = userList.user.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const navigate = useNavigate()
    const sendMoneyOnClick = () => {
        navigate("/send")
    }

    return (
        <div>
            <Navbar />
            <div className="p-4 text-white shadow-lg rounded-sm bg-blue-900 text-2xl font-semibold mt-3 ml-7 inline-block">
                Your Balance ₹{balance || 5000}
            </div>
            <div>
                <div className="mt-5 mx-4 text-2xl font-semibold text-blue-900">Users</div>
                <div className="border shadow-md p-2 m-2  block-inline">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="focus:outline-none w-full"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6 "
                >
                <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
        <div>
            <ul className="shadow-md mx-2">
                {filteredUsers.map((user) => (
                <li key={user.username} className="flex justify-between p-3 border">
                    <div>{user.username}</div>
                    <div>
                        <button className="p-2 text-md bg-blue-900 text-white rounded-[3px]" onClick={sendMoneyOnClick}>Send Money</button>
                    </div>
                </li>
                ))}
            </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
