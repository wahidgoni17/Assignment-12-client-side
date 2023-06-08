import { Navigate, useLocation } from "react-router-dom";
import loaderimg from '../assets/loader3.gif';
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user , loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <img src={loaderimg} alt="" />
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;