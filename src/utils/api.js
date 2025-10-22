import axios from "axios";


// create axios instant
const API = axios.create({
    baseURL : "https://blood-donation-club-backend-hj2h.onrender.com/",
    timeout : 20000,
    withCredentials : true,
    headers : {},
    proxy : {
        host : ""
    }
});


// export default
export default API