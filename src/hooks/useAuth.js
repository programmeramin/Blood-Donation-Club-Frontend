import { useSelector } from "react-redux";
import { authSelect } from '../features/auth/authSlice';


const useAuth = () =>{
    const {user} = useSelector(authSelect);
   // console.log(user);
    
    return {donorAuth : user};
 
    
}

export default useAuth;