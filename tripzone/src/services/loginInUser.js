import Axios from "axios";

const loginInUser = async (username, password) => {
    console.log("login function called")
    const response = await Axios.get("https://nijin-server.vercel.app/api/tripzone/login", {
        params: {
            username, password
        }
    })
    return response.data;
}

export default loginInUser;