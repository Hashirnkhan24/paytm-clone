const UseData = () => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/user/bulk');
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error("Error fetching userList:", error);
            throw error;
        }
    };

    return fetchData;
};

export { UseData };
