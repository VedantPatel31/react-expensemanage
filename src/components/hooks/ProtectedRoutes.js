import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import UserLogin from '../users/UserLogin';

const useAuth=()=>{
    const [isAuth, setisAuth] = useState(false);
    useEffect(() => {
     const token = localStorage.getItem("token");
     if(token){
        console.log(token);
        setisAuth(true);
     }
    }, [])
    return isAuth;
}

const ProtectedRoutes=()=>{
    const auth = useAuth();
    return auth===true?<Outlet/>:<UserLogin/>
}

export default ProtectedRoutes;