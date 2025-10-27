import axios from "axios";


// create axios instant
const API = axios.create({
    baseURL : "http://localhost:5050",
    timeout : 20000,
    withCredentials : true,
    headers : {},
    proxy : {
        host : ""
    }
});


// export default
export default API